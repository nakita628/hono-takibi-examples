import { createRoute, z } from '@hono/zod-openapi'

const AssociateWebACLResponseSchema = z.object({}).openapi('AssociateWebACLResponse')

const ResourceIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('ResourceId')

const ResourceArnSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1224)
  .openapi('ResourceArn')

const AssociateWebACLRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier (ID) for the web ACL. ' }),
    ),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN (Amazon Resource Name) of the resource to be protected, either an application load balancer or Amazon API Gateway stage. </p> <p>The ARN should be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['WebACLId', 'ResourceArn'], title: 'AssociateWebACLRequest' })
  .openapi('AssociateWebACLRequest')

const WAFInternalErrorExceptionSchema = z.any().openapi('WAFInternalErrorException')

const WAFInvalidAccountExceptionSchema = z.any().openapi('WAFInvalidAccountException')

const WAFInvalidParameterExceptionSchema = z.any().openapi('WAFInvalidParameterException')

const WAFNonexistentItemExceptionSchema = z.any().openapi('WAFNonexistentItemException')

const WAFUnavailableEntityExceptionSchema = z.any().openapi('WAFUnavailableEntityException')

const ResourceNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('ResourceName')

const MatchFieldTypeSchema = z
  .enum(['URI', 'QUERY_STRING', 'HEADER', 'METHOD', 'BODY', 'SINGLE_QUERY_ARG', 'ALL_QUERY_ARGS'])
  .openapi('MatchFieldType')

const MatchFieldDataSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('MatchFieldData')

const FieldToMatchSchema = z
  .object({
    Type: MatchFieldTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:</p> <ul> <li> <p> <code>HEADER</code>: A specified request header, for example, the value of the <code>User-Agent</code> or <code>Referer</code> header. If you choose <code>HEADER</code> for the type, specify the name of the header in <code>Data</code>.</p> </li> <li> <p> <code>METHOD</code>: The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>.</p> </li> <li> <p> <code>QUERY_STRING</code>: A query string, which is the part of a URL that appears after a <code>?</code> character, if any.</p> </li> <li> <p> <code>URI</code>: The part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> </li> <li> <p> <code>BODY</code>: The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first <code>8192</code> bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set. For more information, see <a>CreateSizeConstraintSet</a>. </p> </li> <li> <p> <code>SINGLE_QUERY_ARG</code>: The parameter in the query string that you will inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The maximum length for <code>SINGLE_QUERY_ARG</code> is 30 characters.</p> </li> <li> <p> <code>ALL_QUERY_ARGS</code>: Similar to <code>SINGLE_QUERY_ARG</code>, but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in <code>TargetString</code>.</p> </li> </ul>',
        }),
    ),
    Data: MatchFieldDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When the value of <code>Type</code> is <code>HEADER</code>, enter the name of the header that you want AWS WAF to search, for example, <code>User-Agent</code> or <code>Referer</code>. The name of the header is not case sensitive.</p> <p>When the value of <code>Type</code> is <code>SINGLE_QUERY_ARG</code>, enter the name of the parameter that you want AWS WAF to search, for example, <code>UserName</code> or <code>SalesRegion</code>. The parameter name is not case sensitive.</p> <p>If the value of <code>Type</code> is any other value, omit <code>Data</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>',
  })
  .openapi('FieldToMatch')

const ByteMatchTargetStringSchema = z.string().openapi('ByteMatchTargetString')

const TextTransformationSchema = z
  .enum([
    'NONE',
    'COMPRESS_WHITE_SPACE',
    'HTML_ENTITY_DECODE',
    'LOWERCASE',
    'CMD_LINE',
    'URL_DECODE',
  ])
  .openapi('TextTransformation')

const PositionalConstraintSchema = z
  .enum(['EXACTLY', 'STARTS_WITH', 'ENDS_WITH', 'CONTAINS', 'CONTAINS_WORD'])
  .openapi('PositionalConstraint')

const ByteMatchTupleSchema = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The part of a web request that you want AWS WAF to search, such as a specified header or a query string. For more information, see <a>FieldToMatch</a>.',
        }),
    ),
    TargetString: ByteMatchTargetStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value that you want AWS WAF to search for. AWS WAF searches for the specified string in the part of web requests that you specified in <code>FieldToMatch</code>. The maximum length of the value is 50 bytes.</p> <p>Valid values depend on the values that you specified for <code>FieldToMatch</code>:</p> <ul> <li> <p> <code>HEADER</code>: The value that you want AWS WAF to search for in the request header that you specified in <a>FieldToMatch</a>, for example, the value of the <code>User-Agent</code> or <code>Referer</code> header.</p> </li> <li> <p> <code>METHOD</code>: The HTTP method, which indicates the type of operation specified in the request. CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>.</p> </li> <li> <p> <code>QUERY_STRING</code>: The value that you want AWS WAF to search for in the query string, which is the part of a URL that appears after a <code>?</code> character.</p> </li> <li> <p> <code>URI</code>: The value that you want AWS WAF to search for in the part of a URL that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> </li> <li> <p> <code>BODY</code>: The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first <code>8192</code> bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set. For more information, see <a>CreateSizeConstraintSet</a>. </p> </li> <li> <p> <code>SINGLE_QUERY_ARG</code>: The parameter in the query string that you will inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The maximum length for <code>SINGLE_QUERY_ARG</code> is 30 characters.</p> </li> <li> <p> <code>ALL_QUERY_ARGS</code>: Similar to <code>SINGLE_QUERY_ARG</code>, but instead of inspecting a single parameter, AWS WAF inspects all parameters within the query string for the value or regex pattern that you specify in <code>TargetString</code>.</p> </li> </ul> <p>If <code>TargetString</code> includes alphabetic characters A-Z and a-z, note that the value is case sensitive.</p> <p> <b>If you're using the AWS WAF API</b> </p> <p>Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 50 bytes.</p> <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the value of <code>Data</code> is <code>User-Agent</code>. If you want to search the <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode <code>BadBot</code> using MIME base64-encoding and include the resulting value, <code>QmFkQm90</code>, in the value of <code>TargetString</code>.</p> <p> <b>If you're using the AWS CLI or one of the AWS SDKs</b> </p> <p>The value that you want AWS WAF to search for. The SDK automatically base64 encodes the value.</p>",
        }),
    ),
    TextTransformation: TextTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting it for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p> <b>CMD_LINE</b> </p> <p>When you\'re concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \\ " \' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\\f, formfeed, decimal 12</p> </li> <li> <p>\\t, tab, decimal 9</p> </li> <li> <p>\\n, newline, decimal 10</p> </li> <li> <p>\\r, carriage return, decimal 13</p> </li> <li> <p>\\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don\'t want to perform any text transformations.</p>',
        }),
    ),
    PositionalConstraint: PositionalConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search. Valid values include the following:</p> <p> <b>CONTAINS</b> </p> <p>The specified part of the web request must include the value of <code>TargetString</code>, but the location doesn't matter.</p> <p> <b>CONTAINS_WORD</b> </p> <p>The specified part of the web request must include the value of <code>TargetString</code>, and <code>TargetString</code> must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, <code>TargetString</code> must be a word, which means one of the following:</p> <ul> <li> <p> <code>TargetString</code> exactly matches the value of the specified part of the web request, such as the value of a header.</p> </li> <li> <p> <code>TargetString</code> is at the beginning of the specified part of the web request and is followed by a character other than an alphanumeric character or underscore (_), for example, <code>BadBot;</code>.</p> </li> <li> <p> <code>TargetString</code> is at the end of the specified part of the web request and is preceded by a character other than an alphanumeric character or underscore (_), for example, <code>;BadBot</code>.</p> </li> <li> <p> <code>TargetString</code> is in the middle of the specified part of the web request and is preceded and followed by characters other than alphanumeric characters or underscore (_), for example, <code>-BadBot;</code>.</p> </li> </ul> <p> <b>EXACTLY</b> </p> <p>The value of the specified part of the web request must exactly match the value of <code>TargetString</code>.</p> <p> <b>STARTS_WITH</b> </p> <p>The value of <code>TargetString</code> must appear at the beginning of the specified part of the web request.</p> <p> <b>ENDS_WITH</b> </p> <p>The value of <code>TargetString</code> must appear at the end of the specified part of the web request.</p>",
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TargetString', 'TextTransformation', 'PositionalConstraint'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>',
  })
  .openapi('ByteMatchTuple')

const ByteMatchTuplesSchema = z.array(ByteMatchTupleSchema).openapi('ByteMatchTuples')

const ByteMatchSetSchema = z
  .object({
    ByteMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>ByteMatchSetId</code> for a <code>ByteMatchSet</code>. You use <code>ByteMatchSetId</code> to get information about a <code>ByteMatchSet</code> (see <a>GetByteMatchSet</a>), update a <code>ByteMatchSet</code> (see <a>UpdateByteMatchSet</a>), insert a <code>ByteMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>ByteMatchSet</code> from AWS WAF (see <a>DeleteByteMatchSet</a>).</p> <p> <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a <code>ByteMatchSet</code>.",
        }),
    ).exactOptional(),
    ByteMatchTuples: ByteMatchTuplesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.',
        }),
    ),
  })
  .openapi({
    required: ['ByteMatchSetId', 'ByteMatchTuples'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>',
  })
  .openapi('ByteMatchSet')

const ChangeTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('ChangeToken')

const CreateByteMatchSetResponseSchema = z
  .object({
    ByteMatchSet: ByteMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>ByteMatchSet</a> that contains no <code>ByteMatchTuple</code> objects.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateByteMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateByteMatchSetResponse')

const CreateByteMatchSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a <code>ByteMatchSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateByteMatchSetRequest' })
  .openapi('CreateByteMatchSetRequest')

const WAFDisallowedNameExceptionSchema = z.any().openapi('WAFDisallowedNameException')

const WAFStaleDataExceptionSchema = z.any().openapi('WAFStaleDataException')

const WAFLimitsExceededExceptionSchema = z.any().openapi('WAFLimitsExceededException')

const GeoMatchConstraintTypeSchema = z.literal('Country').openapi('GeoMatchConstraintType')

const GeoMatchConstraintValueSchema = z
  .enum([
    'AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BH',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BQ',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CW',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',
    'JO',
    'KZ',
    'KE',
    'KI',
    'KP',
    'KR',
    'KW',
    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'OM',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'QA',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SA',
    'SN',
    'RS',
    'SC',
    'SL',
    'SG',
    'SX',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'SS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'AE',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW',
  ])
  .openapi('GeoMatchConstraintValue')

const GeoMatchConstraintSchema = z
  .object({
    Type: GeoMatchConstraintTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of geographical area you want AWS WAF to search for. Currently <code>Country</code> is the only valid value.',
        }),
    ),
    Value: GeoMatchConstraintValueSchema.and(
      z.any().openapi({ description: 'The country that you want AWS WAF to search for.' }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p>',
  })
  .openapi('GeoMatchConstraint')

const GeoMatchConstraintsSchema = z.array(GeoMatchConstraintSchema).openapi('GeoMatchConstraints')

const GeoMatchSetSchema = z
  .object({
    GeoMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>GeoMatchSetId</code> for an <code>GeoMatchSet</code>. You use <code>GeoMatchSetId</code> to get information about a <code>GeoMatchSet</code> (see <a>GeoMatchSet</a>), update a <code>GeoMatchSet</code> (see <a>UpdateGeoMatchSet</a>), insert a <code>GeoMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>GeoMatchSet</code> from AWS WAF (see <a>DeleteGeoMatchSet</a>).</p> <p> <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.",
        }),
    ).exactOptional(),
    GeoMatchConstraints: GeoMatchConstraintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <a>GeoMatchConstraint</a> objects, which contain the country that you want AWS WAF to search for.',
        }),
    ),
  })
  .openapi({
    required: ['GeoMatchSetId', 'GeoMatchConstraints'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>',
  })
  .openapi('GeoMatchSet')

const CreateGeoMatchSetResponseSchema = z
  .object({
    GeoMatchSet: GeoMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>GeoMatchSet</a> returned in the <code>CreateGeoMatchSet</code> response. The <code>GeoMatchSet</code> contains no <code>GeoMatchConstraints</code>.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateGeoMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGeoMatchSetResponse')

const CreateGeoMatchSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>GeoMatchSet</a>. You can't change <code>Name</code> after you create the <code>GeoMatchSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateGeoMatchSetRequest' })
  .openapi('CreateGeoMatchSetRequest')

const IPSetDescriptorTypeSchema = z.enum(['IPV4', 'IPV6']).openapi('IPSetDescriptorType')

const IPSetDescriptorValueSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(50)
  .openapi('IPSetDescriptorValue')

const IPSetDescriptorSchema = z
  .object({
    Type: IPSetDescriptorTypeSchema.and(
      z.any().openapi({ description: 'Specify <code>IPV4</code> or <code>IPV6</code>.' }),
    ),
    Value: IPSetDescriptorValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify an IPv4 address by using CIDR notation. For example:</p> <ul> <li> <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>Specify an IPv6 address by using CIDR notation. For example:</p> <ul> <li> <p>To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>',
  })
  .openapi('IPSetDescriptor')

const IPSetDescriptorsSchema = z.array(IPSetDescriptorSchema).openapi('IPSetDescriptors')

const IPSetSchema = z
  .object({
    IPSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>IPSetId</code> for an <code>IPSet</code>. You use <code>IPSetId</code> to get information about an <code>IPSet</code> (see <a>GetIPSet</a>), update an <code>IPSet</code> (see <a>UpdateIPSet</a>), insert an <code>IPSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>IPSet</code> from AWS WAF (see <a>DeleteIPSet</a>).</p> <p> <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by <a>ListIPSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>IPSet</a>. You can't change the name of an <code>IPSet</code> after you create it.",
        }),
    ).exactOptional(),
    IPSetDescriptors: IPSetDescriptorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from. If the <code>WebACL</code> is associated with a CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.',
        }),
    ),
  })
  .openapi({
    required: ['IPSetId', 'IPSetDescriptors'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>',
  })
  .openapi('IPSet')

const CreateIPSetResponseSchema = z
  .object({
    IPSet: IPSetSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a>IPSet</a> returned in the <code>CreateIPSet</code> response.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateIPSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      IPSet: {
        IPSetDescriptors: [{ Type: 'IPV4', Value: '192.0.2.44/32' }],
        IPSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        Name: 'MyIPSetFriendlyName',
      },
    },
    required: [],
  })
  .openapi('CreateIPSetResponse')

const CreateIPSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>IPSet</a>. You can't change <code>Name</code> after you create the <code>IPSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateIPSetRequest' })
  .openapi('CreateIPSetRequest')

const MetricNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('MetricName')

const NegatedSchema = z.boolean().openapi('Negated')

const PredicateTypeSchema = z
  .enum([
    'IPMatch',
    'ByteMatch',
    'SqlInjectionMatch',
    'GeoMatch',
    'SizeConstraint',
    'XssMatch',
    'RegexMatch',
  ])
  .openapi('PredicateType')

const PredicateSchema = z
  .object({
    Negated: NegatedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set <code>Negated</code> to <code>False</code> if you want AWS WAF to allow, block, or count requests based on the settings in the specified <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, or <a>SizeConstraintSet</a>. For example, if an <code>IPSet</code> includes the IP address <code>192.0.2.44</code>, AWS WAF will allow or block requests based on that IP address.</p> <p>Set <code>Negated</code> to <code>True</code> if you want AWS WAF to allow or block a request based on the negation of the settings in the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, or <a>SizeConstraintSet</a>. For example, if an <code>IPSet</code> includes the IP address <code>192.0.2.44</code>, AWS WAF will allow, block, or count requests based on all IP addresses <i>except</i> <code>192.0.2.44</code>.</p>',
        }),
    ),
    Type: PredicateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of predicate in a <code>Rule</code>, such as <code>ByteMatch</code> or <code>IPSet</code>.',
        }),
    ),
    DataId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a predicate in a <code>Rule</code>, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>. The ID is returned by the corresponding <code>Create</code> or <code>List</code> command.',
        }),
    ),
  })
  .openapi({
    required: ['Negated', 'Type', 'DataId'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p>',
  })
  .openapi('Predicate')

const PredicatesSchema = z.array(PredicateSchema).openapi('Predicates')

const RateKeySchema = z.literal('IP').openapi('RateKey')

const RateLimitSchema = z.int().min(100).max(2000000000).openapi('RateLimit')

const RateBasedRuleSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a <code>RateBasedRule</code>. You use <code>RuleId</code> to get more information about a <code>RateBasedRule</code> (see <a>GetRateBasedRule</a>), update a <code>RateBasedRule</code> (see <a>UpdateRateBasedRule</a>), insert a <code>RateBasedRule</code> into a <code>WebACL</code> or delete one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RateBasedRule</code> from AWS WAF (see <a>DeleteRateBasedRule</a>).',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description for a <code>RateBasedRule</code>. You can't change the name of a <code>RateBasedRule</code> after you create it.",
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for a <code>RateBasedRule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>RateBasedRule</code>.',
        }),
    ).exactOptional(),
    MatchPredicates: PredicatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Predicates</code> object contains one <code>Predicate</code> element for each <a>ByteMatchSet</a>, <a>IPSet</a>, or <a>SqlInjectionMatchSet</a> object that you want to include in a <code>RateBasedRule</code>.',
        }),
    ),
    RateKey: RateKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The field that AWS WAF uses to determine if requests are likely arriving from single source and thus subject to rate monitoring. The only valid value for <code>RateKey</code> is <code>IP</code>. <code>IP</code> indicates that requests arriving from the same IP address are subject to the <code>RateLimit</code> that is specified in the <code>RateBasedRule</code>.',
        }),
    ),
    RateLimit: RateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of requests, which have an identical value in the field specified by the <code>RateKey</code>, allowed in a five-minute period. If the number of requests exceeds the <code>RateLimit</code> and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.',
        }),
    ),
  })
  .openapi({
    required: ['RuleId', 'MatchPredicates', 'RateKey', 'RateLimit'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you\'ve seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule\'s action (block or count), which is defined in the web ACL.</p>',
  })
  .openapi('RateBasedRule')

const CreateRateBasedRuleResponseSchema = z
  .object({
    Rule: RateBasedRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>RateBasedRule</a> that is returned in the <code>CreateRateBasedRule</code> response.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRateBasedRuleResponse')

const TagKeySchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z.string().regex(/.*/).min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: '<p/>' })),
    Value: TagValueSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can\'t manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).openapi('TagList')

const CreateRateBasedRuleRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RateBasedRule</a>. You can't change the name of a <code>RateBasedRule</code> after you create it.",
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>RateBasedRule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>RateBasedRule</code>.',
        }),
    ),
    RateKey: RateKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The field that AWS WAF uses to determine if requests are likely arriving from a single source and thus subject to rate monitoring. The only valid value for <code>RateKey</code> is <code>IP</code>. <code>IP</code> indicates that requests that arrive from the same IP address are subject to the <code>RateLimit</code> that is specified in the <code>RateBasedRule</code>.',
        }),
    ),
    RateLimit: RateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of requests, which have an identical value in the field that is specified by <code>RateKey</code>, allowed in a five-minute period. If the number of requests exceeds the <code>RateLimit</code> and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MetricName', 'RateKey', 'RateLimit', 'ChangeToken'],
    title: 'CreateRateBasedRuleRequest',
  })
  .openapi('CreateRateBasedRuleRequest')

const WAFTagOperationExceptionSchema = z.any().openapi('WAFTagOperationException')

const WAFTagOperationInternalErrorExceptionSchema = z
  .any()
  .openapi('WAFTagOperationInternalErrorException')

const WAFBadRequestExceptionSchema = z.any().openapi('WAFBadRequestException')

const RegexMatchTupleSchema = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies where in a web request to look for the <code>RegexPatternSet</code>.',
        }),
    ),
    TextTransformation: TextTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>RegexPatternSet</code> before inspecting a request for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p> <b>CMD_LINE</b> </p> <p>When you\'re concerned that attackers are injecting an operating system commandline command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \\ " \' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\\f, formfeed, decimal 12</p> </li> <li> <p>\\t, tab, decimal 9</p> </li> <li> <p>\\n, newline, decimal 10</p> </li> <li> <p>\\r, carriage return, decimal 13</p> </li> <li> <p>\\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don\'t want to perform any text transformations.</p>',
        }),
    ),
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>RegexPatternSetId</code> for a <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a <code>RegexPatternSet</code> (see <a>GetRegexPatternSet</a>), update a <code>RegexPatternSet</code> (see <a>UpdateRegexPatternSet</a>), insert a <code>RegexPatternSet</code> into a <code>RegexMatchSet</code> or delete one from a <code>RegexMatchSet</code> (see <a>UpdateRegexMatchSet</a>), and delete an <code>RegexPatternSet</code> from AWS WAF (see <a>DeleteRegexPatternSet</a>).</p> <p> <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformation', 'RegexPatternSetId'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>',
  })
  .openapi('RegexMatchTuple')

const RegexMatchTuplesSchema = z.array(RegexMatchTupleSchema).openapi('RegexMatchTuples')

const RegexMatchSetSchema = z
  .object({
    RegexMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>RegexMatchSetId</code> for a <code>RegexMatchSet</code>. You use <code>RegexMatchSetId</code> to get information about a <code>RegexMatchSet</code> (see <a>GetRegexMatchSet</a>), update a <code>RegexMatchSet</code> (see <a>UpdateRegexMatchSet</a>), insert a <code>RegexMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>RegexMatchSet</code> from AWS WAF (see <a>DeleteRegexMatchSet</a>).</p> <p> <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.</p>',
        }),
    ).exactOptional(),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a <code>RegexMatchSet</code>.",
        }),
    ).exactOptional(),
    RegexMatchTuples: RegexMatchTuplesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an array of <a>RegexMatchTuple</a> objects. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>',
    required: [],
  })
  .openapi('RegexMatchSet')

const CreateRegexMatchSetResponseSchema = z
  .object({
    RegexMatchSet: RegexMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>RegexMatchSet</a> that contains no <code>RegexMatchTuple</code> objects.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRegexMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRegexMatchSetResponse')

const CreateRegexMatchSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a <code>RegexMatchSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateRegexMatchSetRequest' })
  .openapi('CreateRegexMatchSetRequest')

const RegexPatternStringSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(512)
  .openapi('RegexPatternString')

const RegexPatternStringsSchema = z
  .array(RegexPatternStringSchema)
  .max(10)
  .openapi('RegexPatternStrings')

const RegexPatternSetSchema = z
  .object({
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a <code>RegexPatternSet</code>, update a <code>RegexPatternSet</code>, remove a <code>RegexPatternSet</code> from a <code>RegexMatchSet</code>, and delete a <code>RegexPatternSet</code> from AWS WAF.</p> <p> <code>RegexMatchSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a <code>RegexPatternSet</code>.",
        }),
    ).exactOptional(),
    RegexPatternStrings: RegexPatternStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the regular expression (regex) patterns that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>.',
        }),
    ),
  })
  .openapi({
    required: ['RegexPatternSetId', 'RegexPatternStrings'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>',
  })
  .openapi('RegexPatternSet')

const CreateRegexPatternSetResponseSchema = z
  .object({
    RegexPatternSet: RegexPatternSetSchema.and(
      z.any().openapi({ description: 'A <a>RegexPatternSet</a> that contains no objects.' }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRegexPatternSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRegexPatternSetResponse')

const CreateRegexPatternSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a <code>RegexPatternSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateRegexPatternSetRequest' })
  .openapi('CreateRegexPatternSetRequest')

const RuleSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>), update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete a one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p> <p> <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The friendly name or description for the <code>Rule</code>. You can't change the name of a <code>Rule</code> after you create it.",
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>Rule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change <code>MetricName</code> after you create the <code>Rule</code>.',
        }),
    ).exactOptional(),
    Predicates: PredicatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Predicates</code> object contains one <code>Predicate</code> element for each <a>ByteMatchSet</a>, <a>IPSet</a>, or <a>SqlInjectionMatchSet</a> object that you want to include in a <code>Rule</code>.',
        }),
    ),
  })
  .openapi({
    required: ['RuleId', 'Predicates'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p>',
  })
  .openapi('Rule')

const CreateRuleResponseSchema = z
  .object({
    Rule: RuleSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a>Rule</a> returned in the <code>CreateRule</code> response.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      Rule: {
        MetricName: 'WAFByteHeaderRule',
        Name: 'WAFByteHeaderRule',
        Predicates: [{ DataId: 'MyByteMatchSetID', Negated: false, Type: 'ByteMatch' }],
        RuleId: 'WAFRule-1-Example',
      },
    },
    required: [],
  })
  .openapi('CreateRuleResponse')

const CreateRuleRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>Rule</a>. You can't change the name of a <code>Rule</code> after you create it.",
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>Rule</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>Rule</code>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['Name', 'MetricName', 'ChangeToken'], title: 'CreateRuleRequest' })
  .openapi('CreateRuleRequest')

const RuleGroupSchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>RuleGroup</code>. You use <code>RuleGroupId</code> to get more information about a <code>RuleGroup</code> (see <a>GetRuleGroup</a>), update a <code>RuleGroup</code> (see <a>UpdateRuleGroup</a>), insert a <code>RuleGroup</code> into a <code>WebACL</code> or delete a one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RuleGroup</code> from AWS WAF (see <a>DeleteRuleGroup</a>).</p> <p> <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The friendly name or description for the <code>RuleGroup</code>. You can't change the name of a <code>RuleGroup</code> after you create it.",
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>RuleGroup</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleGroupId'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul>',
  })
  .openapi('RuleGroup')

const CreateRuleGroupResponseSchema = z
  .object({
    RuleGroup: RuleGroupSchema.and(
      z.any().openapi({ description: 'An empty <a>RuleGroup</a>.' }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateRuleGroup</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRuleGroupResponse')

const CreateRuleGroupRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RuleGroup</a>. You can't change <code>Name</code> after you create a <code>RuleGroup</code>.",
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>RuleGroup</code>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['Name', 'MetricName', 'ChangeToken'], title: 'CreateRuleGroupRequest' })
  .openapi('CreateRuleGroupRequest')

const ComparisonOperatorSchema = z
  .enum(['EQ', 'NE', 'LE', 'LT', 'GE', 'GT'])
  .openapi('ComparisonOperator')

const SizeSchema = z.int().min(0).max(21474836480).openapi('Size')

const SizeConstraintSchema = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies where in a web request to look for the size constraint.',
        }),
    ),
    TextTransformation: TextTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting it for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p>Note that if you choose <code>BODY</code> for the value of <code>Type</code>, you must choose <code>NONE</code> for <code>TextTransformation</code> because CloudFront forwards only the first 8192 bytes for inspection. </p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don\'t want to perform any text transformations.</p> <p> <b>CMD_LINE</b> </p> <p>When you\'re concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \\ " \' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\\f, formfeed, decimal 12</p> </li> <li> <p>\\t, tab, decimal 9</p> </li> <li> <p>\\n, newline, decimal 10</p> </li> <li> <p>\\r, carriage return, decimal 13</p> </li> <li> <p>\\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p>',
        }),
    ),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of comparison you want AWS WAF to perform. AWS WAF uses this in combination with the provided <code>Size</code> and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> <p> <b>EQ</b>: Used to test if the <code>Size</code> is equal to the size of the <code>FieldToMatch</code> </p> <p> <b>NE</b>: Used to test if the <code>Size</code> is not equal to the size of the <code>FieldToMatch</code> </p> <p> <b>LE</b>: Used to test if the <code>Size</code> is less than or equal to the size of the <code>FieldToMatch</code> </p> <p> <b>LT</b>: Used to test if the <code>Size</code> is strictly less than the size of the <code>FieldToMatch</code> </p> <p> <b>GE</b>: Used to test if the <code>Size</code> is greater than or equal to the size of the <code>FieldToMatch</code> </p> <p> <b>GT</b>: Used to test if the <code>Size</code> is strictly greater than the size of the <code>FieldToMatch</code> </p>',
        }),
    ),
    Size: SizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size in bytes that you want AWS WAF to compare against the size of the specified <code>FieldToMatch</code>. AWS WAF uses this in combination with <code>ComparisonOperator</code> and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p> <p>Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).</p> <p>If you specify <code>URI</code> for the value of <code>Type</code>, the / in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformation', 'ComparisonOperator', 'Size'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>',
  })
  .openapi('SizeConstraint')

const SizeConstraintsSchema = z.array(SizeConstraintSchema).openapi('SizeConstraints')

const SizeConstraintSetSchema = z
  .object({
    SizeConstraintSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a <code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code> (see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF (see <a>DeleteSizeConstraintSet</a>).</p> <p> <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name, if any, of the <code>SizeConstraintSet</code>.' }),
    ).exactOptional(),
    SizeConstraints: SizeConstraintsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the parts of web requests that you want to inspect the size of.',
        }),
    ),
  })
  .openapi({
    required: ['SizeConstraintSetId', 'SizeConstraints'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p>',
  })
  .openapi('SizeConstraintSet')

const CreateSizeConstraintSetResponseSchema = z
  .object({
    SizeConstraintSet: SizeConstraintSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <a>SizeConstraintSet</a> that contains no <code>SizeConstraint</code> objects.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateSizeConstraintSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      SizeConstraintSet: {
        Name: 'MySampleSizeConstraintSet',
        SizeConstraintSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        SizeConstraints: [
          {
            ComparisonOperator: 'GT',
            FieldToMatch: { Type: 'QUERY_STRING' },
            Size: 0,
            TextTransformation: 'NONE',
          },
        ],
      },
    },
    required: [],
  })
  .openapi('CreateSizeConstraintSetResponse')

const CreateSizeConstraintSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>SizeConstraintSet</a>. You can't change <code>Name</code> after you create a <code>SizeConstraintSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'ChangeToken'], title: 'CreateSizeConstraintSetRequest' })
  .openapi('CreateSizeConstraintSetRequest')

const SqlInjectionMatchTupleSchema = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies where in a web request to look for snippets of malicious SQL code.',
        }),
    ),
    TextTransformation: TextTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting it for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p> <b>CMD_LINE</b> </p> <p>When you\'re concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \\ " \' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\\f, formfeed, decimal 12</p> </li> <li> <p>\\t, tab, decimal 9</p> </li> <li> <p>\\n, newline, decimal 10</p> </li> <li> <p>\\r, carriage return, decimal 13</p> </li> <li> <p>\\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don\'t want to perform any text transformations.</p>',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformation'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>',
  })
  .openapi('SqlInjectionMatchTuple')

const SqlInjectionMatchTuplesSchema = z
  .array(SqlInjectionMatchTupleSchema)
  .openapi('SqlInjectionMatchTuples')

const SqlInjectionMatchSetSchema = z
  .object({
    SqlInjectionMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>SqlInjectionMatchSet</code>. You use <code>SqlInjectionMatchSetId</code> to get information about a <code>SqlInjectionMatchSet</code> (see <a>GetSqlInjectionMatchSet</a>), update a <code>SqlInjectionMatchSet</code> (see <a>UpdateSqlInjectionMatchSet</a>), insert a <code>SqlInjectionMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SqlInjectionMatchSet</code> from AWS WAF (see <a>DeleteSqlInjectionMatchSet</a>).</p> <p> <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name, if any, of the <code>SqlInjectionMatchSet</code>.' }),
    ).exactOptional(),
    SqlInjectionMatchTuples: SqlInjectionMatchTuplesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.',
        }),
    ),
  })
  .openapi({
    required: ['SqlInjectionMatchSetId', 'SqlInjectionMatchTuples'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>',
  })
  .openapi('SqlInjectionMatchSet')

const CreateSqlInjectionMatchSetResponseSchema = z
  .object({
    SqlInjectionMatchSet: SqlInjectionMatchSetSchema.and(
      z.any().openapi({ description: 'A <a>SqlInjectionMatchSet</a>.' }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateSqlInjectionMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      SqlInjectionMatchSet: {
        Name: 'MySQLInjectionMatchSet',
        SqlInjectionMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        SqlInjectionMatchTuples: [
          { FieldToMatch: { Type: 'QUERY_STRING' }, TextTransformation: 'URL_DECODE' },
        ],
      },
    },
    description: 'The response to a <code>CreateSqlInjectionMatchSet</code> request.',
    required: [],
  })
  .openapi('CreateSqlInjectionMatchSetResponse')

const CreateSqlInjectionMatchSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description for the <a>SqlInjectionMatchSet</a> that you're creating. You can't change <code>Name</code> after you create the <code>SqlInjectionMatchSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'ChangeToken'],
    title: 'CreateSqlInjectionMatchSetRequest',
    description: 'A request to create a <a>SqlInjectionMatchSet</a>.',
  })
  .openapi('CreateSqlInjectionMatchSetRequest')

const WafActionTypeSchema = z.enum(['BLOCK', 'ALLOW', 'COUNT']).openapi('WafActionType')

const WafActionSchema = z
  .object({
    Type: WafActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies how you want AWS WAF to respond to requests that match the settings in a <code>Rule</code>. Valid settings include the following:</p> <ul> <li> <p> <code>ALLOW</code>: AWS WAF allows requests</p> </li> <li> <p> <code>BLOCK</code>: AWS WAF blocks requests</p> </li> <li> <p> <code>COUNT</code>: AWS WAF increments a counter of the requests that match all of the conditions in the rule. AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify <code>COUNT</code> for the default action for a <code>WebACL</code>.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['Type'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn\'t match all of the conditions in any of the rules in a <code>WebACL</code>. </p>',
  })
  .openapi('WafAction')

const RulePrioritySchema = z.int().openapi('RulePriority')

const WafOverrideActionTypeSchema = z.enum(['NONE', 'COUNT']).openapi('WafOverrideActionType')

const WafOverrideActionSchema = z
  .object({
    Type: WafOverrideActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>COUNT</code> overrides the action specified by the individual rule within a <code>RuleGroup</code> . If set to <code>NONE</code>, the rule's action will take place.",
        }),
    ),
  })
  .openapi({
    required: ['Type'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>',
  })
  .openapi('WafOverrideAction')

const WafRuleTypeSchema = z.enum(['REGULAR', 'RATE_BASED', 'GROUP']).openapi('WafRuleType')

const ExcludedRuleSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the rule to exclude from the rule group.',
        }),
    ),
  })
  .openapi({
    required: ['RuleId'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p>',
  })
  .openapi('ExcludedRule')

const ExcludedRulesSchema = z.array(ExcludedRuleSchema).openapi('ExcludedRules')

const ActivatedRuleSchema = z
  .object({
    Priority: RulePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the order in which the <code>Rules</code> in a <code>WebACL</code> are evaluated. Rules with a lower value for <code>Priority</code> are evaluated before <code>Rules</code> with a higher value. The value must be a unique integer. If you add multiple <code>Rules</code> to a <code>WebACL</code>, the values don't need to be consecutive.",
        }),
    ),
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>RuleId</code> for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>), update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete a one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p> <p> <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>',
        }),
    ),
    Action: WafActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the <code>Rule</code>. Valid values for <code>Action</code> include the following:</p> <ul> <li> <p> <code>ALLOW</code>: CloudFront responds with the requested object.</p> </li> <li> <p> <code>BLOCK</code>: CloudFront responds with an HTTP 403 (Forbidden) status code.</p> </li> <li> <p> <code>COUNT</code>: AWS WAF increments a counter of requests that match the conditions in the rule and then continues to inspect the web request based on the remaining rules in the web ACL. </p> </li> </ul> <p> <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case, you do not use <code>ActivatedRule|Action</code>. For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>.</p>',
        }),
    ).exactOptional(),
    OverrideAction: WafOverrideActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use the <code>OverrideAction</code> to test your <code>RuleGroup</code>.</p> <p>Any rule in a <code>RuleGroup</code> can potentially block a request. If you set the <code>OverrideAction</code> to <code>None</code>, the <code>RuleGroup</code> will block a request if any individual rule in the <code>RuleGroup</code> matches the request and is configured to block that request. However if you first want to test the <code>RuleGroup</code>, set the <code>OverrideAction</code> to <code>Count</code>. The <code>RuleGroup</code> will then override any block action specified by individual rules contained within the group. Instead of blocking matching requests, those requests will be counted. You can view a record of counted requests using <a>GetSampledRequests</a>. </p> <p> <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case you do not use <code>ActivatedRule|Action</code>. For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>.</p>',
        }),
    ).exactOptional(),
    Type: WafRuleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rule type, either <code>REGULAR</code>, as defined by <a>Rule</a>, <code>RATE_BASED</code>, as defined by <a>RateBasedRule</a>, or <code>GROUP</code>, as defined by <a>RuleGroup</a>. The default is REGULAR. Although this field is optional, be aware that if you try to add a RATE_BASED rule to a web ACL without setting the type, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule with the specified ID, which does not exist. ',
        }),
    ).exactOptional(),
    ExcludedRules: ExcludedRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of rules to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>.</p> <p>Sometimes it is necessary to troubleshoot rule groups that are blocking traffic unexpectedly (false positives). One troubleshooting technique is to identify the specific rule within the rule group that is blocking the legitimate traffic and then disable (exclude) that particular rule. You can exclude rules from both your own rule groups and AWS Marketplace rule groups that have been associated with a web ACL.</p> <p>Specifying <code>ExcludedRules</code> does not remove those rules from the rule group. Rather, it changes the action for the rules to <code>COUNT</code>. Therefore, requests that match an <code>ExcludedRule</code> are counted but not blocked. The <code>RuleGroup</code> owner will receive COUNT metrics for each <code>ExcludedRule</code>.</p> <p>If you want to exclude rules from a rule group that is already associated with a web ACL, perform the following steps:</p> <ol> <li> <p>Use the AWS WAF logs to identify the IDs of the rules that you want to exclude. For more information about the logs, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a>.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request that has two actions:</p> <ul> <li> <p>The first action deletes the existing rule group from the web ACL. That is, in the <a>UpdateWebACL</a> request, the first <code>Updates:Action</code> should be <code>DELETE</code> and <code>Updates:ActivatedRule:RuleId</code> should be the rule group that contains the rules that you want to exclude.</p> </li> <li> <p>The second action inserts the same rule group back in, but specifying the rules to exclude. That is, the second <code>Updates:Action</code> should be <code>INSERT</code>, <code>Updates:ActivatedRule:RuleId</code> should be the rule group that you just removed, and <code>ExcludedRules</code> should contain the rules that you want to exclude.</p> </li> </ul> </li> </ol>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Priority', 'RuleId'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>',
  })
  .openapi('ActivatedRule')

const ActivatedRulesSchema = z.array(ActivatedRuleSchema).openapi('ActivatedRules')

const WebACLSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>WebACL</code>. You use <code>WebACLId</code> to get information about a <code>WebACL</code> (see <a>GetWebACL</a>), update a <code>WebACL</code> (see <a>UpdateWebACL</a>), and delete a <code>WebACL</code> from AWS WAF (see <a>DeleteWebACL</a>).</p> <p> <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <code>WebACL</code>. You can't change the name of a <code>WebACL</code> after you create it.",
        }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>WebACL</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change <code>MetricName</code> after you create the <code>WebACL</code>.',
        }),
    ).exactOptional(),
    DefaultAction: WafActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. The action is specified by the <a>WafAction</a> object.',
        }),
    ),
    Rules: ActivatedRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the action for each <code>Rule</code> in a <code>WebACL</code>, the priority of the <code>Rule</code>, and the ID of the <code>Rule</code>.',
        }),
    ),
    WebACLArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'Tha Amazon Resource Name (ARN) of the web ACL.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WebACLId', 'DefaultAction', 'Rules'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p>',
  })
  .openapi('WebACL')

const CreateWebACLResponseSchema = z
  .object({
    WebACL: WebACLSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a>WebACL</a> returned in the <code>CreateWebACL</code> response.',
        }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateWebACL</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      WebACL: {
        DefaultAction: { Type: 'ALLOW' },
        MetricName: 'CreateExample',
        Name: 'CreateExample',
        Rules: [{ Action: { Type: 'ALLOW' }, Priority: 1, RuleId: 'WAFRule-1-Example' }],
        WebACLId: 'example-46da-4444-5555-example',
      },
    },
    required: [],
  })
  .openapi('CreateWebACLResponse')

const CreateWebACLRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>WebACL</a>. You can't change <code>Name</code> after you create the <code>WebACL</code>.",
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>WebACL</code>.The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change <code>MetricName</code> after you create the <code>WebACL</code>.',
        }),
    ),
    DefaultAction: WafActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action that you want AWS WAF to take when a request doesn't match the criteria specified in any of the <code>Rule</code> objects that are associated with the <code>WebACL</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MetricName', 'DefaultAction', 'ChangeToken'],
    title: 'CreateWebACLRequest',
  })
  .openapi('CreateWebACLRequest')

const S3ObjectUrlSchema = z.string().min(1).openapi('S3ObjectUrl')

const CreateWebACLMigrationStackResponseSchema = z
  .object({
    S3ObjectUrl: S3ObjectUrlSchema.and(
      z.any().openapi({ description: 'The URL of the template created in Amazon S3. ' }),
    ),
  })
  .openapi({ required: ['S3ObjectUrl'] })
  .openapi('CreateWebACLMigrationStackResponse')

const S3BucketNameSchema = z
  .string()
  .regex(/^aws-waf-migration-[0-9A-Za-z\.\-_]*/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const IgnoreUnsupportedTypeSchema = z.boolean().openapi('IgnoreUnsupportedType')

const CreateWebACLMigrationStackRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The UUID of the WAF Classic web ACL that you want to migrate to WAF v2.',
        }),
    ),
    S3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket to store the CloudFormation template in. The S3 bucket must be configured as follows for the migration: </p> <ul> <li> <p>The bucket name must start with <code>aws-waf-migration-</code>. For example, <code>aws-waf-migration-my-web-acl</code>.</p> </li> <li> <p>The bucket must be in the Region where you are deploying the template. For example, for a web ACL in us-west-2, you must use an Amazon S3 bucket in us-west-2 and you must deploy the template stack to us-west-2. </p> </li> <li> <p>The bucket policies must permit the migration process to write data. For listings of the bucket policies, see the Examples section. </p> </li> </ul>',
        }),
    ),
    IgnoreUnsupportedType: IgnoreUnsupportedTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether to exclude entities that can't be migrated or to stop the migration. Set this to true to ignore unsupported entities in the web ACL during the migration. Otherwise, if AWS WAF encounters unsupported entities, it stops the process and throws an exception. ",
        }),
    ),
  })
  .openapi({
    required: ['WebACLId', 'S3BucketName', 'IgnoreUnsupportedType'],
    title: 'CreateWebACLMigrationStackRequest',
  })
  .openapi('CreateWebACLMigrationStackRequest')

const WAFInvalidOperationExceptionSchema = z.any().openapi('WAFInvalidOperationException')

const WAFEntityMigrationExceptionSchema = z.any().openapi('WAFEntityMigrationException')

const XssMatchTupleSchema = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies where in a web request to look for cross-site scripting attacks.',
        }),
    ),
    TextTransformation: TextTransformationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on <code>FieldToMatch</code> before inspecting it for a match.</p> <p>You can only specify a single type of TextTransformation.</p> <p> <b>CMD_LINE</b> </p> <p>When you\'re concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:</p> <ul> <li> <p>Delete the following characters: \\ " \' ^</p> </li> <li> <p>Delete spaces before the following characters: / (</p> </li> <li> <p>Replace the following characters with a space: , ;</p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> </p> <p>Use this option to replace the following characters with a space character (decimal 32):</p> <ul> <li> <p>\\f, formfeed, decimal 12</p> </li> <li> <p>\\t, tab, decimal 9</p> </li> <li> <p>\\n, newline, decimal 10</p> </li> <li> <p>\\r, carriage return, decimal 13</p> </li> <li> <p>\\v, vertical tab, decimal 11</p> </li> <li> <p>non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>HTML_ENTITY_DECODE</b> </p> <p>Use this option to replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs the following operations:</p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a "less than" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>LOWERCASE</b> </p> <p>Use this option to convert uppercase letters (A-Z) to lowercase (a-z).</p> <p> <b>URL_DECODE</b> </p> <p>Use this option to decode a URL-encoded value.</p> <p> <b>NONE</b> </p> <p>Specify <code>NONE</code> if you don\'t want to perform any text transformations.</p>',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformation'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>',
  })
  .openapi('XssMatchTuple')

const XssMatchTuplesSchema = z.array(XssMatchTupleSchema).openapi('XssMatchTuples')

const XssMatchSetSchema = z
  .object({
    XssMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about an <code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code> (see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF (see <a>DeleteXssMatchSet</a>).</p> <p> <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name, if any, of the <code>XssMatchSet</code>.' }),
    ).exactOptional(),
    XssMatchTuples: XssMatchTuplesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.',
        }),
    ),
  })
  .openapi({
    required: ['XssMatchSetId', 'XssMatchTuples'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>',
  })
  .openapi('XssMatchSet')

const CreateXssMatchSetResponseSchema = z
  .object({
    XssMatchSet: XssMatchSetSchema.and(
      z.any().openapi({ description: 'An <a>XssMatchSet</a>.' }),
    ).exactOptional(),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>CreateXssMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f',
      XssMatchSet: {
        Name: 'MySampleXssMatchSet',
        XssMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        XssMatchTuples: [
          { FieldToMatch: { Type: 'QUERY_STRING' }, TextTransformation: 'URL_DECODE' },
        ],
      },
    },
    description: 'The response to a <code>CreateXssMatchSet</code> request.',
    required: [],
  })
  .openapi('CreateXssMatchSetResponse')

const CreateXssMatchSetRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description for the <a>XssMatchSet</a> that you're creating. You can't change <code>Name</code> after you create the <code>XssMatchSet</code>.",
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'ChangeToken'],
    title: 'CreateXssMatchSetRequest',
    description: 'A request to create an <a>XssMatchSet</a>.',
  })
  .openapi('CreateXssMatchSetRequest')

const DeleteByteMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteByteMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('DeleteByteMatchSetResponse')

const DeleteByteMatchSetRequestSchema = z
  .object({
    ByteMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to delete. <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['ByteMatchSetId', 'ChangeToken'], title: 'DeleteByteMatchSetRequest' })
  .openapi('DeleteByteMatchSetRequest')

const WAFReferencedItemExceptionSchema = z.any().openapi('WAFReferencedItemException')

const WAFNonEmptyEntityExceptionSchema = z.any().openapi('WAFNonEmptyEntityException')

const DeleteGeoMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteGeoMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteGeoMatchSetResponse')

const DeleteGeoMatchSetRequestSchema = z
  .object({
    GeoMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>GeoMatchSetID</code> of the <a>GeoMatchSet</a> that you want to delete. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['GeoMatchSetId', 'ChangeToken'], title: 'DeleteGeoMatchSetRequest' })
  .openapi('DeleteGeoMatchSetRequest')

const DeleteIPSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteIPSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('DeleteIPSetResponse')

const DeleteIPSetRequestSchema = z
  .object({
    IPSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>IPSetId</code> of the <a>IPSet</a> that you want to delete. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by <a>ListIPSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['IPSetId', 'ChangeToken'], title: 'DeleteIPSetRequest' })
  .openapi('DeleteIPSetRequest')

const DeleteLoggingConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteLoggingConfigurationResponse')

const DeleteLoggingConfigurationRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the web ACL from which you want to delete the <a>LoggingConfiguration</a>.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeleteLoggingConfigurationRequest' })
  .openapi('DeleteLoggingConfigurationRequest')

const DeletePermissionPolicyResponseSchema = z.object({}).openapi('DeletePermissionPolicyResponse')

const DeletePermissionPolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the RuleGroup from which you want to delete the policy.</p> <p>The user making the request must be the owner of the RuleGroup.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeletePermissionPolicyRequest' })
  .openapi('DeletePermissionPolicyRequest')

const DeleteRateBasedRuleResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRateBasedRuleResponse')

const DeleteRateBasedRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <a>RateBasedRule</a> that you want to delete. <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by <a>ListRateBasedRules</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleId', 'ChangeToken'], title: 'DeleteRateBasedRuleRequest' })
  .openapi('DeleteRateBasedRuleRequest')

const DeleteRegexMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteRegexMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRegexMatchSetResponse')

const DeleteRegexMatchSetRequestSchema = z
  .object({
    RegexMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to delete. <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['RegexMatchSetId', 'ChangeToken'], title: 'DeleteRegexMatchSetRequest' })
  .openapi('DeleteRegexMatchSetRequest')

const DeleteRegexPatternSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteRegexPatternSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRegexPatternSetResponse')

const DeleteRegexPatternSetRequestSchema = z
  .object({
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to delete. <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['RegexPatternSetId', 'ChangeToken'],
    title: 'DeleteRegexPatternSetRequest',
  })
  .openapi('DeleteRegexPatternSetRequest')

const DeleteRuleResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('DeleteRuleResponse')

const DeleteRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <a>Rule</a> that you want to delete. <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleId', 'ChangeToken'], title: 'DeleteRuleRequest' })
  .openapi('DeleteRuleRequest')

const DeleteRuleGroupResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteRuleGroup</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRuleGroupResponse')

const DeleteRuleGroupRequestSchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to delete. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleGroupId', 'ChangeToken'], title: 'DeleteRuleGroupRequest' })
  .openapi('DeleteRuleGroupRequest')

const DeleteSizeConstraintSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteSizeConstraintSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('DeleteSizeConstraintSetResponse')

const DeleteSizeConstraintSetRequestSchema = z
  .object({
    SizeConstraintSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to delete. <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['SizeConstraintSetId', 'ChangeToken'],
    title: 'DeleteSizeConstraintSetRequest',
  })
  .openapi('DeleteSizeConstraintSetRequest')

const DeleteSqlInjectionMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteSqlInjectionMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' },
    description: 'The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.',
    required: [],
  })
  .openapi('DeleteSqlInjectionMatchSetResponse')

const DeleteSqlInjectionMatchSetRequestSchema = z
  .object({
    SqlInjectionMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SqlInjectionMatchSetId</code> of the <a>SqlInjectionMatchSet</a> that you want to delete. <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['SqlInjectionMatchSetId', 'ChangeToken'],
    title: 'DeleteSqlInjectionMatchSetRequest',
    description: 'A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.',
  })
  .openapi('DeleteSqlInjectionMatchSetRequest')

const DeleteWebACLResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteWebACL</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('DeleteWebACLResponse')

const DeleteWebACLRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>WebACLId</code> of the <a>WebACL</a> that you want to delete. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['WebACLId', 'ChangeToken'], title: 'DeleteWebACLRequest' })
  .openapi('DeleteWebACLRequest')

const DeleteXssMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>DeleteXssMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' },
    description: 'The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.',
    required: [],
  })
  .openapi('DeleteXssMatchSetResponse')

const DeleteXssMatchSetRequestSchema = z
  .object({
    XssMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>XssMatchSetId</code> of the <a>XssMatchSet</a> that you want to delete. <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['XssMatchSetId', 'ChangeToken'],
    title: 'DeleteXssMatchSetRequest',
    description: 'A request to delete an <a>XssMatchSet</a> from AWS WAF.',
  })
  .openapi('DeleteXssMatchSetRequest')

const DisassociateWebACLResponseSchema = z.object({}).openapi('DisassociateWebACLResponse')

const DisassociateWebACLRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN (Amazon Resource Name) of the resource from which the web ACL is being removed, either an application load balancer or Amazon API Gateway stage.</p> <p>The ARN should be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DisassociateWebACLRequest' })
  .openapi('DisassociateWebACLRequest')

const GetByteMatchSetResponseSchema = z
  .object({
    ByteMatchSet: ByteMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>ByteMatchSet</a> that you specified in the <code>GetByteMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>ByteMatchSet</a>: Contains <code>ByteMatchSetId</code>, <code>ByteMatchTuples</code>, and <code>Name</code> </p> </li> <li> <p> <code>ByteMatchTuples</code>: Contains an array of <a>ByteMatchTuple</a> objects. Each <code>ByteMatchTuple</code> object contains <a>FieldToMatch</a>, <code>PositionalConstraint</code>, <code>TargetString</code>, and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ByteMatchSet: {
        ByteMatchSetId: 'exampleIDs3t-46da-4fdb-b8d5-abc321j569j5',
        ByteMatchTuples: [
          {
            FieldToMatch: { Data: 'referer', Type: 'HEADER' },
            PositionalConstraint: 'CONTAINS',
            TargetString: 'badrefer1',
            TextTransformation: 'NONE',
          },
        ],
        Name: 'ByteMatchNameExample',
      },
    },
    required: [],
  })
  .openapi('GetByteMatchSetResponse')

const GetByteMatchSetRequestSchema = z
  .object({
    ByteMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to get. <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['ByteMatchSetId'], title: 'GetByteMatchSetRequest' })
  .openapi('GetByteMatchSetRequest')

const GetChangeTokenResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used in the request. Use this value in a <code>GetChangeTokenStatus</code> request to get the current status of the request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('GetChangeTokenResponse')

const GetChangeTokenRequestSchema = z
  .object({})
  .openapi({ title: 'GetChangeTokenRequest' })
  .openapi('GetChangeTokenRequest')

const ChangeTokenStatusSchema = z
  .enum(['PROVISIONED', 'PENDING', 'INSYNC'])
  .openapi('ChangeTokenStatus')

const GetChangeTokenStatusResponseSchema = z
  .object({
    ChangeTokenStatus: ChangeTokenStatusSchema.and(
      z.any().openapi({ description: 'The status of the change token.' }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeTokenStatus: 'PENDING' }, required: [] })
  .openapi('GetChangeTokenStatusResponse')

const GetChangeTokenStatusRequestSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The change token for which you want to get the status. This change token was previously returned in the <code>GetChangeToken</code> response.',
        }),
    ),
  })
  .openapi({ required: ['ChangeToken'], title: 'GetChangeTokenStatusRequest' })
  .openapi('GetChangeTokenStatusRequest')

const GetGeoMatchSetResponseSchema = z
  .object({
    GeoMatchSet: GeoMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <a>GeoMatchSet</a> that you specified in the <code>GetGeoMatchSet</code> request. This includes the <code>Type</code>, which for a <code>GeoMatchContraint</code> is always <code>Country</code>, as well as the <code>Value</code>, which is the identifier for a specific country.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGeoMatchSetResponse')

const GetGeoMatchSetRequestSchema = z
  .object({
    GeoMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>GeoMatchSetId</code> of the <a>GeoMatchSet</a> that you want to get. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['GeoMatchSetId'], title: 'GetGeoMatchSetRequest' })
  .openapi('GetGeoMatchSetRequest')

const GetIPSetResponseSchema = z
  .object({
    IPSet: IPSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>IPSet</a> that you specified in the <code>GetIPSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>IPSet</a>: Contains <code>IPSetDescriptors</code>, <code>IPSetId</code>, and <code>Name</code> </p> </li> <li> <p> <code>IPSetDescriptors</code>: Contains an array of <a>IPSetDescriptor</a> objects. Each <code>IPSetDescriptor</code> object contains <code>Type</code> and <code>Value</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      IPSet: {
        IPSetDescriptors: [{ Type: 'IPV4', Value: '192.0.2.44/32' }],
        IPSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        Name: 'MyIPSetFriendlyName',
      },
    },
    required: [],
  })
  .openapi('GetIPSetResponse')

const GetIPSetRequestSchema = z
  .object({
    IPSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>IPSetId</code> of the <a>IPSet</a> that you want to get. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by <a>ListIPSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['IPSetId'], title: 'GetIPSetRequest' })
  .openapi('GetIPSetRequest')

const LogDestinationConfigsSchema = z
  .array(ResourceArnSchema)
  .length(1)
  .openapi('LogDestinationConfigs')

const RedactedFieldsSchema = z.array(FieldToMatchSchema).openapi('RedactedFields')

const LoggingConfigurationSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the web ACL that you want to associate with <code>LogDestinationConfigs</code>.',
        }),
    ),
    LogDestinationConfigs: LogDestinationConfigsSchema.and(
      z.any().openapi({ description: 'An array of Amazon Kinesis Data Firehose ARNs.' }),
    ),
    RedactedFields: RedactedFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parts of the request that you want redacted from the logs. For example, if you redact the cookie field, the cookie field in the firehose will be <code>xxx</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceArn', 'LogDestinationConfigs'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>',
  })
  .openapi('LoggingConfiguration')

const GetLoggingConfigurationResponseSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The <a>LoggingConfiguration</a> for the specified web ACL.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLoggingConfigurationResponse')

const GetLoggingConfigurationRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the web ACL for which you want to get the <a>LoggingConfiguration</a>.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetLoggingConfigurationRequest' })
  .openapi('GetLoggingConfigurationRequest')

const PolicyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(395000)
  .openapi('PolicyString')

const GetPermissionPolicyResponseSchema = z
  .object({
    Policy: PolicyStringSchema.and(
      z.any().openapi({ description: 'The IAM policy attached to the specified RuleGroup.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPermissionPolicyResponse')

const GetPermissionPolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the RuleGroup for which you want to get the policy.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetPermissionPolicyRequest' })
  .openapi('GetPermissionPolicyRequest')

const GetRateBasedRuleResponseSchema = z
  .object({
    Rule: RateBasedRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <a>RateBasedRule</a> that you specified in the <code>GetRateBasedRule</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRateBasedRuleResponse')

const GetRateBasedRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <a>RateBasedRule</a> that you want to get. <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by <a>ListRateBasedRules</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleId'], title: 'GetRateBasedRuleRequest' })
  .openapi('GetRateBasedRuleRequest')

const ManagedKeySchema = z.string().openapi('ManagedKey')

const ManagedKeysSchema = z.array(ManagedKeySchema).openapi('ManagedKeys')

const NextMarkerSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1224)
  .openapi('NextMarker')

const GetRateBasedRuleManagedKeysResponseSchema = z
  .object({
    ManagedKeys: ManagedKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IP addresses that currently are blocked by the specified <a>RateBasedRule</a>. ',
        }),
    ).exactOptional(),
    NextMarker: NextMarkerSchema.and(
      z.any().openapi({ description: 'A null value and not currently used.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRateBasedRuleManagedKeysResponse')

const GetRateBasedRuleManagedKeysRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <a>RateBasedRule</a> for which you want to get a list of <code>ManagedKeys</code>. <code>RuleId</code> is returned by <a>CreateRateBasedRule</a> and by <a>ListRateBasedRules</a>.',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description: 'A null value and not currently used. Do not include this in your request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RuleId'], title: 'GetRateBasedRuleManagedKeysRequest' })
  .openapi('GetRateBasedRuleManagedKeysRequest')

const GetRegexMatchSetResponseSchema = z
  .object({
    RegexMatchSet: RegexMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <a>RegexMatchSet</a> that you specified in the <code>GetRegexMatchSet</code> request. For more information, see <a>RegexMatchTuple</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegexMatchSetResponse')

const GetRegexMatchSetRequestSchema = z
  .object({
    RegexMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to get. <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['RegexMatchSetId'], title: 'GetRegexMatchSetRequest' })
  .openapi('GetRegexMatchSetRequest')

const GetRegexPatternSetResponseSchema = z
  .object({
    RegexPatternSet: RegexPatternSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <a>RegexPatternSet</a> that you specified in the <code>GetRegexPatternSet</code> request, including the identifier of the pattern set and the regular expression patterns you want AWS WAF to search for. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegexPatternSetResponse')

const GetRegexPatternSetRequestSchema = z
  .object({
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to get. <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['RegexPatternSetId'], title: 'GetRegexPatternSetRequest' })
  .openapi('GetRegexPatternSetRequest')

const GetRuleResponseSchema = z
  .object({
    Rule: RuleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>Rule</a> that you specified in the <code>GetRule</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>Rule</a>: Contains <code>MetricName</code>, <code>Name</code>, an array of <code>Predicate</code> objects, and <code>RuleId</code> </p> </li> <li> <p> <a>Predicate</a>: Each <code>Predicate</code> object contains <code>DataId</code>, <code>Negated</code>, and <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rule: {
        MetricName: 'WAFByteHeaderRule',
        Name: 'WAFByteHeaderRule',
        Predicates: [{ DataId: 'MyByteMatchSetID', Negated: false, Type: 'ByteMatch' }],
        RuleId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
      },
    },
    required: [],
  })
  .openapi('GetRuleResponse')

const GetRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <a>Rule</a> that you want to get. <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleId'], title: 'GetRuleRequest' })
  .openapi('GetRuleRequest')

const GetRuleGroupResponseSchema = z
  .object({
    RuleGroup: RuleGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <a>RuleGroup</a> that you specified in the <code>GetRuleGroup</code> request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRuleGroupResponse')

const GetRuleGroupRequestSchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to get. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleGroupId'], title: 'GetRuleGroupRequest' })
  .openapi('GetRuleGroupRequest')

const IPStringSchema = z.string().openapi('IPString')

const CountrySchema = z.string().openapi('Country')

const URIStringSchema = z.string().openapi('URIString')

const HTTPMethodSchema = z.string().openapi('HTTPMethod')

const HTTPVersionSchema = z.string().openapi('HTTPVersion')

const HeaderNameSchema = z.string().openapi('HeaderName')

const HeaderValueSchema = z.string().openapi('HeaderValue')

const HTTPHeaderSchema = z
  .object({
    Name: HeaderNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of one of the headers in the sampled web request.' }),
    ).exactOptional(),
    Value: HeaderValueSchema.and(
      z
        .any()
        .openapi({ description: 'The value of one of the headers in the sampled web request.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p>',
    required: [],
  })
  .openapi('HTTPHeader')

const HTTPHeadersSchema = z.array(HTTPHeaderSchema).openapi('HTTPHeaders')

const HTTPRequestSchema = z
  .object({
    ClientIP: IPStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP address that the request originated from. If the <code>WebACL</code> is associated with a CloudFront distribution, this is the value of one of the following fields in CloudFront access logs:</p> <ul> <li> <p> <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send the request</p> </li> <li> <p> <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer to send the request</p> </li> </ul>',
        }),
    ).exactOptional(),
    Country: CountrySchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-letter country code for the country that the request originated from. For a current list of country codes, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a>.',
        }),
    ).exactOptional(),
    URI: URIStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The part of a web request that identifies the resource, for example, <code>/images/daily-ad.jpg</code>.',
        }),
    ).exactOptional(),
    Method: HTTPMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP method specified in the sampled web request. CloudFront supports the following methods: <code>DELETE</code>, <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>PATCH</code>, <code>POST</code>, and <code>PUT</code>. ',
        }),
    ).exactOptional(),
    HTTPVersion: HTTPVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP version specified in the sampled web request, for example, <code>HTTP/1.1</code>.',
        }),
    ).exactOptional(),
    Headers: HTTPHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains two values for each header in the sampled web request: the name of the header and the value of the header.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>',
    required: [],
  })
  .openapi('HTTPRequest')

const SampleWeightSchema = z.int().min(0).openapi('SampleWeight')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ActionSchema = z.string().openapi('Action')

const SampledHTTPRequestSchema = z
  .object({
    Request: HTTPRequestSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains detailed information about the request.',
        }),
    ),
    Weight: SampleWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates how one result in the response relates proportionally to other results in the response. A result that has a weight of <code>2</code> represents roughly twice as many CloudFront web requests as a result that has a weight of <code>1</code>.',
        }),
    ),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action for the <code>Rule</code> that the request matched: <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.',
        }),
    ).exactOptional(),
    RuleWithinRuleGroup: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'This value is returned if the <code>GetSampledRequests</code> request specifies the ID of a <code>RuleGroup</code> rather than the ID of an individual rule. <code>RuleWithinRuleGroup</code> is the rule within the specified <code>RuleGroup</code> that matched the request listed in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Request', 'Weight'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>',
  })
  .openapi('SampledHTTPRequest')

const SampledHTTPRequestsSchema = z.array(SampledHTTPRequestSchema).openapi('SampledHTTPRequests')

const PopulationSizeSchema = z.int().openapi('PopulationSize')

const TimeWindowSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. You must specify the date and time in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.',
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. You must specify the date and time in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.',
        }),
    ),
  })
  .openapi({
    required: ['StartTime', 'EndTime'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>',
  })
  .openapi('TimeWindow')

const GetSampledRequestsResponseSchema = z
  .object({
    SampledRequests: SampledHTTPRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains detailed information about each of the requests in the sample.',
        }),
    ).exactOptional(),
    PopulationSize: PopulationSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of requests from which <code>GetSampledRequests</code> got a sample of <code>MaxItems</code> requests. If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your AWS resource received during the specified time range.',
        }),
    ).exactOptional(),
    TimeWindow: TimeWindowSchema.and(
      z
        .any()
        .openapi({
          description:
            'Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request. However, if your AWS resource received more than 5,000 requests during the time range that you specified in the request, <code>GetSampledRequests</code> returns the time range for the first 5,000 requests. Times are in Coordinated Universal Time (UTC) format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      PopulationSize: 50,
      SampledRequests: [
        {
          Action: 'BLOCK',
          Request: {
            ClientIP: '192.0.2.44',
            Country: 'US',
            HTTPVersion: 'HTTP/1.1',
            Headers: [{ Name: 'User-Agent', Value: 'BadBot ' }],
            Method: 'HEAD',
          },
          Timestamp: '2016-09-27T14:55Z',
          Weight: 1,
        },
      ],
      TimeWindow: { EndTime: '2016-09-27T15:50Z', StartTime: '2016-09-27T14:50Z' },
    },
    required: [],
  })
  .openapi('GetSampledRequestsResponse')

const GetSampledRequestsMaxItemsSchema = z
  .int()
  .min(1)
  .max(500)
  .openapi('GetSampledRequestsMaxItems')

const GetSampledRequestsRequestSchema = z
  .object({
    WebAclId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>WebACLId</code> of the <code>WebACL</code> for which you want <code>GetSampledRequests</code> to return a sample of requests.',
        }),
    ),
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <code>RuleId</code> is one of three values:</p> <ul> <li> <p>The <code>RuleId</code> of the <code>Rule</code> or the <code>RuleGroupId</code> of the <code>RuleGroup</code> for which you want <code>GetSampledRequests</code> to return a sample of requests.</p> </li> <li> <p> <code>Default_Action</code>, which causes <code>GetSampledRequests</code> to return a sample of the requests that didn't match any of the rules in the specified <code>WebACL</code>.</p> </li> </ul>",
        }),
    ),
    TimeWindow: TimeWindowSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date and time and the end date and time of the range for which you want <code>GetSampledRequests</code> to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.',
        }),
    ),
    MaxItems: GetSampledRequestsMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received during the time range. If your resource received fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code> returns information about all of them. ',
        }),
    ),
  })
  .openapi({
    required: ['WebAclId', 'RuleId', 'TimeWindow', 'MaxItems'],
    title: 'GetSampledRequestsRequest',
  })
  .openapi('GetSampledRequestsRequest')

const GetSizeConstraintSetResponseSchema = z
  .object({
    SizeConstraintSet: SizeConstraintSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>SizeConstraintSet</a> that you specified in the <code>GetSizeConstraintSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>SizeConstraintSet</a>: Contains <code>SizeConstraintSetId</code>, <code>SizeConstraints</code>, and <code>Name</code> </p> </li> <li> <p> <code>SizeConstraints</code>: Contains an array of <a>SizeConstraint</a> objects. Each <code>SizeConstraint</code> object contains <a>FieldToMatch</a>, <code>TextTransformation</code>, <code>ComparisonOperator</code>, and <code>Size</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SizeConstraintSet: {
        Name: 'MySampleSizeConstraintSet',
        SizeConstraintSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        SizeConstraints: [
          {
            ComparisonOperator: 'GT',
            FieldToMatch: { Type: 'QUERY_STRING' },
            Size: 0,
            TextTransformation: 'NONE',
          },
        ],
      },
    },
    required: [],
  })
  .openapi('GetSizeConstraintSetResponse')

const GetSizeConstraintSetRequestSchema = z
  .object({
    SizeConstraintSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to get. <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.',
        }),
    ),
  })
  .openapi({ required: ['SizeConstraintSetId'], title: 'GetSizeConstraintSetRequest' })
  .openapi('GetSizeConstraintSetRequest')

const GetSqlInjectionMatchSetResponseSchema = z
  .object({
    SqlInjectionMatchSet: SqlInjectionMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>SqlInjectionMatchSet</a> that you specified in the <code>GetSqlInjectionMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>SqlInjectionMatchSet</a>: Contains <code>Name</code>, <code>SqlInjectionMatchSetId</code>, and an array of <code>SqlInjectionMatchTuple</code> objects</p> </li> <li> <p> <a>SqlInjectionMatchTuple</a>: Each <code>SqlInjectionMatchTuple</code> object contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SqlInjectionMatchSet: {
        Name: 'MySQLInjectionMatchSet',
        SqlInjectionMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        SqlInjectionMatchTuples: [
          { FieldToMatch: { Type: 'QUERY_STRING' }, TextTransformation: 'URL_DECODE' },
        ],
      },
    },
    description: 'The response to a <a>GetSqlInjectionMatchSet</a> request.',
    required: [],
  })
  .openapi('GetSqlInjectionMatchSetResponse')

const GetSqlInjectionMatchSetRequestSchema = z
  .object({
    SqlInjectionMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SqlInjectionMatchSetId</code> of the <a>SqlInjectionMatchSet</a> that you want to get. <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.',
        }),
    ),
  })
  .openapi({
    required: ['SqlInjectionMatchSetId'],
    title: 'GetSqlInjectionMatchSetRequest',
    description: 'A request to get a <a>SqlInjectionMatchSet</a>.',
  })
  .openapi('GetSqlInjectionMatchSetRequest')

const GetWebACLResponseSchema = z
  .object({
    WebACL: WebACLSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>WebACL</a> that you specified in the <code>GetWebACL</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>WebACL</a>: Contains <code>DefaultAction</code>, <code>MetricName</code>, <code>Name</code>, an array of <code>Rule</code> objects, and <code>WebACLId</code> </p> </li> <li> <p> <code>DefaultAction</code> (Data type is <a>WafAction</a>): Contains <code>Type</code> </p> </li> <li> <p> <code>Rules</code>: Contains an array of <code>ActivatedRule</code> objects, which contain <code>Action</code>, <code>Priority</code>, and <code>RuleId</code> </p> </li> <li> <p> <code>Action</code>: Contains <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      WebACL: {
        DefaultAction: { Type: 'ALLOW' },
        MetricName: 'CreateExample',
        Name: 'CreateExample',
        Rules: [{ Action: { Type: 'ALLOW' }, Priority: 1, RuleId: 'WAFRule-1-Example' }],
        WebACLId: 'createwebacl-1472061481310',
      },
    },
    required: [],
  })
  .openapi('GetWebACLResponse')

const GetWebACLRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>WebACLId</code> of the <a>WebACL</a> that you want to get. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.',
        }),
    ),
  })
  .openapi({ required: ['WebACLId'], title: 'GetWebACLRequest' })
  .openapi('GetWebACLRequest')

const WebACLSummarySchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>WebACL</code>. You use <code>WebACLId</code> to get information about a <code>WebACL</code> (see <a>GetWebACL</a>), update a <code>WebACL</code> (see <a>UpdateWebACL</a>), and delete a <code>WebACL</code> from AWS WAF (see <a>DeleteWebACL</a>).</p> <p> <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>WebACL</a>. You can't change the name of a <code>WebACL</code> after you create it.",
        }),
    ),
  })
  .openapi({
    required: ['WebACLId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p>',
  })
  .openapi('WebACLSummary')

const GetWebACLForResourceResponseSchema = z
  .object({
    WebACLSummary: WebACLSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the web ACL that you specified in the <code>GetWebACLForResource</code> request. If there is no associated resource, a null WebACLSummary is returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWebACLForResourceResponse')

const GetWebACLForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN (Amazon Resource Name) of the resource for which to get the web ACL, either an application load balancer or Amazon API Gateway stage.</p> <p>The ARN should be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway stage: <code>arn:aws:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetWebACLForResourceRequest' })
  .openapi('GetWebACLForResourceRequest')

const GetXssMatchSetResponseSchema = z
  .object({
    XssMatchSet: XssMatchSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the <a>XssMatchSet</a> that you specified in the <code>GetXssMatchSet</code> request. For more information, see the following topics:</p> <ul> <li> <p> <a>XssMatchSet</a>: Contains <code>Name</code>, <code>XssMatchSetId</code>, and an array of <code>XssMatchTuple</code> objects</p> </li> <li> <p> <a>XssMatchTuple</a>: Each <code>XssMatchTuple</code> object contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      XssMatchSet: {
        Name: 'MySampleXssMatchSet',
        XssMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        XssMatchTuples: [
          { FieldToMatch: { Type: 'QUERY_STRING' }, TextTransformation: 'URL_DECODE' },
        ],
      },
    },
    description: 'The response to a <a>GetXssMatchSet</a> request.',
    required: [],
  })
  .openapi('GetXssMatchSetResponse')

const GetXssMatchSetRequestSchema = z
  .object({
    XssMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>XssMatchSetId</code> of the <a>XssMatchSet</a> that you want to get. <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.',
        }),
    ),
  })
  .openapi({
    required: ['XssMatchSetId'],
    title: 'GetXssMatchSetRequest',
    description: 'A request to get an <a>XssMatchSet</a>.',
  })
  .openapi('GetXssMatchSetRequest')

const ListActivatedRulesInRuleGroupResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>ActivatedRules</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>ActivatedRules</code>, submit another <code>ListActivatedRulesInRuleGroup</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    ActivatedRules: ActivatedRulesSchema.and(
      z.any().openapi({ description: 'An array of <code>ActivatedRules</code> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListActivatedRulesInRuleGroupResponse')

const PaginationLimitSchema = z.int().min(0).max(100).openapi('PaginationLimit')

const ListActivatedRulesInRuleGroupRequestSchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleGroupId</code> of the <a>RuleGroup</a> for which you want to get a list of <a>ActivatedRule</a> objects.',
        }),
    ).exactOptional(),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>ActivatedRules</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ActivatedRules</code>. For the second and subsequent <code>ListActivatedRulesInRuleGroup</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>ActivatedRules</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>ActivatedRules</code> that you want AWS WAF to return for this request. If you have more <code>ActivatedRules</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>ActivatedRules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListActivatedRulesInRuleGroupRequest', required: [] })
  .openapi('ListActivatedRulesInRuleGroupRequest')

const ByteMatchSetSummarySchema = z
  .object({
    ByteMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>ByteMatchSetId</code> for a <code>ByteMatchSet</code>. You use <code>ByteMatchSetId</code> to get information about a <code>ByteMatchSet</code>, update a <code>ByteMatchSet</code>, remove a <code>ByteMatchSet</code> from a <code>Rule</code>, and delete a <code>ByteMatchSet</code> from AWS WAF.</p> <p> <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>ByteMatchSet</a>. You can't change <code>Name</code> after you create a <code>ByteMatchSet</code>.",
        }),
    ),
  })
  .openapi({
    required: ['ByteMatchSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p>',
  })
  .openapi('ByteMatchSetSummary')

const ByteMatchSetSummariesSchema = z
  .array(ByteMatchSetSummarySchema)
  .openapi('ByteMatchSetSummaries')

const ListByteMatchSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>ByteMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>ByteMatchSet</code> objects, submit another <code>ListByteMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    ByteMatchSets: ByteMatchSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>ByteMatchSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListByteMatchSetsResponse')

const ListByteMatchSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>ByteMatchSets</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ByteMatchSets</code>. For the second and subsequent <code>ListByteMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>ByteMatchSets</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>ByteMatchSet</code> objects that you want AWS WAF to return for this request. If you have more <code>ByteMatchSets</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>ByteMatchSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListByteMatchSetsRequest', required: [] })
  .openapi('ListByteMatchSetsRequest')

const GeoMatchSetSummarySchema = z
  .object({
    GeoMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>GeoMatchSetId</code> for an <a>GeoMatchSet</a>. You can use <code>GeoMatchSetId</code> in a <a>GetGeoMatchSet</a> request to get detailed information about an <a>GeoMatchSet</a>.',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>GeoMatchSet</a>. You can't change the name of an <code>GeoMatchSet</code> after you create it.",
        }),
    ),
  })
  .openapi({
    required: ['GeoMatchSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p>',
  })
  .openapi('GeoMatchSetSummary')

const GeoMatchSetSummariesSchema = z.array(GeoMatchSetSummarySchema).openapi('GeoMatchSetSummaries')

const ListGeoMatchSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>GeoMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>GeoMatchSet</code> objects, submit another <code>ListGeoMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    GeoMatchSets: GeoMatchSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>GeoMatchSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGeoMatchSetsResponse')

const ListGeoMatchSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>GeoMatchSet</code>s than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>GeoMatchSet</code> objects. For the second and subsequent <code>ListGeoMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>GeoMatchSet</code> objects.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>GeoMatchSet</code> objects that you want AWS WAF to return for this request. If you have more <code>GeoMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>GeoMatchSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGeoMatchSetsRequest', required: [] })
  .openapi('ListGeoMatchSetsRequest')

const IPSetSummarySchema = z
  .object({
    IPSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>IPSetId</code> for an <a>IPSet</a>. You can use <code>IPSetId</code> in a <a>GetIPSet</a> request to get detailed information about an <a>IPSet</a>.',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>IPSet</a>. You can't change the name of an <code>IPSet</code> after you create it.",
        }),
    ),
  })
  .openapi({
    required: ['IPSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p>',
  })
  .openapi('IPSetSummary')

const IPSetSummariesSchema = z.array(IPSetSummarySchema).openapi('IPSetSummaries')

const ListIPSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'To list more <code>IPSet</code> objects, submit another <code>ListIPSets</code> request, and in the next request use the <code>NextMarker</code> response value as the <code>NextMarker</code> value.',
        }),
    ).exactOptional(),
    IPSets: IPSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>IPSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      IPSets: [{ IPSetId: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f', Name: 'MyIPSetFriendlyName' }],
    },
    required: [],
  })
  .openapi('ListIPSetsResponse')

const ListIPSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>IPSets</code>. For the second and subsequent <code>ListIPSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>IPSets</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>IPSet</code> objects that you want AWS WAF to return for this request. If you have more <code>IPSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>IPSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListIPSetsRequest', required: [] })
  .openapi('ListIPSetsRequest')

const LoggingConfigurationsSchema = z
  .array(LoggingConfigurationSchema)
  .openapi('LoggingConfigurations')

const ListLoggingConfigurationsResponseSchema = z
  .object({
    LoggingConfigurations: LoggingConfigurationsSchema.and(
      z.any().openapi({ description: 'An array of <a>LoggingConfiguration</a> objects.' }),
    ).exactOptional(),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>LoggingConfigurations</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>LoggingConfigurations</code>, submit another <code>ListLoggingConfigurations</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLoggingConfigurationsResponse')

const ListLoggingConfigurationsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>LoggingConfigurations</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>LoggingConfigurations</code>. For the second and subsequent <code>ListLoggingConfigurations</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>ListLoggingConfigurations</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>LoggingConfigurations</code> that you want AWS WAF to return for this request. If you have more <code>LoggingConfigurations</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>LoggingConfigurations</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLoggingConfigurationsRequest', required: [] })
  .openapi('ListLoggingConfigurationsRequest')

const RuleSummarySchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>Rule</code>. You use <code>RuleId</code> to get more information about a <code>Rule</code> (see <a>GetRule</a>), update a <code>Rule</code> (see <a>UpdateRule</a>), insert a <code>Rule</code> into a <code>WebACL</code> or delete one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>Rule</code> from AWS WAF (see <a>DeleteRule</a>).</p> <p> <code>RuleId</code> is returned by <a>CreateRule</a> and by <a>ListRules</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>Rule</a>. You can't change the name of a <code>Rule</code> after you create it.",
        }),
    ),
  })
  .openapi({
    required: ['RuleId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p>',
  })
  .openapi('RuleSummary')

const RuleSummariesSchema = z.array(RuleSummarySchema).openapi('RuleSummaries')

const ListRateBasedRulesResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>Rules</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>Rules</code>, submit another <code>ListRateBasedRules</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    Rules: RuleSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RuleSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRateBasedRulesResponse')

const ListRateBasedRulesRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>Rules</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>Rules</code>. For the second and subsequent <code>ListRateBasedRules</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>Rules</code> that you want AWS WAF to return for this request. If you have more <code>Rules</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRateBasedRulesRequest', required: [] })
  .openapi('ListRateBasedRulesRequest')

const RegexMatchSetSummarySchema = z
  .object({
    RegexMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>RegexMatchSetId</code> for a <code>RegexMatchSet</code>. You use <code>RegexMatchSetId</code> to get information about a <code>RegexMatchSet</code>, update a <code>RegexMatchSet</code>, remove a <code>RegexMatchSet</code> from a <code>Rule</code>, and delete a <code>RegexMatchSet</code> from AWS WAF.</p> <p> <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexMatchSet</a>. You can't change <code>Name</code> after you create a <code>RegexMatchSet</code>.",
        }),
    ),
  })
  .openapi({
    required: ['RegexMatchSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p>',
  })
  .openapi('RegexMatchSetSummary')

const RegexMatchSetSummariesSchema = z
  .array(RegexMatchSetSummarySchema)
  .openapi('RegexMatchSetSummaries')

const ListRegexMatchSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>RegexMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>RegexMatchSet</code> objects, submit another <code>ListRegexMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    RegexMatchSets: RegexMatchSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RegexMatchSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRegexMatchSetsResponse')

const ListRegexMatchSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>RegexMatchSet</code> objects than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>ByteMatchSets</code>. For the second and subsequent <code>ListRegexMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>RegexMatchSet</code> objects.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>RegexMatchSet</code> objects that you want AWS WAF to return for this request. If you have more <code>RegexMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>RegexMatchSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRegexMatchSetsRequest', required: [] })
  .openapi('ListRegexMatchSetsRequest')

const RegexPatternSetSummarySchema = z
  .object({
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>RegexPatternSetId</code> for a <code>RegexPatternSet</code>. You use <code>RegexPatternSetId</code> to get information about a <code>RegexPatternSet</code>, update a <code>RegexPatternSet</code>, remove a <code>RegexPatternSet</code> from a <code>RegexMatchSet</code>, and delete a <code>RegexPatternSet</code> from AWS WAF.</p> <p> <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RegexPatternSet</a>. You can't change <code>Name</code> after you create a <code>RegexPatternSet</code>.",
        }),
    ),
  })
  .openapi({
    required: ['RegexPatternSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p>',
  })
  .openapi('RegexPatternSetSummary')

const RegexPatternSetSummariesSchema = z
  .array(RegexPatternSetSummarySchema)
  .openapi('RegexPatternSetSummaries')

const ListRegexPatternSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>RegexPatternSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>RegexPatternSet</code> objects, submit another <code>ListRegexPatternSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    RegexPatternSets: RegexPatternSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RegexPatternSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRegexPatternSetsResponse')

const ListRegexPatternSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>RegexPatternSet</code> objects than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>RegexPatternSet</code> objects. For the second and subsequent <code>ListRegexPatternSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>RegexPatternSet</code> objects.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>RegexPatternSet</code> objects that you want AWS WAF to return for this request. If you have more <code>RegexPatternSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>RegexPatternSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRegexPatternSetsRequest', required: [] })
  .openapi('ListRegexPatternSetsRequest')

const ResourceArnsSchema = z.array(ResourceArnSchema).openapi('ResourceArns')

const ListResourcesForWebACLResponseSchema = z
  .object({
    ResourceArns: ResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of ARNs (Amazon Resource Names) of the resources associated with the specified web ACL. An array with zero elements is returned if there are no resources associated with the web ACL.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesForWebACLResponse')

const ResourceTypeSchema = z
  .enum(['APPLICATION_LOAD_BALANCER', 'API_GATEWAY'])
  .openapi('ResourceType')

const ListResourcesForWebACLRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) of the web ACL for which to list the associated resources.',
        }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of resource to list, either an application load balancer or Amazon API Gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WebACLId'], title: 'ListResourcesForWebACLRequest' })
  .openapi('ListResourcesForWebACLRequest')

const RuleGroupSummarySchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>RuleGroup</code>. You use <code>RuleGroupId</code> to get more information about a <code>RuleGroup</code> (see <a>GetRuleGroup</a>), update a <code>RuleGroup</code> (see <a>UpdateRuleGroup</a>), insert a <code>RuleGroup</code> into a <code>WebACL</code> or delete one from a <code>WebACL</code> (see <a>UpdateWebACL</a>), or delete a <code>RuleGroup</code> from AWS WAF (see <a>DeleteRuleGroup</a>).</p> <p> <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <a>RuleGroup</a>. You can't change the name of a <code>RuleGroup</code> after you create it.",
        }),
    ),
  })
  .openapi({
    required: ['RuleGroupId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p>',
  })
  .openapi('RuleGroupSummary')

const RuleGroupSummariesSchema = z.array(RuleGroupSummarySchema).openapi('RuleGroupSummaries')

const ListRuleGroupsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>RuleGroups</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>RuleGroups</code>, submit another <code>ListRuleGroups</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    RuleGroups: RuleGroupSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RuleGroup</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRuleGroupsResponse')

const ListRuleGroupsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>RuleGroups</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>RuleGroups</code>. For the second and subsequent <code>ListRuleGroups</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>RuleGroups</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>RuleGroups</code> that you want AWS WAF to return for this request. If you have more <code>RuleGroups</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>RuleGroups</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRuleGroupsRequest', required: [] })
  .openapi('ListRuleGroupsRequest')

const ListRulesResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>Rules</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>Rules</code>, submit another <code>ListRules</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    Rules: RuleSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RuleSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Rules: [{ Name: 'WAFByteHeaderRule', RuleId: 'WAFRule-1-Example' }] },
    required: [],
  })
  .openapi('ListRulesResponse')

const ListRulesRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>Rules</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>Rules</code>. For the second and subsequent <code>ListRules</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>Rules</code> that you want AWS WAF to return for this request. If you have more <code>Rules</code> than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRulesRequest', required: [] })
  .openapi('ListRulesRequest')

const SizeConstraintSetSummarySchema = z
  .object({
    SizeConstraintSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>SizeConstraintSet</code>. You use <code>SizeConstraintSetId</code> to get information about a <code>SizeConstraintSet</code> (see <a>GetSizeConstraintSet</a>), update a <code>SizeConstraintSet</code> (see <a>UpdateSizeConstraintSet</a>), insert a <code>SizeConstraintSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SizeConstraintSet</code> from AWS WAF (see <a>DeleteSizeConstraintSet</a>).</p> <p> <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>SizeConstraintSet</code>, if any.' }),
    ),
  })
  .openapi({
    required: ['SizeConstraintSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p>',
  })
  .openapi('SizeConstraintSetSummary')

const SizeConstraintSetSummariesSchema = z
  .array(SizeConstraintSetSummarySchema)
  .openapi('SizeConstraintSetSummaries')

const ListSizeConstraintSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>SizeConstraintSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>SizeConstraintSet</code> objects, submit another <code>ListSizeConstraintSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    SizeConstraintSets: SizeConstraintSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>SizeConstraintSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SizeConstraintSets: [
        {
          Name: 'MySampleSizeConstraintSet',
          SizeConstraintSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        },
      ],
    },
    required: [],
  })
  .openapi('ListSizeConstraintSetsResponse')

const ListSizeConstraintSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>SizeConstraintSets</code> than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>SizeConstraintSets</code>. For the second and subsequent <code>ListSizeConstraintSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>SizeConstraintSets</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>SizeConstraintSet</code> objects that you want AWS WAF to return for this request. If you have more <code>SizeConstraintSets</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>SizeConstraintSet</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSizeConstraintSetsRequest', required: [] })
  .openapi('ListSizeConstraintSetsRequest')

const SqlInjectionMatchSetSummarySchema = z
  .object({
    SqlInjectionMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for a <code>SqlInjectionMatchSet</code>. You use <code>SqlInjectionMatchSetId</code> to get information about a <code>SqlInjectionMatchSet</code> (see <a>GetSqlInjectionMatchSet</a>), update a <code>SqlInjectionMatchSet</code> (see <a>UpdateSqlInjectionMatchSet</a>), insert a <code>SqlInjectionMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SqlInjectionMatchSet</code> from AWS WAF (see <a>DeleteSqlInjectionMatchSet</a>).</p> <p> <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the <code>SqlInjectionMatchSet</code>, if any, specified by <code>Id</code>.',
        }),
    ),
  })
  .openapi({
    required: ['SqlInjectionMatchSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p>',
  })
  .openapi('SqlInjectionMatchSetSummary')

const SqlInjectionMatchSetSummariesSchema = z
  .array(SqlInjectionMatchSetSummarySchema)
  .openapi('SqlInjectionMatchSetSummaries')

const ListSqlInjectionMatchSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <a>SqlInjectionMatchSet</a> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>SqlInjectionMatchSet</code> objects, submit another <code>ListSqlInjectionMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    SqlInjectionMatchSets: SqlInjectionMatchSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>SqlInjectionMatchSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SqlInjectionMatchSets: [
        {
          Name: 'MySQLInjectionMatchSet',
          SqlInjectionMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5',
        },
      ],
    },
    description: 'The response to a <a>ListSqlInjectionMatchSets</a> request.',
    required: [],
  })
  .openapi('ListSqlInjectionMatchSetsResponse')

const ListSqlInjectionMatchSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <a>SqlInjectionMatchSet</a> objects than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>SqlInjectionMatchSets</code>. For the second and subsequent <code>ListSqlInjectionMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>SqlInjectionMatchSets</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <a>SqlInjectionMatchSet</a> objects that you want AWS WAF to return for this request. If you have more <code>SqlInjectionMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListSqlInjectionMatchSetsRequest',
    description:
      'A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.',
    required: [],
  })
  .openapi('ListSqlInjectionMatchSetsRequest')

const SubscribedRuleGroupSummarySchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for a <code>RuleGroup</code>.' }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A friendly name or description of the <code>RuleGroup</code>. You can't change the name of a <code>RuleGroup</code> after you create it.",
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name or description for the metrics for this <code>RuleGroup</code>. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can\'t contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can\'t change the name of the metric after you create the <code>RuleGroup</code>.',
        }),
    ),
  })
  .openapi({
    required: ['RuleGroupId', 'Name', 'MetricName'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p>',
  })
  .openapi('SubscribedRuleGroupSummary')

const SubscribedRuleGroupSummariesSchema = z
  .array(SubscribedRuleGroupSummarySchema)
  .openapi('SubscribedRuleGroupSummaries')

const ListSubscribedRuleGroupsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more objects, submit another <code>ListSubscribedRuleGroups</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    RuleGroups: SubscribedRuleGroupSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>RuleGroup</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSubscribedRuleGroupsResponse')

const ListSubscribedRuleGroupsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>ByteMatchSets</code>subscribed rule groups than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of subscribed rule groups. For the second and subsequent <code>ListSubscribedRuleGroupsRequest</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of subscribed rule groups.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of subscribed rule groups that you want AWS WAF to return for this request. If you have more objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSubscribedRuleGroupsRequest', required: [] })
  .openapi('ListSubscribedRuleGroupsRequest')

const TagInfoForResourceSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    TagList: TagListSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can\'t manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>',
    required: [],
  })
  .openapi('TagInfoForResource')

const ListTagsForResourceResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    TagInfoForResource: TagInfoForResourceSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    Limit: PaginationLimitSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    ResourceARN: ResourceArnSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const WebACLSummariesSchema = z.array(WebACLSummarySchema).openapi('WebACLSummaries')

const ListWebACLsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>WebACL</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>WebACL</code> objects, submit another <code>ListWebACLs</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    WebACLs: WebACLSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>WebACLSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { WebACLs: [{ Name: 'WebACLexample', WebACLId: 'webacl-1472061481310' }] },
    required: [],
  })
  .openapi('ListWebACLsResponse')

const ListWebACLsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <code>WebACL</code> objects than the number that you specify for <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>WebACL</code> objects. For the second and subsequent <code>ListWebACLs</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>WebACL</code> objects.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>WebACL</code> objects that you want AWS WAF to return for this request. If you have more <code>WebACL</code> objects than the number that you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>WebACL</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWebACLsRequest', required: [] })
  .openapi('ListWebACLsRequest')

const XssMatchSetSummarySchema = z
  .object({
    XssMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about a <code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code> (see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF (see <a>DeleteXssMatchSet</a>).</p> <p> <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>',
        }),
    ),
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the <code>XssMatchSet</code>, if any, specified by <code>Id</code>.',
        }),
    ),
  })
  .openapi({
    required: ['XssMatchSetId', 'Name'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>',
  })
  .openapi('XssMatchSetSummary')

const XssMatchSetSummariesSchema = z.array(XssMatchSetSummarySchema).openapi('XssMatchSetSummaries')

const ListXssMatchSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <a>XssMatchSet</a> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>XssMatchSet</code> objects, submit another <code>ListXssMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.',
        }),
    ).exactOptional(),
    XssMatchSets: XssMatchSetSummariesSchema.and(
      z.any().openapi({ description: 'An array of <a>XssMatchSetSummary</a> objects.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      XssMatchSets: [
        { Name: 'MySampleXssMatchSet', XssMatchSetId: 'example1ds3t-46da-4fdb-b8d5-abc321j569j5' },
      ],
    },
    description: 'The response to a <a>ListXssMatchSets</a> request.',
    required: [],
  })
  .openapi('ListXssMatchSetsResponse')

const ListXssMatchSetsRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>Limit</code> and you have more <a>XssMatchSet</a> objects than the value of <code>Limit</code>, AWS WAF returns a <code>NextMarker</code> value in the response that allows you to list another group of <code>XssMatchSets</code>. For the second and subsequent <code>ListXssMatchSets</code> requests, specify the value of <code>NextMarker</code> from the previous response to get information about another batch of <code>XssMatchSets</code>.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <a>XssMatchSet</a> objects that you want AWS WAF to return for this request. If you have more <code>XssMatchSet</code> objects than the number you specify for <code>Limit</code>, the response includes a <code>NextMarker</code> value that you can use to get another batch of <code>Rules</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListXssMatchSetsRequest',
    description:
      'A request to list the <a>XssMatchSet</a> objects created by the current AWS account.',
    required: [],
  })
  .openapi('ListXssMatchSetsRequest')

const PutLoggingConfigurationResponseSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a>LoggingConfiguration</a> that you submitted in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutLoggingConfigurationResponse')

const PutLoggingConfigurationRequestSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Kinesis Data Firehose that contains the inspected traffic information, the redacted fields details, and the Amazon Resource Name (ARN) of the web ACL to monitor.</p> <note> <p>When specifying <code>Type</code> in <code>RedactedFields</code>, you must use one of the following values: <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or <code>METHOD</code>.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['LoggingConfiguration'], title: 'PutLoggingConfigurationRequest' })
  .openapi('PutLoggingConfigurationRequest')

const WAFServiceLinkedRoleErrorExceptionSchema = z
  .any()
  .openapi('WAFServiceLinkedRoleErrorException')

const PutPermissionPolicyResponseSchema = z.object({}).openapi('PutPermissionPolicyResponse')

const PutPermissionPolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the RuleGroup to which you want to attach the policy.',
        }),
    ),
    Policy: PolicyStringSchema.and(
      z.any().openapi({ description: 'The policy to attach to the specified RuleGroup.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Policy'], title: 'PutPermissionPolicyRequest' })
  .openapi('PutPermissionPolicyRequest')

const WAFInvalidPermissionPolicyExceptionSchema = z
  .any()
  .openapi('WAFInvalidPermissionPolicyException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(z.any().openapi({ description: '<p/>' })),
    Tags: TagListSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(z.any().openapi({ description: '<p/>' })),
    TagKeys: TagKeyListSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateByteMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateByteMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('UpdateByteMatchSetResponse')

const ChangeActionSchema = z.enum(['INSERT', 'DELETE']).openapi('ChangeAction')

const ByteMatchSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether to insert or delete a <a>ByteMatchTuple</a>.' }),
    ),
    ByteMatchTuple: ByteMatchTupleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the part of a web request that you want AWS WAF to inspect and the value that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>ByteMatchTuple</code> values must exactly match the values in the <code>ByteMatchTuple</code> that you want to delete from the <code>ByteMatchSet</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'ByteMatchTuple'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>',
  })
  .openapi('ByteMatchSetUpdate')

const ByteMatchSetUpdatesSchema = z
  .array(ByteMatchSetUpdateSchema)
  .min(1)
  .openapi('ByteMatchSetUpdates')

const UpdateByteMatchSetRequestSchema = z
  .object({
    ByteMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ByteMatchSetId</code> of the <a>ByteMatchSet</a> that you want to update. <code>ByteMatchSetId</code> is returned by <a>CreateByteMatchSet</a> and by <a>ListByteMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: ByteMatchSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>ByteMatchSetUpdate</code> objects that you want to insert into or delete from a <a>ByteMatchSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>ByteMatchSetUpdate</a>: Contains <code>Action</code> and <code>ByteMatchTuple</code> </p> </li> <li> <p> <a>ByteMatchTuple</a>: Contains <code>FieldToMatch</code>, <code>PositionalConstraint</code>, <code>TargetString</code>, and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ByteMatchSetId', 'ChangeToken', 'Updates'],
    title: 'UpdateByteMatchSetRequest',
  })
  .openapi('UpdateByteMatchSetRequest')

const WAFNonexistentContainerExceptionSchema = z.any().openapi('WAFNonexistentContainerException')

const UpdateGeoMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateGeoMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGeoMatchSetResponse')

const GeoMatchSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to insert or delete a country with <a>UpdateGeoMatchSet</a>.',
        }),
    ),
    GeoMatchConstraint: GeoMatchConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            'The country from which web requests originate that you want AWS WAF to search for.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'GeoMatchConstraint'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p>',
  })
  .openapi('GeoMatchSetUpdate')

const GeoMatchSetUpdatesSchema = z
  .array(GeoMatchSetUpdateSchema)
  .min(1)
  .openapi('GeoMatchSetUpdates')

const UpdateGeoMatchSetRequestSchema = z
  .object({
    GeoMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>GeoMatchSetId</code> of the <a>GeoMatchSet</a> that you want to update. <code>GeoMatchSetId</code> is returned by <a>CreateGeoMatchSet</a> and by <a>ListGeoMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: GeoMatchSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>GeoMatchSetUpdate</code> objects that you want to insert into or delete from an <a>GeoMatchSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>GeoMatchSetUpdate</a>: Contains <code>Action</code> and <code>GeoMatchConstraint</code> </p> </li> <li> <p> <a>GeoMatchConstraint</a>: Contains <code>Type</code> and <code>Value</code> </p> <p>You can have only one <code>Type</code> and <code>Value</code> per <code>GeoMatchConstraint</code>. To add multiple countries, include multiple <code>GeoMatchSetUpdate</code> objects in your request.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['GeoMatchSetId', 'ChangeToken', 'Updates'],
    title: 'UpdateGeoMatchSetRequest',
  })
  .openapi('UpdateGeoMatchSetRequest')

const UpdateIPSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateIPSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('UpdateIPSetResponse')

const IPSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to insert or delete an IP address with <a>UpdateIPSet</a>.',
        }),
    ),
    IPSetDescriptor: IPSetDescriptorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'IPSetDescriptor'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p>',
  })
  .openapi('IPSetUpdate')

const IPSetUpdatesSchema = z.array(IPSetUpdateSchema).min(1).openapi('IPSetUpdates')

const UpdateIPSetRequestSchema = z
  .object({
    IPSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>IPSetId</code> of the <a>IPSet</a> that you want to update. <code>IPSetId</code> is returned by <a>CreateIPSet</a> and by <a>ListIPSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: IPSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>IPSetUpdate</code> objects that you want to insert into or delete from an <a>IPSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>IPSetUpdate</a>: Contains <code>Action</code> and <code>IPSetDescriptor</code> </p> </li> <li> <p> <a>IPSetDescriptor</a>: Contains <code>Type</code> and <code>Value</code> </p> </li> </ul> <p>You can insert a maximum of 1000 addresses in a single request.</p>',
        }),
    ),
  })
  .openapi({ required: ['IPSetId', 'ChangeToken', 'Updates'], title: 'UpdateIPSetRequest' })
  .openapi('UpdateIPSetRequest')

const UpdateRateBasedRuleResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRateBasedRuleResponse')

const RuleUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>INSERT</code> to add a <code>Predicate</code> to a <code>Rule</code>. Use <code>DELETE</code> to remove a <code>Predicate</code> from a <code>Rule</code>.',
        }),
    ),
    Predicate: PredicateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the <code>Predicate</code> (such as an <code>IPSet</code>) that you want to add to a <code>Rule</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'Predicate'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>',
  })
  .openapi('RuleUpdate')

const RuleUpdatesSchema = z.array(RuleUpdateSchema).openapi('RuleUpdates')

const UpdateRateBasedRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <code>RateBasedRule</code> that you want to update. <code>RuleId</code> is returned by <code>CreateRateBasedRule</code> and by <a>ListRateBasedRules</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: RuleUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>RuleUpdate</code> objects that you want to insert into or delete from a <a>RateBasedRule</a>. ',
        }),
    ),
    RateLimit: RateLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of requests, which have an identical value in the field specified by the <code>RateKey</code>, allowed in a five-minute period. If the number of requests exceeds the <code>RateLimit</code> and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.',
        }),
    ),
  })
  .openapi({
    required: ['RuleId', 'ChangeToken', 'Updates', 'RateLimit'],
    title: 'UpdateRateBasedRuleRequest',
  })
  .openapi('UpdateRateBasedRuleRequest')

const UpdateRegexMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateRegexMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRegexMatchSetResponse')

const RegexMatchSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to insert or delete a <a>RegexMatchTuple</a>.',
        }),
    ),
    RegexMatchTuple: RegexMatchTupleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the part of a web request that you want AWS WAF to inspect and the identifier of the regular expression (regex) pattern that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>RegexMatchTuple</code> values must exactly match the values in the <code>RegexMatchTuple</code> that you want to delete from the <code>RegexMatchSet</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'RegexMatchTuple'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p>',
  })
  .openapi('RegexMatchSetUpdate')

const RegexMatchSetUpdatesSchema = z
  .array(RegexMatchSetUpdateSchema)
  .min(1)
  .openapi('RegexMatchSetUpdates')

const UpdateRegexMatchSetRequestSchema = z
  .object({
    RegexMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexMatchSetId</code> of the <a>RegexMatchSet</a> that you want to update. <code>RegexMatchSetId</code> is returned by <a>CreateRegexMatchSet</a> and by <a>ListRegexMatchSets</a>.',
        }),
    ),
    Updates: RegexMatchSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>RegexMatchSetUpdate</code> objects that you want to insert into or delete from a <a>RegexMatchSet</a>. For more information, see <a>RegexMatchTuple</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['RegexMatchSetId', 'Updates', 'ChangeToken'],
    title: 'UpdateRegexMatchSetRequest',
  })
  .openapi('UpdateRegexMatchSetRequest')

const UpdateRegexPatternSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateRegexPatternSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRegexPatternSetResponse')

const RegexPatternSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether to insert or delete a <code>RegexPatternString</code>.',
        }),
    ),
    RegexPatternString: RegexPatternStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'RegexPatternString'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p>',
  })
  .openapi('RegexPatternSetUpdate')

const RegexPatternSetUpdatesSchema = z
  .array(RegexPatternSetUpdateSchema)
  .min(1)
  .openapi('RegexPatternSetUpdates')

const UpdateRegexPatternSetRequestSchema = z
  .object({
    RegexPatternSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RegexPatternSetId</code> of the <a>RegexPatternSet</a> that you want to update. <code>RegexPatternSetId</code> is returned by <a>CreateRegexPatternSet</a> and by <a>ListRegexPatternSets</a>.',
        }),
    ),
    Updates: RegexPatternSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>RegexPatternSetUpdate</code> objects that you want to insert into or delete from a <a>RegexPatternSet</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({
    required: ['RegexPatternSetId', 'Updates', 'ChangeToken'],
    title: 'UpdateRegexPatternSetRequest',
  })
  .openapi('UpdateRegexPatternSetRequest')

const WAFInvalidRegexPatternExceptionSchema = z.any().openapi('WAFInvalidRegexPatternException')

const UpdateRuleResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('UpdateRuleResponse')

const UpdateRuleRequestSchema = z
  .object({
    RuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleId</code> of the <code>Rule</code> that you want to update. <code>RuleId</code> is returned by <code>CreateRule</code> and by <a>ListRules</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: RuleUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>RuleUpdate</code> objects that you want to insert into or delete from a <a>Rule</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>RuleUpdate</a>: Contains <code>Action</code> and <code>Predicate</code> </p> </li> <li> <p> <a>Predicate</a>: Contains <code>DataId</code>, <code>Negated</code>, and <code>Type</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['RuleId', 'ChangeToken', 'Updates'], title: 'UpdateRuleRequest' })
  .openapi('UpdateRuleRequest')

const UpdateRuleGroupResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateRuleGroup</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRuleGroupResponse')

const RuleGroupUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>INSERT</code> to add an <code>ActivatedRule</code> to a <code>RuleGroup</code>. Use <code>DELETE</code> to remove an <code>ActivatedRule</code> from a <code>RuleGroup</code>.',
        }),
    ),
    ActivatedRule: ActivatedRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ActivatedRule</code> object specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'ActivatedRule'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p>',
  })
  .openapi('RuleGroupUpdate')

const RuleGroupUpdatesSchema = z.array(RuleGroupUpdateSchema).min(1).openapi('RuleGroupUpdates')

const UpdateRuleGroupRequestSchema = z
  .object({
    RuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>RuleGroupId</code> of the <a>RuleGroup</a> that you want to update. <code>RuleGroupId</code> is returned by <a>CreateRuleGroup</a> and by <a>ListRuleGroups</a>.',
        }),
    ),
    Updates: RuleGroupUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>RuleGroupUpdate</code> objects that you want to insert into or delete from a <a>RuleGroup</a>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p> <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case you do not use <code>ActivatedRule|Action</code>. For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>.</p>',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
  })
  .openapi({ required: ['RuleGroupId', 'Updates', 'ChangeToken'], title: 'UpdateRuleGroupRequest' })
  .openapi('UpdateRuleGroupRequest')

const UpdateSizeConstraintSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateSizeConstraintSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('UpdateSizeConstraintSetResponse')

const SizeConstraintSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>INSERT</code> to add a <a>SizeConstraintSetUpdate</a> to a <a>SizeConstraintSet</a>. Use <code>DELETE</code> to remove a <code>SizeConstraintSetUpdate</code> from a <code>SizeConstraintSet</code>.',
        }),
    ),
    SizeConstraint: SizeConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'SizeConstraint'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p>',
  })
  .openapi('SizeConstraintSetUpdate')

const SizeConstraintSetUpdatesSchema = z
  .array(SizeConstraintSetUpdateSchema)
  .min(1)
  .openapi('SizeConstraintSetUpdates')

const UpdateSizeConstraintSetRequestSchema = z
  .object({
    SizeConstraintSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SizeConstraintSetId</code> of the <a>SizeConstraintSet</a> that you want to update. <code>SizeConstraintSetId</code> is returned by <a>CreateSizeConstraintSet</a> and by <a>ListSizeConstraintSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: SizeConstraintSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>SizeConstraintSetUpdate</code> objects that you want to insert into or delete from a <a>SizeConstraintSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>SizeConstraintSetUpdate</a>: Contains <code>Action</code> and <code>SizeConstraint</code> </p> </li> <li> <p> <a>SizeConstraint</a>: Contains <code>FieldToMatch</code>, <code>TextTransformation</code>, <code>ComparisonOperator</code>, and <code>Size</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SizeConstraintSetId', 'ChangeToken', 'Updates'],
    title: 'UpdateSizeConstraintSetRequest',
  })
  .openapi('UpdateSizeConstraintSetRequest')

const UpdateSqlInjectionMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateSqlInjectionMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' },
    description: 'The response to an <a>UpdateSqlInjectionMatchSets</a> request.',
    required: [],
  })
  .openapi('UpdateSqlInjectionMatchSetResponse')

const SqlInjectionMatchSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>INSERT</code> to add a <a>SqlInjectionMatchSetUpdate</a> to a <a>SqlInjectionMatchSet</a>. Use <code>DELETE</code> to remove a <code>SqlInjectionMatchSetUpdate</code> from a <code>SqlInjectionMatchSet</code>.',
        }),
    ),
    SqlInjectionMatchTuple: SqlInjectionMatchTupleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'SqlInjectionMatchTuple'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p>',
  })
  .openapi('SqlInjectionMatchSetUpdate')

const SqlInjectionMatchSetUpdatesSchema = z
  .array(SqlInjectionMatchSetUpdateSchema)
  .min(1)
  .openapi('SqlInjectionMatchSetUpdates')

const UpdateSqlInjectionMatchSetRequestSchema = z
  .object({
    SqlInjectionMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>SqlInjectionMatchSetId</code> of the <code>SqlInjectionMatchSet</code> that you want to update. <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: SqlInjectionMatchSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>SqlInjectionMatchSetUpdate</code> objects that you want to insert into or delete from a <a>SqlInjectionMatchSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>SqlInjectionMatchSetUpdate</a>: Contains <code>Action</code> and <code>SqlInjectionMatchTuple</code> </p> </li> <li> <p> <a>SqlInjectionMatchTuple</a>: Contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SqlInjectionMatchSetId', 'ChangeToken', 'Updates'],
    title: 'UpdateSqlInjectionMatchSetRequest',
    description: 'A request to update a <a>SqlInjectionMatchSet</a>.',
  })
  .openapi('UpdateSqlInjectionMatchSetRequest')

const UpdateWebACLResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateWebACL</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' }, required: [] })
  .openapi('UpdateWebACLResponse')

const WebACLUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.',
        }),
    ),
    ActivatedRule: ActivatedRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'ActivatedRule'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>',
  })
  .openapi('WebACLUpdate')

const WebACLUpdatesSchema = z.array(WebACLUpdateSchema).openapi('WebACLUpdates')

const UpdateWebACLRequestSchema = z
  .object({
    WebACLId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>WebACLId</code> of the <a>WebACL</a> that you want to update. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: WebACLUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of updates to make to the <a>WebACL</a>.</p> <p>An array of <code>WebACLUpdate</code> objects that you want to insert into or delete from a <a>WebACL</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>WebACLUpdate</a>: Contains <code>Action</code> and <code>ActivatedRule</code> </p> </li> <li> <p> <a>ActivatedRule</a>: Contains <code>Action</code>, <code>OverrideAction</code>, <code>Priority</code>, <code>RuleId</code>, and <code>Type</code>. <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case, you do not use <code>ActivatedRule|Action</code>. For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>. </p> </li> <li> <p> <a>WafAction</a>: Contains <code>Type</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DefaultAction: WafActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "A default action for the web ACL, either ALLOW or BLOCK. AWS WAF performs the default action if a request doesn't match the criteria in any of the rules in a web ACL.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WebACLId', 'ChangeToken'], title: 'UpdateWebACLRequest' })
  .openapi('UpdateWebACLRequest')

const WAFSubscriptionNotFoundExceptionSchema = z.any().openapi('WAFSubscriptionNotFoundException')

const UpdateXssMatchSetResponseSchema = z
  .object({
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ChangeToken</code> that you used to submit the <code>UpdateXssMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { ChangeToken: 'abcd12f2-46da-4fdb-b8d5-fbd4c466928f' },
    description: 'The response to an <a>UpdateXssMatchSets</a> request.',
    required: [],
  })
  .openapi('UpdateXssMatchSetResponse')

const XssMatchSetUpdateSchema = z
  .object({
    Action: ChangeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>INSERT</code> to add an <a>XssMatchSetUpdate</a> to an <a>XssMatchSet</a>. Use <code>DELETE</code> to remove an <code>XssMatchSetUpdate</code> from an <code>XssMatchSet</code>.',
        }),
    ),
    XssMatchTuple: XssMatchTupleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'XssMatchTuple'],
    description:
      '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>',
  })
  .openapi('XssMatchSetUpdate')

const XssMatchSetUpdatesSchema = z
  .array(XssMatchSetUpdateSchema)
  .min(1)
  .openapi('XssMatchSetUpdates')

const UpdateXssMatchSetRequestSchema = z
  .object({
    XssMatchSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>XssMatchSetId</code> of the <code>XssMatchSet</code> that you want to update. <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.',
        }),
    ),
    ChangeToken: ChangeTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned by the most recent call to <a>GetChangeToken</a>.',
        }),
    ),
    Updates: XssMatchSetUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of <code>XssMatchSetUpdate</code> objects that you want to insert into or delete from an <a>XssMatchSet</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>XssMatchSetUpdate</a>: Contains <code>Action</code> and <code>XssMatchTuple</code> </p> </li> <li> <p> <a>XssMatchTuple</a>: Contains <code>FieldToMatch</code> and <code>TextTransformation</code> </p> </li> <li> <p> <a>FieldToMatch</a>: Contains <code>Data</code> and <code>Type</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['XssMatchSetId', 'ChangeToken', 'Updates'],
    title: 'UpdateXssMatchSetRequest',
    description: 'A request to update an <a>XssMatchSet</a>.',
  })
  .openapi('UpdateXssMatchSetRequest')

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

export const postXAmzTargetAWSWAFRegional20161128AssociateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.</p>',
  operationId: 'AssociateWebACL',
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
        .literal('AWSWAF_Regional_20161128.AssociateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.AssociateWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateWebACLResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateByteMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateByteMatchSet',
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
        .literal('AWSWAF_Regional_20161128.CreateByteMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateByteMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateByteMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateByteMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you\'re receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateGeoMatchSet',
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
        .literal('AWSWAF_Regional_20161128.CreateGeoMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateGeoMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGeoMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGeoMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you\'re receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateIPSet',
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
        .literal('AWSWAF_Regional_20161128.CreateIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateIPSet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateIPSetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIPSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateRateBasedRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateRateBasedRule',
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
        .literal('AWSWAF_Regional_20161128.CreateRateBasedRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateRateBasedRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRateBasedRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRateBasedRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    487: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateRegexMatchSet',
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
        .literal('AWSWAF_Regional_20161128.CreateRegexMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateRegexMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRegexMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRegexMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateRegexPatternSet',
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
        .literal('AWSWAF_Regional_20161128.CreateRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateRegexPatternSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRegexPatternSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRegexPatternSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateRule',
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
        .literal('AWSWAF_Regional_20161128.CreateRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    487: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateRuleGroup',
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
        .literal('AWSWAF_Regional_20161128.CreateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRuleGroupResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    484: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    486: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateSizeConstraintSet',
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
        .literal('AWSWAF_Regional_20161128.CreateSizeConstraintSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateSizeConstraintSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSizeConstraintSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSizeConstraintSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateSqlInjectionMatchSet',
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
        .literal('AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSqlInjectionMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSqlInjectionMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn\'t match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateWebACL',
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
        .literal('AWSWAF_Regional_20161128.CreateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWebACLResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    487: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    488: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack',
  description:
    '<p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>',
  operationId: 'CreateWebACLMigrationStack',
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
        .literal('AWSWAF_Regional_20161128.CreateWebACLMigrationStack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.CreateWebACLMigrationStack'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebACLMigrationStackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWebACLMigrationStackResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFEntityMigrationException',
      content: { 'application/json': { schema: WAFEntityMigrationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128CreateXssMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'CreateXssMatchSet',
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
        .literal('AWSWAF_Regional_20161128.CreateXssMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.CreateXssMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateXssMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateXssMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can\'t delete a <code>ByteMatchSet</code> if it\'s still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteByteMatchSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteByteMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteByteMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteByteMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteByteMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can\'t delete a <code>GeoMatchSet</code> if it\'s still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteGeoMatchSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteGeoMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteGeoMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGeoMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGeoMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can\'t delete an <code>IPSet</code> if it\'s still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteIPSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteIPSet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteIPSetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIPSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>',
  operationId: 'DeleteLoggingConfiguration',
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
        .literal('AWSWAF_Regional_20161128.DeleteLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.DeleteLoggingConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLoggingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>',
  operationId: 'DeletePermissionPolicy',
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
        .literal('AWSWAF_Regional_20161128.DeletePermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeletePermissionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePermissionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePermissionPolicyResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can\'t delete a rule if it\'s still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>',
  operationId: 'DeleteRateBasedRule',
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
        .literal('AWSWAF_Regional_20161128.DeleteRateBasedRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteRateBasedRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRateBasedRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRateBasedRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    487: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can\'t delete a <code>RegexMatchSet</code> if it\'s still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteRegexMatchSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteRegexMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteRegexMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRegexMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRegexMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can\'t delete a <code>RegexPatternSet</code> if it\'s still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>',
  operationId: 'DeleteRegexPatternSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteRegexPatternSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRegexPatternSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRegexPatternSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can\'t delete a <code>Rule</code> if it\'s still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>',
  operationId: 'DeleteRule',
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
        .literal('AWSWAF_Regional_20161128.DeleteRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    487: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can\'t delete a <code>RuleGroup</code> if it\'s still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>',
  operationId: 'DeleteRuleGroup',
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
        .literal('AWSWAF_Regional_20161128.DeleteRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRuleGroupResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    487: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can\'t delete a <code>SizeConstraintSet</code> if it\'s still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteSizeConstraintSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteSizeConstraintSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteSizeConstraintSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSizeConstraintSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSizeConstraintSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can\'t delete a <code>SqlInjectionMatchSet</code> if it\'s still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteSqlInjectionMatchSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSqlInjectionMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSqlInjectionMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can\'t delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>',
  operationId: 'DeleteWebACL',
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
        .literal('AWSWAF_Regional_20161128.DeleteWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWebACLResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    487: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can\'t delete an <code>XssMatchSet</code> if it\'s still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>',
  operationId: 'DeleteXssMatchSet',
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
        .literal('AWSWAF_Regional_20161128.DeleteXssMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DeleteXssMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteXssMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteXssMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    484: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    485: {
      description: 'WAFNonEmptyEntityException',
      content: { 'application/json': { schema: WAFNonEmptyEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128DisassociateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</p>',
  operationId: 'DisassociateWebACL',
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
        .literal('AWSWAF_Regional_20161128.DisassociateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.DisassociateWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateWebACLResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetByteMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>',
  operationId: 'GetByteMatchSet',
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
        .literal('AWSWAF_Regional_20161128.GetByteMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetByteMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetByteMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetByteMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetChangeTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn\'t submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>',
  operationId: 'GetChangeToken',
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
        .literal('AWSWAF_Regional_20161128.GetChangeToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetChangeToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetChangeTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChangeTokenResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven\'t used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>',
  operationId: 'GetChangeTokenStatus',
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
        .literal('AWSWAF_Regional_20161128.GetChangeTokenStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetChangeTokenStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetChangeTokenStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChangeTokenStatusResponseSchema } },
    },
    480: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetGeoMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>',
  operationId: 'GetGeoMatchSet',
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
        .literal('AWSWAF_Regional_20161128.GetGeoMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetGeoMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetGeoMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGeoMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>',
  operationId: 'GetIPSet',
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
        .literal('AWSWAF_Regional_20161128.GetIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetIPSet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIPSetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIPSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>',
  operationId: 'GetLoggingConfiguration',
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
        .literal('AWSWAF_Regional_20161128.GetLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetLoggingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLoggingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetPermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>',
  operationId: 'GetPermissionPolicy',
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
        .literal('AWSWAF_Regional_20161128.GetPermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetPermissionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPermissionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPermissionPolicyResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>',
  operationId: 'GetRateBasedRule',
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
        .literal('AWSWAF_Regional_20161128.GetRateBasedRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetRateBasedRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRateBasedRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRateBasedRuleResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>',
  operationId: 'GetRateBasedRuleManagedKeys',
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
        .literal('AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRateBasedRuleManagedKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRateBasedRuleManagedKeysResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRegexMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>',
  operationId: 'GetRegexMatchSet',
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
        .literal('AWSWAF_Regional_20161128.GetRegexMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetRegexMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRegexMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRegexMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>',
  operationId: 'GetRegexPatternSet',
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
        .literal('AWSWAF_Regional_20161128.GetRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetRegexPatternSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRegexPatternSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRegexPatternSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>',
  operationId: 'GetRule',
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
        .literal('AWSWAF_Regional_20161128.GetRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRuleResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>',
  operationId: 'GetRuleGroup',
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
        .literal('AWSWAF_Regional_20161128.GetRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRuleGroupResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetSampledRequestsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>',
  operationId: 'GetSampledRequests',
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
        .literal('AWSWAF_Regional_20161128.GetSampledRequests')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetSampledRequests'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSampledRequestsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSampledRequestsResponseSchema } },
    },
    480: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>',
  operationId: 'GetSizeConstraintSet',
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
        .literal('AWSWAF_Regional_20161128.GetSizeConstraintSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetSizeConstraintSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSizeConstraintSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSizeConstraintSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>',
  operationId: 'GetSqlInjectionMatchSet',
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
        .literal('AWSWAF_Regional_20161128.GetSqlInjectionMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetSqlInjectionMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSqlInjectionMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSqlInjectionMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>',
  operationId: 'GetWebACL',
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
        .literal('AWSWAF_Regional_20161128.GetWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetWebACL'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetWebACLRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWebACLResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetWebACLForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource',
  description:
    '<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the web ACL for the specified resource, either an application load balancer or Amazon API Gateway stage.</p>',
  operationId: 'GetWebACLForResource',
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
        .literal('AWSWAF_Regional_20161128.GetWebACLForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetWebACLForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetWebACLForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWebACLForResourceResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128GetXssMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>',
  operationId: 'GetXssMatchSet',
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
        .literal('AWSWAF_Regional_20161128.GetXssMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.GetXssMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetXssMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetXssMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>',
  operationId: 'ListActivatedRulesInRuleGroup',
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
        .literal('AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListActivatedRulesInRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListActivatedRulesInRuleGroupResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListByteMatchSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>',
  operationId: 'ListByteMatchSets',
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
        .literal('AWSWAF_Regional_20161128.ListByteMatchSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListByteMatchSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListByteMatchSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListByteMatchSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>',
  operationId: 'ListGeoMatchSets',
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
        .literal('AWSWAF_Regional_20161128.ListGeoMatchSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListGeoMatchSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGeoMatchSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGeoMatchSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListIPSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>',
  operationId: 'ListIPSets',
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
        .literal('AWSWAF_Regional_20161128.ListIPSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListIPSets'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListIPSetsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIPSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>',
  operationId: 'ListLoggingConfigurations',
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
        .literal('AWSWAF_Regional_20161128.ListLoggingConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.ListLoggingConfigurations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLoggingConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLoggingConfigurationsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListRateBasedRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>',
  operationId: 'ListRateBasedRules',
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
        .literal('AWSWAF_Regional_20161128.ListRateBasedRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListRateBasedRules'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRateBasedRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRateBasedRulesResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>',
  operationId: 'ListRegexMatchSets',
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
        .literal('AWSWAF_Regional_20161128.ListRegexMatchSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListRegexMatchSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRegexMatchSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRegexMatchSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>',
  operationId: 'ListRegexPatternSets',
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
        .literal('AWSWAF_Regional_20161128.ListRegexPatternSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListRegexPatternSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRegexPatternSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRegexPatternSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic Regional</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of resources associated with the specified web ACL.</p>',
  operationId: 'ListResourcesForWebACL',
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
        .literal('AWSWAF_Regional_20161128.ListResourcesForWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListResourcesForWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourcesForWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesForWebACLResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>',
  operationId: 'ListRuleGroups',
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
        .literal('AWSWAF_Regional_20161128.ListRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListRuleGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRuleGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRuleGroupsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListRules',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>',
  operationId: 'ListRules',
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
        .literal('AWSWAF_Regional_20161128.ListRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListRules'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListRulesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRulesResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>',
  operationId: 'ListSizeConstraintSets',
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
        .literal('AWSWAF_Regional_20161128.ListSizeConstraintSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListSizeConstraintSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSizeConstraintSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSizeConstraintSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>',
  operationId: 'ListSqlInjectionMatchSets',
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
        .literal('AWSWAF_Regional_20161128.ListSqlInjectionMatchSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.ListSqlInjectionMatchSets'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSqlInjectionMatchSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSqlInjectionMatchSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>',
  operationId: 'ListSubscribedRuleGroups',
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
        .literal('AWSWAF_Regional_20161128.ListSubscribedRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListSubscribedRuleGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSubscribedRuleGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSubscribedRuleGroupsResponseSchema } },
    },
    480: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can\'t manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>',
  operationId: 'ListTagsForResource',
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
        .literal('AWSWAF_Regional_20161128.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
    484: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListWebACLsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>',
  operationId: 'ListWebACLs',
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
        .literal('AWSWAF_Regional_20161128.ListWebACLs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListWebACLs'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListWebACLsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWebACLsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128ListXssMatchSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>',
  operationId: 'ListXssMatchSets',
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
        .literal('AWSWAF_Regional_20161128.ListXssMatchSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.ListXssMatchSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListXssMatchSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListXssMatchSetsResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>',
  operationId: 'PutLoggingConfiguration',
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
        .literal('AWSWAF_Regional_20161128.PutLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.PutLoggingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutLoggingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    483: {
      description: 'WAFServiceLinkedRoleErrorException',
      content: { 'application/json': { schema: WAFServiceLinkedRoleErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128PutPermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>',
  operationId: 'PutPermissionPolicy',
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
        .literal('AWSWAF_Regional_20161128.PutPermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.PutPermissionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutPermissionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPermissionPolicyResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidPermissionPolicyException',
      content: { 'application/json': { schema: WAFInvalidPermissionPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.TagResource',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can\'t manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>',
  operationId: 'TagResource',
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
        .literal('AWSWAF_Regional_20161128.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    486: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>',
  operationId: 'UntagResource',
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
        .literal('AWSWAF_Regional_20161128.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFBadRequestException',
      content: { 'application/json': { schema: WAFBadRequestExceptionSchema } },
    },
    484: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateByteMatchSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateByteMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateByteMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateByteMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateByteMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    486: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    487: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateGeoMatchSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateGeoMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateGeoMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGeoMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGeoMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you\'re receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateIPSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateIPSet'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateIPSetRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateIPSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>',
  operationId: 'UpdateRateBasedRule',
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
        .literal('AWSWAF_Regional_20161128.UpdateRateBasedRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateRateBasedRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRateBasedRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRateBasedRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateRegexMatchSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateRegexMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateRegexMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRegexMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRegexMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFDisallowedNameException',
      content: { 'application/json': { schema: WAFDisallowedNameExceptionSchema } },
    },
    483: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    484: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    487: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateRegexPatternSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateRegexPatternSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRegexPatternSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRegexPatternSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    487: {
      description: 'WAFInvalidRegexPatternException',
      content: { 'application/json': { schema: WAFInvalidRegexPatternExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateRule',
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
        .literal('AWSWAF_Regional_20161128.UpdateRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateRule'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRuleRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRuleResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateRuleGroup',
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
        .literal('AWSWAF_Regional_20161128.UpdateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRuleGroupResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    483: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateSizeConstraintSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateSizeConstraintSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateSizeConstraintSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSizeConstraintSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSizeConstraintSetResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you\'re receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateSqlInjectionMatchSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSqlInjectionMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSqlInjectionMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    486: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    487: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn\'t match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn\'t evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateWebACL',
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
        .literal('AWSWAF_Regional_20161128.UpdateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateWebACL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebACLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWebACLResponseSchema } },
    },
    480: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    486: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    487: {
      description: 'WAFReferencedItemException',
      content: { 'application/json': { schema: WAFReferencedItemExceptionSchema } },
    },
    488: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    489: {
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet',
  description:
    '<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you\'re receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>',
  operationId: 'UpdateXssMatchSet',
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
        .literal('AWSWAF_Regional_20161128.UpdateXssMatchSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_Regional_20161128.UpdateXssMatchSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateXssMatchSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateXssMatchSetResponseSchema } },
    },
    480: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidAccountException',
      content: { 'application/json': { schema: WAFInvalidAccountExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFNonexistentContainerException',
      content: { 'application/json': { schema: WAFNonexistentContainerExceptionSchema } },
    },
    485: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    486: {
      description: 'WAFStaleDataException',
      content: { 'application/json': { schema: WAFStaleDataExceptionSchema } },
    },
    487: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})
