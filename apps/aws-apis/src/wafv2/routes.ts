import { createRoute, z } from '@hono/zod-openapi'

const StatementSchema: z.ZodType<StatementType> = z
  .lazy(() =>
    z
      .object({
        ByteMatchStatement: ByteMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.',
            }),
        ).exactOptional(),
        SqliMatchStatement: SqliMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it. ',
            }),
        ).exactOptional(),
        XssMatchStatement: XssMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. ',
            }),
        ).exactOptional(),
        SizeConstraintStatement: SizeConstraintStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 kilobytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 kilobytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>',
            }),
        ).exactOptional(),
        GeoMatchStatement: GeoMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p> <ul> <li> <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p> </li> <li> <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p> </li> </ul> <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p> <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:clientip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:forwardedip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>',
            }),
        ).exactOptional(),
        RuleGroupReferenceStatement: RuleGroupReferenceStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You can only use a rule group reference statement at the top level inside a web ACL. </p>',
            }),
        ).exactOptional(),
        IPSetReferenceStatement: IPSetReferenceStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>',
            }),
        ).exactOptional(),
        RegexPatternSetReferenceStatement: RegexPatternSetReferenceStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>',
            }),
        ).exactOptional(),
        RateBasedStatement: RateBasedStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests. </p> <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p> <p>When the rule action triggers, WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specifies the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet the criteria of both of the nested statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet the criteria of both of the nested statements are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>',
            }),
        ).exactOptional(),
        AndStatement: AndStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. ',
            }),
        ).exactOptional(),
        OrStatement: OrStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. ',
            }),
        ).exactOptional(),
        NotStatement: NotStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.',
            }),
        ).exactOptional(),
        ManagedRuleGroupStatement: ManagedRuleGroupStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> <note> <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code> or the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
            }),
        ).exactOptional(),
        LabelMatchStatement: LabelMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p> <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>',
            }),
        ).exactOptional(),
        RegexMatchStatement: RegexMatchStatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'A rule statement used to search web request components for a match against a single regular expression. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether a web request matches the rule. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>',
        required: [],
      }),
  )
  .openapi('Statement')

type StatementsType = z.infer<typeof StatementSchema>[]

const StatementsSchema: z.ZodType<StatementsType> = z
  .lazy(() => z.array(StatementSchema))
  .openapi('Statements')

type AndStatementType = {
  Statements: z.infer<typeof StatementsSchema> & { [key: string]: unknown }
}

const SearchStringSchema = z.string().openapi('SearchString')

const FieldToMatchDataSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('FieldToMatchData')

const SingleHeaderSchema = z
  .object({
    Name: FieldToMatchDataSchema.and(
      z.any().openapi({ description: 'The name of the query header to inspect.' }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>Inspect one of the headers in the web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. The name isn\'t case sensitive.</p> <p>You can filter and inspect all headers with the <code>FieldToMatch</code> setting <code>Headers</code>.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code> </p>',
  })
  .openapi('SingleHeader')

const SingleQueryArgumentSchema = z
  .object({
    Name: FieldToMatchDataSchema.and(
      z.any().openapi({ description: 'The name of the query argument to inspect.' }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>Inspect one query argument in the web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name isn\'t case sensitive. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code> </p>',
  })
  .openapi('SingleQueryArgument')

const AllQueryArgumentsSchema = z
  .object({})
  .openapi({
    description:
      '<p>Inspect all query arguments of the web request. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"AllQueryArguments": {}</code> </p>',
  })
  .openapi('AllQueryArguments')

const UriPathSchema = z
  .object({})
  .openapi({
    description:
      '<p>Inspect the path component of the URI of the web request. This is the part of the web request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"UriPath": {}</code> </p>',
  })
  .openapi('UriPath')

const QueryStringSchema = z
  .object({})
  .openapi({
    description:
      '<p>Inspect the query string of the web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"QueryString": {}</code> </p>',
  })
  .openapi('QueryString')

const OversizeHandlingSchema = z.enum(['CONTINUE', 'MATCH', 'NO_MATCH']).openapi('OversizeHandling')

const BodySchema = z
  .object({
    OversizeHandling: OversizeHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What WAF should do if the body is larger than WAF can inspect. WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. If the body is larger than the limit, the underlying host service only forwards the contents that are below the limit to WAF for inspection. </p> <p>The default limit is 8 KB (8,192 kilobytes) for regional resources and 16 KB (16,384 kilobytes) for CloudFront distributions. For CloudFront distributions, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional processing fees. </p> <p>The options for oversize handling are the following:</p> <ul> <li> <p> <code>CONTINUE</code> - Inspect the body normally, according to the rule inspection criteria. </p> </li> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul> <p>You can combine the <code>MATCH</code> or <code>NO_MATCH</code> settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit. </p> <p>Default: <code>CONTINUE</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Inspect the body of the web request. The body immediately follows the request headers.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>',
    required: [],
  })
  .openapi('Body')

const MethodSchema = z
  .object({})
  .openapi({
    description:
      '<p>Inspect the HTTP method of the web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"Method": {}</code> </p>',
  })
  .openapi('Method')

const AllSchema = z
  .object({})
  .openapi({
    description:
      '<p>Inspect all of the elements that WAF has parsed and extracted from the web request component that you\'ve identified in your <a>FieldToMatch</a> specifications. </p> <p>This is used only in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"All": {}</code> </p>',
  })
  .openapi('All')

const JsonPointerPathSchema = z
  .string()
  .regex(/([\/])|([\/](([^~])|(~[01]))+)/)
  .min(1)
  .max(512)
  .openapi('JsonPointerPath')

const JsonPointerPathsSchema = z.array(JsonPointerPathSchema).min(1).openapi('JsonPointerPaths')

const JsonMatchPatternSchema = z
  .object({
    All: AllSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Match all of the elements. See also <code>MatchScope</code> in <a>JsonBody</a>. </p> <p>You must specify either this setting or the <code>IncludedPaths</code> setting, but not both.</p>',
        }),
    ).exactOptional(),
    IncludedPaths: JsonPointerPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Match only the specified include paths. See also <code>MatchScope</code> in <a>JsonBody</a>. </p> <p>Provide the include paths using JSON Pointer syntax. For example, <code>"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]</code>. For information about this syntax, see the Internet Engineering Task Force (IETF) documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript Object Notation (JSON) Pointer</a>. </p> <p>You must specify either this setting or the <code>All</code> setting, but not both.</p> <note> <p>Don\'t use this option to include all paths. Instead, use the <code>All</code> setting. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>. ',
    required: [],
  })
  .openapi('JsonMatchPattern')

const JsonMatchScopeSchema = z.enum(['ALL', 'KEY', 'VALUE']).openapi('JsonMatchScope')

const BodyParsingFallbackBehaviorSchema = z
  .enum(['MATCH', 'NO_MATCH', 'EVALUATE_AS_STRING'])
  .openapi('BodyParsingFallbackBehavior')

const JsonBodySchema = z
  .object({
    MatchPattern: JsonMatchPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. ',
        }),
    ),
    MatchScope: JsonMatchScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parts of the JSON to match against using the <code>MatchPattern</code>. If you specify <code>All</code>, WAF matches against keys and values. ',
        }),
    ),
    InvalidFallbackBehavior: BodyParsingFallbackBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What WAF should do if it fails to completely parse the JSON body. The options are the following:</p> <ul> <li> <p> <code>EVALUATE_AS_STRING</code> - Inspect the body as plain text. WAF applies the text transformations and inspection criteria that you defined for the JSON inspection to the body text string.</p> </li> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul> <p>If you don\'t provide this setting, WAF parses and evaluates the content only up to the first parsing failure that it encounters. </p> <p>WAF does its best to parse the entire JSON body, but might be forced to stop for reasons such as invalid characters, duplicate keys, truncation, and any content whose root node isn\'t an object or an array. </p> <p>WAF parses the JSON in the following examples as two valid key, value pairs: </p> <ul> <li> <p>Missing comma: <code>{"key1":"value1""key2":"value2"}</code> </p> </li> <li> <p>Missing colon: <code>{"key1":"value1","key2""value2"}</code> </p> </li> <li> <p>Extra colons: <code>{"key1"::"value1","key2""value2"}</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    OversizeHandling: OversizeHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What WAF should do if the body is larger than WAF can inspect. WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. If the body is larger than the limit, the underlying host service only forwards the contents that are below the limit to WAF for inspection. </p> <p>The default limit is 8 KB (8,192 kilobytes) for regional resources and 16 KB (16,384 kilobytes) for CloudFront distributions. For CloudFront distributions, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional processing fees. </p> <p>The options for oversize handling are the following:</p> <ul> <li> <p> <code>CONTINUE</code> - Inspect the body normally, according to the rule inspection criteria. </p> </li> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul> <p>You can combine the <code>MATCH</code> or <code>NO_MATCH</code> settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit. </p> <p>Default: <code>CONTINUE</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MatchPattern', 'MatchScope'],
    description:
      '<p>Inspect the body of the web request as JSON. The body immediately follows the request headers. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule\'s inspection criteria. WAF inspects only the parts of the JSON that result from the matches that you indicate. </p> <p>Example JSON: <code>"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }</code> </p>',
  })
  .openapi('JsonBody')

const HeaderNamesSchema = z.array(FieldToMatchDataSchema).min(1).max(199).openapi('HeaderNames')

const HeaderMatchPatternSchema = z
  .object({
    All: AllSchema.and(z.any().openapi({ description: 'Inspect all headers. ' })).exactOptional(),
    IncludedHeaders: HeaderNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Inspect only the headers that have a key that matches one of the strings specified here. ',
        }),
    ).exactOptional(),
    ExcludedHeaders: HeaderNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Inspect only the headers whose keys don't match any of the strings specified here. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The filter to use to identify the subset of headers to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p> <p>Example JSON: <code>"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }</code> </p>',
    required: [],
  })
  .openapi('HeaderMatchPattern')

const MapMatchScopeSchema = z.enum(['ALL', 'KEY', 'VALUE']).openapi('MapMatchScope')

const HeadersSchema = z
  .object({
    MatchPattern: HeaderMatchPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filter to use to identify the subset of headers to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p> <p>Example JSON: <code>"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }</code> </p>',
        }),
    ),
    MatchScope: MapMatchScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parts of the headers to match with the rule inspection criteria. If you specify <code>All</code>, WAF inspects both keys and values. ',
        }),
    ),
    OversizeHandling: OversizeHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What WAF should do if the headers of the request are larger than WAF can inspect. WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to WAF. </p> <p>The options for oversize handling are the following:</p> <ul> <li> <p> <code>CONTINUE</code> - Inspect the headers normally, according to the rule inspection criteria. </p> </li> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['MatchPattern', 'MatchScope', 'OversizeHandling'],
    description:
      '<p>Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>If you want to inspect just the value of a single header, use the <code>SingleHeader</code> <code>FieldToMatch</code> setting instead.</p> <p>Example JSON: <code>"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p>',
  })
  .openapi('Headers')

const SingleCookieNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(60)
  .openapi('SingleCookieName')

const CookieNamesSchema = z.array(SingleCookieNameSchema).min(1).max(199).openapi('CookieNames')

const CookieMatchPatternSchema = z
  .object({
    All: AllSchema.and(z.any().openapi({ description: 'Inspect all cookies. ' })).exactOptional(),
    IncludedCookies: CookieNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Inspect only the cookies that have a key that matches one of the strings specified here. ',
        }),
    ).exactOptional(),
    ExcludedCookies: CookieNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Inspect only the cookies whose keys don't match any of the strings specified here. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The filter to use to identify the subset of cookies to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p> <p>Example JSON: <code>"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }</code> </p>',
    required: [],
  })
  .openapi('CookieMatchPattern')

const CookiesSchema = z
  .object({
    MatchPattern: CookieMatchPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filter to use to identify the subset of cookies to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p> <p>Example JSON: <code>"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }</code> </p>',
        }),
    ),
    MatchScope: MapMatchScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parts of the cookies to inspect with the rule inspection criteria. If you specify <code>All</code>, WAF inspects both keys and values. ',
        }),
    ),
    OversizeHandling: OversizeHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What WAF should do if the cookies of the request are larger than WAF can inspect. WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to WAF. </p> <p>The options for oversize handling are the following:</p> <ul> <li> <p> <code>CONTINUE</code> - Inspect the cookies normally, according to the rule inspection criteria. </p> </li> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['MatchPattern', 'MatchScope', 'OversizeHandling'],
    description:
      '<p>Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p>',
  })
  .openapi('Cookies')

const FieldToMatchSchema = z
  .object({
    SingleHeader: SingleHeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Inspect a single header. Provide the name of the header to inspect, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn\'t case sensitive.</p> <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code> </p> <p>Alternately, you can filter and inspect all headers with the <code>Headers</code> <code>FieldToMatch</code> setting. </p>',
        }),
    ).exactOptional(),
    SingleQueryArgument: SingleQueryArgumentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Inspect a single query argument. Provide the name of the query argument to inspect, such as <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn\'t case sensitive. </p> <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code> </p>',
        }),
    ).exactOptional(),
    AllQueryArguments: AllQueryArgumentsSchema.and(
      z.any().openapi({ description: 'Inspect all query arguments. ' }),
    ).exactOptional(),
    UriPath: UriPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Inspect the request URI path. This is the part of the web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.',
        }),
    ).exactOptional(),
    QueryString: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Inspect the query string. This is the part of a URL that appears after a <code>?</code> character, if any.',
        }),
    ).exactOptional(),
    Body: BodySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Inspect the request body as plain text. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. </p> <p>A limited amount of the request body is forwarded to WAF for inspection by the underlying host service. For regional resources, the limit is 8 KB (8,192 kilobytes) and for CloudFront distributions, the limit is 16 KB (16,384 kilobytes). For CloudFront distributions, you can increase the limit in the web ACL's <code>AssociationConfig</code>, for additional processing fees. </p> <p>For information about how to handle oversized request bodies, see the <code>Body</code> object configuration. </p>",
        }),
    ).exactOptional(),
    Method: MethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. ',
        }),
    ).exactOptional(),
    JsonBody: JsonBodySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. </p> <p>A limited amount of the request body is forwarded to WAF for inspection by the underlying host service. For regional resources, the limit is 8 KB (8,192 kilobytes) and for CloudFront distributions, the limit is 16 KB (16,384 kilobytes). For CloudFront distributions, you can increase the limit in the web ACL's <code>AssociationConfig</code>, for additional processing fees. </p> <p>For information about how to handle oversized request bodies, see the <code>JsonBody</code> object configuration. </p>",
        }),
    ).exactOptional(),
    Headers: HeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Inspect the request headers. You must configure scope and pattern matching filters in the <code>Headers</code> object, to define the set of headers to and the parts of the headers that WAF inspects. </p> <p>Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the <code>Headers</code> object. WAF applies the pattern matching filters to the headers that it receives from the underlying host service. </p>",
        }),
    ).exactOptional(),
    Cookies: CookiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Inspect the request cookies. You must configure scope and pattern matching filters in the <code>Cookies</code> object, to define the set of cookies and the parts of the cookies that WAF inspects. </p> <p>Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the <code>Cookies</code> object. WAF applies the pattern matching filters to the cookies that it receives from the underlying host service. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The part of the web request that you want WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.</p> <p>Example JSON for a <code>QueryString</code> field to match: </p> <p> <code> "FieldToMatch": { "QueryString": {} }</code> </p> <p>Example JSON for a <code>Method</code> field to match specification:</p> <p> <code> "FieldToMatch": { "Method": { "Name": "DELETE" } }</code> </p>',
    required: [],
  })
  .openapi('FieldToMatch')

const TextTransformationPrioritySchema = z.int().min(0).openapi('TextTransformationPriority')

const TextTransformationTypeSchema = z
  .enum([
    'NONE',
    'COMPRESS_WHITE_SPACE',
    'HTML_ENTITY_DECODE',
    'LOWERCASE',
    'CMD_LINE',
    'URL_DECODE',
    'BASE64_DECODE',
    'HEX_DECODE',
    'MD5',
    'REPLACE_COMMENTS',
    'ESCAPE_SEQ_DECODE',
    'SQL_HEX_DECODE',
    'CSS_DECODE',
    'JS_DECODE',
    'NORMALIZE_PATH',
    'NORMALIZE_PATH_WIN',
    'REMOVE_NULLS',
    'REPLACE_NULLS',
    'BASE64_DECODE_EXT',
    'URL_DECODE_UNI',
    'UTF8_TO_UNICODE',
  ])
  .openapi('TextTransformationType')

const TextTransformationSchema = z
  .object({
    Priority: TextTransformationPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the relative processing order for multiple transformations that are defined for a rule statement. WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different. ",
        }),
    ),
    Type: TextTransformationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>You can specify the following transformation types:</p> <p> <b>BASE64_DECODE</b> - Decode a <code>Base64</code>-encoded string.</p> <p> <b>BASE64_DECODE_EXT</b> - Decode a <code>Base64</code>-encoded string, but use a forgiving implementation that ignores characters that aren't valid.</p> <p> <b>CMD_LINE</b> - Command-line transformations. These are helpful in reducing effectiveness of attackers who inject an operating system command-line command and use unusual formatting to disguise some or all of the command. </p> <ul> <li> <p>Delete the following characters: <code>\\ \" ' ^</code> </p> </li> <li> <p>Delete spaces before the following characters: <code>/ (</code> </p> </li> <li> <p>Replace the following characters with a space: <code>, ;</code> </p> </li> <li> <p>Replace multiple spaces with one space</p> </li> <li> <p>Convert uppercase letters (A-Z) to lowercase (a-z)</p> </li> </ul> <p> <b>COMPRESS_WHITE_SPACE</b> - Replace these characters with a space character (decimal 32): </p> <ul> <li> <p> <code>\\f</code>, formfeed, decimal 12</p> </li> <li> <p> <code>\\t</code>, tab, decimal 9</p> </li> <li> <p> <code>\\n</code>, newline, decimal 10</p> </li> <li> <p> <code>\\r</code>, carriage return, decimal 13</p> </li> <li> <p> <code>\\v</code>, vertical tab, decimal 11</p> </li> <li> <p>Non-breaking space, decimal 160</p> </li> </ul> <p> <code>COMPRESS_WHITE_SPACE</code> also replaces multiple spaces with one space.</p> <p> <b>CSS_DECODE</b> - Decode characters that were encoded using CSS 2.x escape rules <code>syndata.html#characters</code>. This function uses up to two bytes in the decoding process, so it can help to uncover ASCII characters that were encoded using CSS encoding that wouldn’t typically be encoded. It's also useful in countering evasion, which is a combination of a backslash and non-hexadecimal characters. For example, <code>ja\\vascript</code> for javascript. </p> <p> <b>ESCAPE_SEQ_DECODE</b> - Decode the following ANSI C escape sequences: <code>\\a</code>, <code>\\b</code>, <code>\\f</code>, <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, <code>\\v</code>, <code>\\\\</code>, <code>\\?</code>, <code>\\'</code>, <code>\\\"</code>, <code>\\xHH</code> (hexadecimal), <code>\\0OOO</code> (octal). Encodings that aren't valid remain in the output. </p> <p> <b>HEX_DECODE</b> - Decode a string of hexadecimal characters into a binary.</p> <p> <b>HTML_ENTITY_DECODE</b> - Replace HTML-encoded characters with unencoded characters. <code>HTML_ENTITY_DECODE</code> performs these operations: </p> <ul> <li> <p>Replaces <code>(ampersand)quot;</code> with <code>\"</code> </p> </li> <li> <p>Replaces <code>(ampersand)nbsp;</code> with a non-breaking space, decimal 160</p> </li> <li> <p>Replaces <code>(ampersand)lt;</code> with a \"less than\" symbol</p> </li> <li> <p>Replaces <code>(ampersand)gt;</code> with <code>&gt;</code> </p> </li> <li> <p>Replaces characters that are represented in hexadecimal format, <code>(ampersand)#xhhhh;</code>, with the corresponding characters</p> </li> <li> <p>Replaces characters that are represented in decimal format, <code>(ampersand)#nnnn;</code>, with the corresponding characters</p> </li> </ul> <p> <b>JS_DECODE</b> - Decode JavaScript escape sequences. If a <code>\\</code> <code>u</code> <code>HHHH</code> code is in the full-width ASCII code range of <code>FF01-FF5E</code>, then the higher byte is used to detect and adjust the lower byte. If not, only the lower byte is used and the higher byte is zeroed, causing a possible loss of information. </p> <p> <b>LOWERCASE</b> - Convert uppercase letters (A-Z) to lowercase (a-z). </p> <p> <b>MD5</b> - Calculate an MD5 hash from the data in the input. The computed hash is in a raw binary form. </p> <p> <b>NONE</b> - Specify <code>NONE</code> if you don't want any text transformations. </p> <p> <b>NORMALIZE_PATH</b> - Remove multiple slashes, directory self-references, and directory back-references that are not at the beginning of the input from an input string. </p> <p> <b>NORMALIZE_PATH_WIN</b> - This is the same as <code>NORMALIZE_PATH</code>, but first converts backslash characters to forward slashes. </p> <p> <b>REMOVE_NULLS</b> - Remove all <code>NULL</code> bytes from the input. </p> <p> <b>REPLACE_COMMENTS</b> - Replace each occurrence of a C-style comment (<code>/* ... */</code>) with a single space. Multiple consecutive occurrences are not compressed. Unterminated comments are also replaced with a space (ASCII 0x20). However, a standalone termination of a comment (<code>*/</code>) is not acted upon. </p> <p> <b>REPLACE_NULLS</b> - Replace NULL bytes in the input with space characters (ASCII <code>0x20</code>). </p> <p> <b>SQL_HEX_DECODE</b> - Decode SQL hex data. Example (<code>0x414243</code>) will be decoded to (<code>ABC</code>).</p> <p> <b>URL_DECODE</b> - Decode a URL-encoded value. </p> <p> <b>URL_DECODE_UNI</b> - Like <code>URL_DECODE</code>, but with support for Microsoft-specific <code>%u</code> encoding. If the code is in the full-width ASCII code range of <code>FF01-FF5E</code>, the higher byte is used to detect and adjust the lower byte. Otherwise, only the lower byte is used and the higher byte is zeroed. </p> <p> <b>UTF8_TO_UNICODE</b> - Convert all UTF-8 character sequences to Unicode. This helps input normalization, and minimizing false-positives and false-negatives for non-English languages.</p>",
        }),
    ),
  })
  .openapi({
    required: ['Priority', 'Type'],
    description:
      'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. ',
  })
  .openapi('TextTransformation')

const TextTransformationsSchema = z
  .array(TextTransformationSchema)
  .min(1)
  .openapi('TextTransformations')

const PositionalConstraintSchema = z
  .enum(['EXACTLY', 'STARTS_WITH', 'ENDS_WITH', 'CONTAINS', 'CONTAINS_WORD'])
  .openapi('PositionalConstraint')

type ByteMatchStatementType = {
  SearchString: z.infer<typeof SearchStringSchema> & { [key: string]: unknown }
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
  PositionalConstraint: z.infer<typeof PositionalConstraintSchema> & { [key: string]: unknown }
}

const ActionValueSchema = z
  .enum(['ALLOW', 'BLOCK', 'COUNT', 'CAPTCHA', 'CHALLENGE', 'EXCLUDED_AS_COUNT'])
  .openapi('ActionValue')

const ActionConditionSchema = z
  .object({
    Action: ActionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action setting that a log record must contain in order to meet the condition. This is the action that WAF applied to the web request. </p> <p>For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action. The value <code>EXCLUDED_AS_COUNT</code> matches on excluded rules and also on rules that have a rule action override of Count. </p>",
        }),
    ),
  })
  .openapi({
    required: ['Action'],
    description: 'A single action condition for a <a>Condition</a> in a logging filter.',
  })
  .openapi('ActionCondition')

const LabelNameSchema = z
  .string()
  .regex(/^[0-9A-Za-z_\-:]+$/)
  .min(1)
  .max(1024)
  .openapi('LabelName')

const LabelNameConditionSchema = z
  .object({
    LabelName: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. ',
        }),
    ),
  })
  .openapi({
    required: ['LabelName'],
    description: 'A single label name condition for a <a>Condition</a> in a logging filter.',
  })
  .openapi('LabelNameCondition')

type ConditionType = {
  ActionCondition?: z.infer<typeof ActionConditionSchema> & { [key: string]: unknown }
  LabelNameCondition?: z.infer<typeof LabelNameConditionSchema> & { [key: string]: unknown }
}

type EntityNameType = string

type VendorNameType = string

type VersionKeyStringType = string

const EntityNameSchema: z.ZodType<EntityNameType> = z
  .string()
  .regex(/^[\w\-]+$/)
  .min(1)
  .max(128)
  .openapi('EntityName')

const ExcludedRuleSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule whose action you want to override to <code>Count</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      '<p>Specifies a single rule in a rule group whose action you want to override to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note>',
  })
  .openapi('ExcludedRule')

type ExcludedRulesType = z.infer<typeof ExcludedRuleSchema>[]

const VendorNameSchema: z.ZodType<VendorNameType> = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('VendorName')

const VersionKeyStringSchema: z.ZodType<VersionKeyStringType> = z
  .string()
  .regex(/^[\w#:\.\-\/]+$/)
  .min(1)
  .max(64)
  .openapi('VersionKeyString')

const ExcludedRulesSchema: z.ZodType<ExcludedRulesType> = z
  .array(ExcludedRuleSchema)
  .max(100)
  .openapi('ExcludedRules')

const LoginPathStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('LoginPathString')

const PayloadTypeSchema = z.enum(['JSON', 'FORM_ENCODED']).openapi('PayloadType')

const FieldIdentifierSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(512)
  .openapi('FieldIdentifier')

const UsernameFieldSchema = z
  .object({
    Identifier: FieldIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the username field. For example <code>/form/username</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Identifier'],
    description:
      'Details about your login page username field for request inspection, used in the <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code> configuration.',
  })
  .openapi('UsernameField')

const PasswordFieldSchema = z
  .object({
    Identifier: FieldIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the password field. For example <code>/form/password</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Identifier'],
    description:
      'Details about your login page password field for request inspection, used in the <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code> configuration.',
  })
  .openapi('PasswordField')

const InspectionLevelSchema = z.enum(['COMMON', 'TARGETED']).openapi('InspectionLevel')

const AWSManagedRulesBotControlRuleSetSchema = z
  .object({
    InspectionLevel: InspectionLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inspection level to use for the Bot Control rule group. The common level is the least expensive. The targeted level includes all common level rules and adds rules with more advanced inspection criteria. For details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html">WAF Bot Control rule group</a> in the <i>WAF Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['InspectionLevel'],
    description:
      'Details for your use of the Bot Control managed rule group, <code>AWSManagedRulesBotControlRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>. ',
  })
  .openapi('AWSManagedRulesBotControlRuleSet')

const StringSchema = z.string().openapi('String')

const RequestInspectionSchema = z
  .object({
    PayloadType: PayloadTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The payload type for your login endpoint, either JSON or form encoded.',
        }),
    ),
    UsernameField: UsernameFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details about your login page username field. </p> <p>How you specify this depends on the payload type.</p> <ul> <li> <p>For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript Object Notation (JSON) Pointer</a>. </p> <p>For example, for the JSON payload <code>{ "login": { "username": "THE_USERNAME", "password": "THE_PASSWORD" } }</code>, the username field specification is <code>/login/username</code> and the password field specification is <code>/login/password</code>.</p> </li> <li> <p>For form encoded payload types, use the HTML form names.</p> <p>For example, for an HTML form with input elements named <code>username1</code> and <code>password1</code>, the username field specification is <code>username1</code> and the password field specification is <code>password1</code>.</p> </li> </ul>',
        }),
    ),
    PasswordField: PasswordFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details about your login page password field. </p> <p>How you specify this depends on the payload type.</p> <ul> <li> <p>For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript Object Notation (JSON) Pointer</a>. </p> <p>For example, for the JSON payload <code>{ "login": { "username": "THE_USERNAME", "password": "THE_PASSWORD" } }</code>, the username field specification is <code>/login/username</code> and the password field specification is <code>/login/password</code>.</p> </li> <li> <p>For form encoded payload types, use the HTML form names.</p> <p>For example, for an HTML form with input elements named <code>username1</code> and <code>password1</code>, the username field specification is <code>username1</code> and the password field specification is <code>password1</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['PayloadType', 'UsernameField', 'PasswordField'],
    description:
      '<p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided. </p>',
  })
  .openapi('RequestInspection')

const SuccessCodeSchema = z.int().min(0).max(999).openapi('SuccessCode')

const ResponseInspectionStatusCodeSuccessCodesSchema = z
  .array(SuccessCodeSchema)
  .min(1)
  .max(10)
  .openapi('ResponseInspectionStatusCodeSuccessCodes')

const FailureCodeSchema = z.int().min(0).max(999).openapi('FailureCode')

const ResponseInspectionStatusCodeFailureCodesSchema = z
  .array(FailureCodeSchema)
  .min(1)
  .max(10)
  .openapi('ResponseInspectionStatusCodeFailureCodes')

const ResponseInspectionStatusCodeSchema = z
  .object({
    SuccessCodes: ResponseInspectionStatusCodeSuccessCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Status codes in the response that indicate a successful login attempt. To be counted as a successful login, the response status code must match one of these. Each code must be unique among the success and failure status codes. </p> <p>JSON example: <code>"SuccessCodes": [ 200, 201 ]</code> </p>',
        }),
    ),
    FailureCodes: ResponseInspectionStatusCodeFailureCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Status codes in the response that indicate a failed login attempt. To be counted as a failed login, the response status code must match one of these. Each code must be unique among the success and failure status codes. </p> <p>JSON example: <code>"FailureCodes": [ 400, 404 ]</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['SuccessCodes', 'FailureCodes'],
    description:
      '<p>Configures inspection of the response status code. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>',
  })
  .openapi('ResponseInspectionStatusCode')

const ResponseInspectionHeaderNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(200)
  .openapi('ResponseInspectionHeaderName')

const SuccessValueSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(100)
  .openapi('SuccessValue')

const ResponseInspectionHeaderSuccessValuesSchema = z
  .array(SuccessValueSchema)
  .min(1)
  .max(3)
  .openapi('ResponseInspectionHeaderSuccessValues')

const FailureValueSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(100)
  .openapi('FailureValue')

const ResponseInspectionHeaderFailureValuesSchema = z
  .array(FailureValueSchema)
  .min(1)
  .max(3)
  .openapi('ResponseInspectionHeaderFailureValues')

const ResponseInspectionHeaderSchema = z
  .object({
    Name: ResponseInspectionHeaderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the header to match against. The name must be an exact match, including case.</p> <p>JSON example: <code>"Name": [ "LoginResult" ]</code> </p>',
        }),
    ),
    SuccessValues: ResponseInspectionHeaderSuccessValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Values in the response header with the specified name that indicate a successful login attempt. To be counted as a successful login, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p> <p>JSON example: <code>"SuccessValues": [ "LoginPassed", "Successful login" ]</code> </p>',
        }),
    ),
    FailureValues: ResponseInspectionHeaderFailureValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Values in the response header with the specified name that indicate a failed login attempt. To be counted as a failed login, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p> <p>JSON example: <code>"FailureValues": [ "LoginFailed", "Failed login" ]</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'SuccessValues', 'FailureValues'],
    description:
      '<p>Configures inspection of the response header. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>',
  })
  .openapi('ResponseInspectionHeader')

const ResponseInspectionBodyContainsSuccessStringsSchema = z
  .array(SuccessValueSchema)
  .min(1)
  .max(5)
  .openapi('ResponseInspectionBodyContainsSuccessStrings')

const ResponseInspectionBodyContainsFailureStringsSchema = z
  .array(FailureValueSchema)
  .min(1)
  .max(5)
  .openapi('ResponseInspectionBodyContainsFailureStrings')

const ResponseInspectionBodyContainsSchema = z
  .object({
    SuccessStrings: ResponseInspectionBodyContainsSuccessStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Strings in the body of the response that indicate a successful login attempt. To be counted as a successful login, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings. </p> <p>JSON example: <code>"SuccessStrings": [ "Login successful", "Welcome to our site!" ]</code> </p>',
        }),
    ),
    FailureStrings: ResponseInspectionBodyContainsFailureStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Strings in the body of the response that indicate a failed login attempt. To be counted as a failed login, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings. </p> <p>JSON example: <code>"FailureStrings": [ "Login failed" ]</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['SuccessStrings', 'FailureStrings'],
    description:
      '<p>Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>',
  })
  .openapi('ResponseInspectionBodyContains')

const ResponseInspectionJsonSuccessValuesSchema = z
  .array(SuccessValueSchema)
  .min(1)
  .max(5)
  .openapi('ResponseInspectionJsonSuccessValues')

const ResponseInspectionJsonFailureValuesSchema = z
  .array(FailureValueSchema)
  .min(1)
  .max(5)
  .openapi('ResponseInspectionJsonFailureValues')

const ResponseInspectionJsonSchema = z
  .object({
    Identifier: FieldIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the value to match against in the JSON. The identifier must be an exact match, including case.</p> <p>JSON example: <code>"Identifier": [ "/login/success" ]</code> </p>',
        }),
    ),
    SuccessValues: ResponseInspectionJsonSuccessValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Values for the specified identifier in the response JSON that indicate a successful login attempt. To be counted as a successful login, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p> <p>JSON example: <code>"SuccessValues": [ "True", "Succeeded" ]</code> </p>',
        }),
    ),
    FailureValues: ResponseInspectionJsonFailureValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Values for the specified identifier in the response JSON that indicate a failed login attempt. To be counted as a failed login, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p> <p>JSON example: <code>"FailureValues": [ "False", "Failed" ]</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['Identifier', 'SuccessValues', 'FailureValues'],
    description:
      '<p>Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>',
  })
  .openapi('ResponseInspectionJson')

const ResponseInspectionSchema = z
  .object({
    StatusCode: ResponseInspectionStatusCodeSchema.and(
      z.any().openapi({ description: 'Configures inspection of the response status code. ' }),
    ).exactOptional(),
    Header: ResponseInspectionHeaderSchema.and(
      z.any().openapi({ description: 'Configures inspection of the response header. ' }),
    ).exactOptional(),
    BodyContains: ResponseInspectionBodyContainsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. ',
        }),
    ).exactOptional(),
    Json: ResponseInspectionJsonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. </p> <p>The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that submit too many failed login attempts in a short amount of time. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>Enable login response inspection by configuring exactly one component of the response to inspect. You can't configure more than one. If you don't configure any of the response inspection options, response inspection is disabled. </p>",
    required: [],
  })
  .openapi('ResponseInspection')

const AWSManagedRulesATPRuleSetSchema = z
  .object({
    LoginPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path of the login endpoint for your application. For example, for the URL <code>https://example.com/web/login</code>, you would provide the path <code>/web/login</code>.</p> <p>The rule group inspects only HTTP <code>POST</code> requests to your specified login endpoint.</p>',
        }),
    ),
    RequestInspection: RequestInspectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. ',
        }),
    ).exactOptional(),
    ResponseInspection: ResponseInspectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. </p> <p>The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that submit too many failed login attempts in a short amount of time. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LoginPath'],
    description:
      'Details for your use of the account takeover prevention managed rule group, <code>AWSManagedRulesATPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>. ',
  })
  .openapi('AWSManagedRulesATPRuleSet')

const ManagedRuleGroupConfigSchema = z
  .object({
    LoginPath: LoginPathStringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<note> <p>Instead of this setting, provide your configuration under <code>AWSManagedRulesATPRuleSet</code>. </p> </note>Deprecated. Use AWSManagedRulesATPRuleSet LoginPath',
        }),
    ).exactOptional(),
    PayloadType: PayloadTypeSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<note> <p>Instead of this setting, provide your configuration under <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code>. </p> </note>Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PayloadType',
        }),
    ).exactOptional(),
    UsernameField: UsernameFieldSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<note> <p>Instead of this setting, provide your configuration under <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code>. </p> </note>Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection UsernameField',
        }),
    ).exactOptional(),
    PasswordField: PasswordFieldSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<note> <p>Instead of this setting, provide your configuration under <code>AWSManagedRulesATPRuleSet</code> <code>RequestInspection</code>. </p> </note>Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PasswordField',
        }),
    ).exactOptional(),
    AWSManagedRulesBotControlRuleSet: AWSManagedRulesBotControlRuleSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. For information about using the Bot Control managed rule group, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html">WAF Bot Control rule group</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html">WAF Bot Control</a> in the <i>WAF Developer Guide</i>.',
        }),
    ).exactOptional(),
    AWSManagedRulesATPRuleSet: AWSManagedRulesATPRuleSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Additional configuration for using the account takeover prevention (ATP) managed rule group, <code>AWSManagedRulesATPRuleSet</code>. Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to login requests. </p> <p>This configuration replaces the individual configuration fields in <code>ManagedRuleGroupConfig</code> and provides additional feature configuration. </p> <p>For information about using the ATP managed rule group, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html">WAF Fraud Control account takeover prevention (ATP) rule group</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html">WAF Fraud Control account takeover prevention (ATP)</a> in the <i>WAF Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p> <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object for the account takeover prevention managed rule group, to provide information such as the sign-in page of your application and the type of content to accept or reject from the client. </p> <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the protection level that you want the Bot Control rule group to use. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>",
    required: [],
  })
  .openapi('ManagedRuleGroupConfig')

type ManagedRuleGroupConfigsType = z.infer<typeof ManagedRuleGroupConfigSchema>[]

const ManagedRuleGroupConfigsSchema: z.ZodType<ManagedRuleGroupConfigsType> = z
  .array(ManagedRuleGroupConfigSchema)
  .openapi('ManagedRuleGroupConfigs')

const ResponseStatusCodeSchema = z.int().min(200).max(599).openapi('ResponseStatusCode')

const CustomHTTPHeaderNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._$-]+$/)
  .min(1)
  .max(64)
  .openapi('CustomHTTPHeaderName')

const CustomHTTPHeaderValueSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(255)
  .openapi('CustomHTTPHeaderValue')

const CustomHTTPHeaderSchema = z
  .object({
    Name: CustomHTTPHeaderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the custom header. </p> <p>For custom request header insertion, when WAF inserts the header into the request, it prefixes this name <code>x-amzn-waf-</code>, to avoid confusion with the headers that are already in the request. For example, for the header name <code>sample</code>, WAF inserts the header <code>x-amzn-waf-sample</code>.</p>',
        }),
    ),
    Value: CustomHTTPHeaderValueSchema.and(
      z.any().openapi({ description: 'The value of the custom header.' }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>.',
  })
  .openapi('CustomHTTPHeader')

const CustomHTTPHeadersSchema = z.array(CustomHTTPHeaderSchema).min(1).openapi('CustomHTTPHeaders')

const CustomResponseSchema = z
  .object({
    ResponseCode: ResponseStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The HTTP status code to return to the client. </p> <p>For a list of status codes that you can use in your custom responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ),
    CustomResponseBodyKey: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the <code>CustomResponseBodies</code> setting for the <a>WebACL</a> or <a>RuleGroup</a> where you want to use it. Then, in the rule action or web ACL default action <code>BlockAction</code> setting, you reference the response body using this key. ',
        }),
    ).exactOptional(),
    ResponseHeaders: CustomHTTPHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The HTTP headers to use in the response. Duplicate header names are not allowed. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResponseCode'],
    description:
      '<p>A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to <a>BlockAction</a>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
  })
  .openapi('CustomResponse')

const BlockActionSchema = z
  .object({
    CustomResponse: CustomResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines a custom response for the web request.</p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>',
    required: [],
  })
  .openapi('BlockAction')

const CustomRequestHandlingSchema = z
  .object({
    InsertHeaders: CustomHTTPHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The HTTP headers to insert into the request. Duplicate header names are not allowed. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['InsertHeaders'],
    description:
      '<p>Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for WAF to use when the rule action doesn\'t block the request. For example, <code>CaptchaAction</code> for requests with valid t okens, and <code>AllowAction</code>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
  })
  .openapi('CustomRequestHandling')

const AllowActionSchema = z
  .object({
    CustomRequestHandling: CustomRequestHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines custom handling for the web request.</p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies that WAF should allow the request and optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>',
    required: [],
  })
  .openapi('AllowAction')

const CountActionSchema = z
  .object({
    CustomRequestHandling: CustomRequestHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines custom handling for the web request.</p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies that WAF should count the request. Optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>',
    required: [],
  })
  .openapi('CountAction')

const CaptchaActionSchema = z
  .object({
    CustomRequestHandling: CustomRequestHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines custom handling for the web request, used when the <code>CAPTCHA</code> inspection determines that the request\'s token is valid and unexpired.</p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Specifies that WAF should run a <code>CAPTCHA</code> check against the request: </p> <ul> <li> <p>If the request includes a valid, unexpired <code>CAPTCHA</code> token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF generates a response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>captcha</code>. </p> </li> <li> <p>The HTTP status code <code>405 Method Not Allowed</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a <code>CAPTCHA</code> JavaScript page interstitial. </p> </li> </ul> </li> </ul> <p>You can configure the expiration time in the <code>CaptchaConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p>",
    required: [],
  })
  .openapi('CaptchaAction')

const ChallengeActionSchema = z
  .object({
    CustomRequestHandling: CustomRequestHandlingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines custom handling for the web request, used when the challenge inspection determines that the request\'s token is valid and unexpired.</p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Specifies that WAF should run a <code>Challenge</code> check against the request to verify that the request is coming from a legitimate client session: </p> <ul> <li> <p>If the request includes a valid, unexpired challenge token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired challenge token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF then generates a challenge response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>challenge</code>. </p> </li> <li> <p>The HTTP status code <code>202 Request Accepted</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a JavaScript page interstitial with a challenge script. </p> </li> </ul> <p>Challenges run silent browser interrogations in the background, and don't generally affect the end user experience. </p> <p>A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots. </p> <p>After the client session successfully responds to the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request. </p> </li> </ul> <p>You can configure the expiration time in the <code>ChallengeConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p>",
    required: [],
  })
  .openapi('ChallengeAction')

const RuleActionSchema = z
  .object({
    Block: BlockActionSchema.and(
      z.any().openapi({ description: 'Instructs WAF to block the web request.' }),
    ).exactOptional(),
    Allow: AllowActionSchema.and(
      z.any().openapi({ description: 'Instructs WAF to allow the web request.' }),
    ).exactOptional(),
    Count: CountActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.',
        }),
    ).exactOptional(),
    Captcha: CaptchaActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Instructs WAF to run a <code>CAPTCHA</code> check against the web request.',
        }),
    ).exactOptional(),
    Challenge: ChallengeActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Instructs WAF to run a <code>Challenge</code> check against the web request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. ",
    required: [],
  })
  .openapi('RuleAction')

const RuleActionOverrideSchema = z
  .object({
    Name: EntityNameSchema.and(
      z.any().openapi({ description: 'The name of the rule to override.' }),
    ),
    ActionToUse: RuleActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The override action to use, in place of the configured action of the rule in the rule group. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'ActionToUse'],
    description:
      '<p>Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>',
  })
  .openapi('RuleActionOverride')

type RuleActionOverridesType = z.infer<typeof RuleActionOverrideSchema>[]

const RuleActionOverridesSchema: z.ZodType<RuleActionOverridesType> = z
  .array(RuleActionOverrideSchema)
  .min(1)
  .max(100)
  .openapi('RuleActionOverrides')

type ManagedRuleGroupStatementType = {
  VendorName: z.infer<typeof VendorNameSchema> & { [key: string]: unknown }
  Name: z.infer<typeof EntityNameSchema> & { [key: string]: unknown }
  Version?: z.infer<typeof VersionKeyStringSchema> & { [key: string]: unknown }
  ExcludedRules?: z.infer<typeof ExcludedRulesSchema> & { [key: string]: unknown }
  ScopeDownStatement?: z.infer<typeof StatementSchema> & { [key: string]: unknown }
  ManagedRuleGroupConfigs?: z.infer<typeof ManagedRuleGroupConfigsSchema> & {
    [key: string]: unknown
  }
  RuleActionOverrides?: z.infer<typeof RuleActionOverridesSchema> & { [key: string]: unknown }
}

const ResourceArnSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(20)
  .max(2048)
  .openapi('ResourceArn')

type RuleGroupReferenceStatementType = {
  ARN: z.infer<typeof ResourceArnSchema> & { [key: string]: unknown }
  ExcludedRules?: z.infer<typeof ExcludedRulesSchema> & { [key: string]: unknown }
  RuleActionOverrides?: z.infer<typeof RuleActionOverridesSchema> & { [key: string]: unknown }
}

const ForwardedIPHeaderNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(255)
  .openapi('ForwardedIPHeaderName')

const FallbackBehaviorSchema = z.enum(['MATCH', 'NO_MATCH']).openapi('FallbackBehavior')

type ForwardedIPConfigType = {
  HeaderName: z.infer<typeof ForwardedIPHeaderNameSchema> & { [key: string]: unknown }
  FallbackBehavior: z.infer<typeof FallbackBehaviorSchema> & { [key: string]: unknown }
}

const CountryCodeSchema = z
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
    'XK',
  ])
  .openapi('CountryCode')

const CountryCodesSchema = z.array(CountryCodeSchema).min(1).openapi('CountryCodes')

const ForwardedIPConfigSchema: z.ZodType<ForwardedIPConfigType> = z
  .object({
    HeaderName: ForwardedIPHeaderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note>",
        }),
    ),
    FallbackBehavior: FallbackBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>You can specify the following fallback behaviors:</p> <ul> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['HeaderName', 'FallbackBehavior'],
    description:
      "<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p> <p>WAF only evaluates the first IP address found in the specified HTTP header. </p>",
  })
  .openapi('ForwardedIPConfig')

type GeoMatchStatementType = {
  CountryCodes?: z.infer<typeof CountryCodesSchema> & { [key: string]: unknown }
  ForwardedIPConfig?: z.infer<typeof ForwardedIPConfigSchema> & { [key: string]: unknown }
}

const ForwardedIPPositionSchema = z.enum(['FIRST', 'LAST', 'ANY']).openapi('ForwardedIPPosition')

const IPSetForwardedIPConfigSchema = z
  .object({
    HeaderName: ForwardedIPHeaderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note>",
        }),
    ),
    FallbackBehavior: FallbackBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>You can specify the following fallback behaviors:</p> <ul> <li> <p> <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p> </li> <li> <p> <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p> </li> </ul>",
        }),
    ),
    Position: ForwardedIPPositionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be <code>10.1.1.1, 127.0.0.0, 10.10.10.10</code> where the first IP address identifies the original client and the rest identify proxies that the request went through. </p> <p>The options for this setting are the following: </p> <ul> <li> <p>FIRST - Inspect the first IP address in the list of IP addresses in the header. This is usually the client's original IP.</p> </li> <li> <p>LAST - Inspect the last IP address in the list of IP addresses in the header.</p> </li> <li> <p>ANY - Inspect all IP addresses in the header for a match. If the header contains more than 10 IP addresses, WAF inspects the last 10.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['HeaderName', 'FallbackBehavior', 'Position'],
    description:
      "<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p>",
  })
  .openapi('IPSetForwardedIPConfig')

type IPSetReferenceStatementType = {
  ARN: z.infer<typeof ResourceArnSchema> & { [key: string]: unknown }
  IPSetForwardedIPConfig?: z.infer<typeof IPSetForwardedIPConfigSchema> & { [key: string]: unknown }
}

const LabelMatchScopeSchema = z.enum(['LABEL', 'NAMESPACE']).openapi('LabelMatchScope')

const LabelMatchKeySchema = z
  .string()
  .regex(/^[0-9A-Za-z_\-:]+$/)
  .min(1)
  .max(1024)
  .openapi('LabelMatchKey')

type LabelMatchStatementType = {
  Scope: z.infer<typeof LabelMatchScopeSchema> & { [key: string]: unknown }
  Key: z.infer<typeof LabelMatchKeySchema> & { [key: string]: unknown }
}

const ByteMatchStatementSchema: z.ZodType<ByteMatchStatementType> = z
  .object({
    SearchString: SearchStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A string value that you want WAF to search for. WAF searches only in the part of web requests that you designate for inspection in <a>FieldToMatch</a>. The maximum length of the value is 200 bytes.</p> <p>Valid values depend on the component that you specify for inspection in <code>FieldToMatch</code>:</p> <ul> <li> <p> <code>Method</code>: The HTTP method that you want WAF to search for. This indicates the type of operation specified in the request. </p> </li> <li> <p> <code>UriPath</code>: The value that you want WAF to search for in the URI path, for example, <code>/images/daily-ad.jpg</code>. </p> </li> </ul> <p>If <code>SearchString</code> includes alphabetic characters A-Z and a-z, note that the value is case sensitive.</p> <p> <b>If you're using the WAF API</b> </p> <p>Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 200 bytes.</p> <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the value of <code>Data</code> is <code>User-Agent</code>. If you want to search the <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode <code>BadBot</code> using MIME base64-encoding and include the resulting value, <code>QmFkQm90</code>, in the value of <code>SearchString</code>.</p> <p> <b>If you're using the CLI or one of the Amazon Web Services SDKs</b> </p> <p>The value that you want WAF to search for. The SDK automatically base64 encodes the value.</p>",
        }),
    ),
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
    PositionalConstraint: PositionalConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The area within the portion of the web request that you want WAF to search for <code>SearchString</code>. Valid values include the following:</p> <p> <b>CONTAINS</b> </p> <p>The specified part of the web request must include the value of <code>SearchString</code>, but the location doesn't matter.</p> <p> <b>CONTAINS_WORD</b> </p> <p>The specified part of the web request must include the value of <code>SearchString</code>, and <code>SearchString</code> must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, <code>SearchString</code> must be a word, which means that both of the following are true:</p> <ul> <li> <p> <code>SearchString</code> is at the beginning of the specified part of the web request or is preceded by a character other than an alphanumeric character or underscore (_). Examples include the value of a header and <code>;BadBot</code>.</p> </li> <li> <p> <code>SearchString</code> is at the end of the specified part of the web request or is followed by a character other than an alphanumeric character or underscore (_), for example, <code>BadBot;</code> and <code>-BadBot;</code>.</p> </li> </ul> <p> <b>EXACTLY</b> </p> <p>The value of the specified part of the web request must exactly match the value of <code>SearchString</code>.</p> <p> <b>STARTS_WITH</b> </p> <p>The value of <code>SearchString</code> must appear at the beginning of the specified part of the web request.</p> <p> <b>ENDS_WITH</b> </p> <p>The value of <code>SearchString</code> must appear at the end of the specified part of the web request.</p>",
        }),
    ),
  })
  .openapi({
    required: ['SearchString', 'FieldToMatch', 'TextTransformations', 'PositionalConstraint'],
    description:
      'A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.',
  })
  .openapi('ByteMatchStatement')

const SensitivityLevelSchema = z.enum(['LOW', 'HIGH']).openapi('SensitivityLevel')

type SqliMatchStatementType = {
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
  SensitivityLevel?: z.infer<typeof SensitivityLevelSchema> & { [key: string]: unknown }
}

const SqliMatchStatementSchema: z.ZodType<SqliMatchStatementType> = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
    SensitivityLevel: SensitivityLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sensitivity that you want WAF to use to inspect for SQL injection attacks. </p> <p> <code>HIGH</code> detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html">Testing and tuning</a> in the <i>WAF Developer Guide</i>.</p> <p> <code>LOW</code> is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives. </p> <p>Default: <code>LOW</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformations'],
    description:
      'A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it. ',
  })
  .openapi('SqliMatchStatement')

type XssMatchStatementType = {
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
}

const XssMatchStatementSchema: z.ZodType<XssMatchStatementType> = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'TextTransformations'],
    description:
      'A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. ',
  })
  .openapi('XssMatchStatement')

const ComparisonOperatorSchema = z
  .enum(['EQ', 'NE', 'LE', 'LT', 'GE', 'GT'])
  .openapi('ComparisonOperator')

const SizeSchema = z.int().min(0).max(21474836480).openapi('Size')

type SizeConstraintStatementType = {
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  ComparisonOperator: z.infer<typeof ComparisonOperatorSchema> & { [key: string]: unknown }
  Size: z.infer<typeof SizeSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
}

const SizeConstraintStatementSchema: z.ZodType<SizeConstraintStatementType> = z
  .object({
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description: 'The operator to use to compare the request part to the size setting. ',
        }),
    ),
    Size: SizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size, in byte, to compare to the request part, after any transformations.',
        }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
  })
  .openapi({
    required: ['FieldToMatch', 'ComparisonOperator', 'Size', 'TextTransformations'],
    description:
      '<p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 kilobytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 kilobytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>',
  })
  .openapi('SizeConstraintStatement')

const GeoMatchStatementSchema: z.ZodType<GeoMatchStatementType> = z
  .object({
    CountryCodes: CountryCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of two-character country codes that you want to match against, for example, <code>[ "US", "CN" ]</code>, from the alpha-2 country ISO codes of the ISO 3166 international standard. </p> <p>When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that\'s unlikely to be a source of traffic to your site.</p>',
        }),
    ).exactOptional(),
    ForwardedIPConfig: ForwardedIPConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p> <ul> <li> <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p> </li> <li> <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p> </li> </ul> <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p> <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:clientip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:forwardedip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>',
    required: [],
  })
  .openapi('GeoMatchStatement')

const RuleGroupReferenceStatementSchema: z.ZodType<RuleGroupReferenceStatementType> = z
  .object({
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ),
    ExcludedRules: ExcludedRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Rules in the referenced rule group whose actions are set to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note>',
        }),
    ).exactOptional(),
    RuleActionOverrides: RuleActionOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ARN'],
    description:
      '<p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You can only use a rule group reference statement at the top level inside a web ACL. </p>',
  })
  .openapi('RuleGroupReferenceStatement')

const IPSetReferenceStatementSchema: z.ZodType<IPSetReferenceStatementType> = z
  .object({
    ARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a>IPSet</a> that this statement references.',
        }),
    ),
    IPSetForwardedIPConfig: IPSetForwardedIPConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ARN'],
    description:
      '<p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>',
  })
  .openapi('IPSetReferenceStatement')

type RegexPatternSetReferenceStatementType = {
  ARN: z.infer<typeof ResourceArnSchema> & { [key: string]: unknown }
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
}

const RegexPatternSetReferenceStatementSchema: z.ZodType<RegexPatternSetReferenceStatementType> = z
  .object({
    ARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a>RegexPatternSet</a> that this statement references.',
        }),
    ),
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
  })
  .openapi({
    required: ['ARN', 'FieldToMatch', 'TextTransformations'],
    description:
      '<p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>',
  })
  .openapi('RegexPatternSetReferenceStatement')

const RateBasedStatementSchema: z.ZodType<RateBasedStatementType> = z
  .lazy(() =>
    z
      .object({
        Limit: RateLimitSchema.and(
          z
            .any()
            .openapi({
              description:
                'The limit on requests per 5-minute period for a single originating IP address. If the statement includes a <code>ScopeDownStatement</code>, this limit is applied only to the requests that match the statement.',
            }),
        ),
        AggregateKeyType: RateBasedStatementAggregateKeyTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Setting that indicates how to aggregate the request counts. The options are the following:</p> <ul> <li> <p>IP - Aggregate the request counts on the IP address from the web request origin.</p> </li> <li> <p>FORWARDED_IP - Aggregate the request counts on the first IP address in an HTTP header. If you use this, configure the <code>ForwardedIPConfig</code>, to specify the header to use. </p> </li> </ul>',
            }),
        ),
        ScopeDownStatement: StatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'An optional nested statement that narrows the scope of the web requests that are evaluated by the rate-based statement. Requests are only tracked by the rate-based statement if they match the scope-down statement. You can use any nestable <a>Statement</a> in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement. ',
            }),
        ).exactOptional(),
        ForwardedIPConfig: ForwardedIPConfigSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This is required if <code>AggregateKeyType</code> is set to <code>FORWARDED_IP</code>.</p>",
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['Limit', 'AggregateKeyType'],
        description:
          '<p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests. </p> <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p> <p>When the rule action triggers, WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specifies the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet the criteria of both of the nested statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet the criteria of both of the nested statements are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>',
      }),
  )
  .openapi('RateBasedStatement')

const AndStatementSchema: z.ZodType<AndStatementType> = z
  .lazy(() =>
    z
      .object({
        Statements: StatementsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The statements to combine with AND logic. You can use any statements that can be nested. ',
            }),
        ),
      })
      .openapi({
        required: ['Statements'],
        description:
          'A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. ',
      }),
  )
  .openapi('AndStatement')

const OrStatementSchema: z.ZodType<OrStatementType> = z
  .lazy(() =>
    z
      .object({
        Statements: StatementsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The statements to combine with OR logic. You can use any statements that can be nested.',
            }),
        ),
      })
      .openapi({
        required: ['Statements'],
        description:
          'A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. ',
      }),
  )
  .openapi('OrStatement')

const NotStatementSchema: z.ZodType<NotStatementType> = z
  .lazy(() =>
    z
      .object({
        Statement: StatementSchema.and(
          z
            .any()
            .openapi({
              description: 'The statement to negate. You can use any statement that can be nested.',
            }),
        ),
      })
      .openapi({
        required: ['Statement'],
        description:
          'A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.',
      }),
  )
  .openapi('NotStatement')

const ManagedRuleGroupStatementSchema: z.ZodType<ManagedRuleGroupStatementType> = z
  .lazy(() =>
    z
      .object({
        VendorName: VendorNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.',
            }),
        ),
        Name: EntityNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.',
            }),
        ),
        Version: VersionKeyStringSchema.and(
          z
            .any()
            .openapi({
              description:
                "The version of the managed rule group to use. If you specify this, the version setting is fixed until you change it. If you don't specify this, WAF uses the vendor's default version, and then keeps the version at the vendor's default when the vendor updates the managed rule group settings. ",
            }),
        ).exactOptional(),
        ExcludedRules: ExcludedRulesSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Rules in the referenced rule group whose actions are set to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note>',
            }),
        ).exactOptional(),
        ScopeDownStatement: StatementSchema.and(
          z
            .any()
            .openapi({
              description:
                'An optional nested statement that narrows the scope of the web requests that are evaluated by the managed rule group. Requests are only evaluated by the rule group if they match the scope-down statement. You can use any nestable <a>Statement</a> in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement. ',
            }),
        ).exactOptional(),
        ManagedRuleGroupConfigs: ManagedRuleGroupConfigsSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p> <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object for the account takeover prevention managed rule group, to provide information such as the sign-in page of your application and the type of content to accept or reject from the client. </p> <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the protection level that you want the Bot Control rule group to use. </p>",
            }),
        ).exactOptional(),
        RuleActionOverrides: RuleActionOverridesSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['VendorName', 'Name'],
        description:
          '<p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> <note> <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code> or the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
      }),
  )
  .openapi('ManagedRuleGroupStatement')

const LabelMatchStatementSchema: z.ZodType<LabelMatchStatementType> = z
  .object({
    Scope: LabelMatchScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether you want to match using the label name or just the namespace. ',
        }),
    ),
    Key: LabelMatchKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The string to match against. The setting you provide for this depends on the match statement's <code>Scope</code> setting: </p> <ul> <li> <p>If the <code>Scope</code> indicates <code>LABEL</code>, then this specification must include the name and can include any number of preceding namespace specifications and prefix up to providing the fully qualified label name. </p> </li> <li> <p>If the <code>Scope</code> indicates <code>NAMESPACE</code>, then this specification can include any number of contiguous namespace strings, and can include the entire label namespace prefix from the rule group or web ACL where the label originates.</p> </li> </ul> <p>Labels are case sensitive and components of a label must be separated by colon, for example <code>NS1:NS2:name</code>.</p>",
        }),
    ),
  })
  .openapi({
    required: ['Scope', 'Key'],
    description:
      '<p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p> <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>',
  })
  .openapi('LabelMatchStatement')

const RegexPatternStringSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(512)
  .openapi('RegexPatternString')

type RegexMatchStatementType = {
  RegexString: z.infer<typeof RegexPatternStringSchema> & { [key: string]: unknown }
  FieldToMatch: z.infer<typeof FieldToMatchSchema> & { [key: string]: unknown }
  TextTransformations: z.infer<typeof TextTransformationsSchema> & { [key: string]: unknown }
}

const RegexMatchStatementSchema: z.ZodType<RegexMatchStatementType> = z
  .object({
    RegexString: RegexPatternStringSchema.and(
      z.any().openapi({ description: 'The string representing the regular expression.' }),
    ),
    FieldToMatch: FieldToMatchSchema.and(
      z
        .any()
        .openapi({ description: 'The part of the web request that you want WAF to inspect. ' }),
    ),
    TextTransformations: TextTransformationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, WAF performs all transformations on the content of the request component identified by <code>FieldToMatch</code>, starting from the lowest priority setting, before inspecting the content for a match.',
        }),
    ),
  })
  .openapi({
    required: ['RegexString', 'FieldToMatch', 'TextTransformations'],
    description:
      'A rule statement used to search web request components for a match against a single regular expression. ',
  })
  .openapi('RegexMatchStatement')

type StatementType = {
  ByteMatchStatement?: z.infer<typeof ByteMatchStatementSchema> & { [key: string]: unknown }
  SqliMatchStatement?: z.infer<typeof SqliMatchStatementSchema> & { [key: string]: unknown }
  XssMatchStatement?: z.infer<typeof XssMatchStatementSchema> & { [key: string]: unknown }
  SizeConstraintStatement?: z.infer<typeof SizeConstraintStatementSchema> & {
    [key: string]: unknown
  }
  GeoMatchStatement?: z.infer<typeof GeoMatchStatementSchema> & { [key: string]: unknown }
  RuleGroupReferenceStatement?: z.infer<typeof RuleGroupReferenceStatementSchema> & {
    [key: string]: unknown
  }
  IPSetReferenceStatement?: z.infer<typeof IPSetReferenceStatementSchema> & {
    [key: string]: unknown
  }
  RegexPatternSetReferenceStatement?: z.infer<typeof RegexPatternSetReferenceStatementSchema> & {
    [key: string]: unknown
  }
  RateBasedStatement?: z.infer<typeof RateBasedStatementSchema> & { [key: string]: unknown }
  AndStatement?: z.infer<typeof AndStatementSchema> & { [key: string]: unknown }
  OrStatement?: z.infer<typeof OrStatementSchema> & { [key: string]: unknown }
  NotStatement?: z.infer<typeof NotStatementSchema> & { [key: string]: unknown }
  ManagedRuleGroupStatement?: z.infer<typeof ManagedRuleGroupStatementSchema> & {
    [key: string]: unknown
  }
  LabelMatchStatement?: z.infer<typeof LabelMatchStatementSchema> & { [key: string]: unknown }
  RegexMatchStatement?: z.infer<typeof RegexMatchStatementSchema> & { [key: string]: unknown }
}

type NotStatementType = { Statement: z.infer<typeof StatementSchema> & { [key: string]: unknown } }

type OrStatementType = { Statements: z.infer<typeof StatementsSchema> & { [key: string]: unknown } }

type RateLimitType = number

type RateBasedStatementAggregateKeyTypeType = 'IP' | 'FORWARDED_IP'

const RateLimitSchema: z.ZodType<RateLimitType> = z
  .int()
  .min(100)
  .max(2000000000)
  .openapi('RateLimit')

const RateBasedStatementAggregateKeyTypeSchema: z.ZodType<RateBasedStatementAggregateKeyTypeType> =
  z.enum(['IP', 'FORWARDED_IP']).openapi('RateBasedStatementAggregateKeyType')

type RateBasedStatementType = {
  Limit: z.infer<typeof RateLimitSchema> & { [key: string]: unknown }
  AggregateKeyType: z.infer<typeof RateBasedStatementAggregateKeyTypeSchema> & {
    [key: string]: unknown
  }
  ScopeDownStatement?: z.infer<typeof StatementSchema> & { [key: string]: unknown }
  ForwardedIPConfig?: z.infer<typeof ForwardedIPConfigSchema> & { [key: string]: unknown }
}

const AssociateWebACLResponseSchema = z.object({}).openapi('AssociateWebACLResponse')

const AssociateWebACLRequestSchema = z
  .object({
    WebACLArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.',
        }),
    ),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource to associate with the web ACL. </p> <p>The ARN must be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> <li> <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i> </code> </p> </li> <li> <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i> </code> </p> </li> <li> <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['WebACLArn', 'ResourceArn'], title: 'AssociateWebACLRequest' })
  .openapi('AssociateWebACLRequest')

const WAFInternalErrorExceptionSchema = z.any().openapi('WAFInternalErrorException')

const WAFInvalidParameterExceptionSchema = z.any().openapi('WAFInvalidParameterException')

const WAFNonexistentItemExceptionSchema = z.any().openapi('WAFNonexistentItemException')

const WAFUnavailableEntityExceptionSchema = z.any().openapi('WAFUnavailableEntityException')

const WAFInvalidOperationExceptionSchema = z.any().openapi('WAFInvalidOperationException')

const ConsumedCapacitySchema = z.int().min(0).openapi('ConsumedCapacity')

const CheckCapacityResponseSchema = z
  .object({
    Capacity: ConsumedCapacitySchema.and(
      z.any().openapi({ description: 'The capacity required by the rules and scope.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckCapacityResponse')

const ScopeSchema = z.enum(['CLOUDFRONT', 'REGIONAL']).openapi('Scope')

const RulePrioritySchema = z.int().min(0).openapi('RulePriority')

const NoneActionSchema = z
  .object({})
  .openapi({
    description:
      '<p>Specifies that WAF should do nothing. This is used for the <code>OverrideAction</code> setting on a <a>Rule</a> when the rule uses a rule group reference statement. </p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> <p>JSON specification: <code>"None": {}</code> </p>',
  })
  .openapi('NoneAction')

const OverrideActionSchema = z
  .object({
    Count: CountActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Override the rule group evaluation result to count only. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note>',
        }),
    ).exactOptional(),
    None: NoneActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Don't override the rule group evaluation result. This is the most common setting.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note>',
    required: [],
  })
  .openapi('OverrideAction')

const LabelSchema = z
  .object({ Name: LabelNameSchema.and(z.any().openapi({ description: 'The label string. ' })) })
  .openapi({
    required: ['Name'],
    description:
      'A single label container. This is used as an element of a label array in multiple contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in <code>Labels</code> inside a <a>SampledHTTPRequest</a>. ',
  })
  .openapi('Label')

const LabelsSchema = z.array(LabelSchema).openapi('Labels')

const BooleanSchema = z.boolean().openapi('Boolean')

const MetricNameSchema = z
  .string()
  .regex(/^[\w#:\.\-\/]+$/)
  .min(1)
  .max(255)
  .openapi('MetricName')

const VisibilityConfigSchema = z
  .object({
    SampledRequestsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean indicating whether WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the WAF console. ',
        }),
    ),
    CloudWatchMetricsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF Metrics</a> in the <i>WAF Developer Guide</i>.',
        }),
    ),
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for WAF, for example <code>All</code> and <code>Default_Action</code>. ",
        }),
    ),
  })
  .openapi({
    required: ['SampledRequestsEnabled', 'CloudWatchMetricsEnabled', 'MetricName'],
    description:
      'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
  })
  .openapi('VisibilityConfig')

const TimeWindowSecondSchema = z.int().min(60).max(259200).openapi('TimeWindowSecond')

const ImmunityTimePropertySchema = z
  .object({
    ImmunityTime: TimeWindowSecondSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time, in seconds, that a <code>CAPTCHA</code> or challenge timestamp is considered valid by WAF. The default setting is 300. </p> <p>For the Challenge action, the minimum setting is 300. </p>',
        }),
    ),
  })
  .openapi({
    required: ['ImmunityTime'],
    description:
      'Used for CAPTCHA and challenge token settings. Determines how long a <code>CAPTCHA</code> or challenge timestamp remains valid after WAF updates it for a successful <code>CAPTCHA</code> or challenge response. ',
  })
  .openapi('ImmunityTimeProperty')

const CaptchaConfigSchema = z
  .object({
    ImmunityTimeProperty: ImmunityTimePropertySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines how long a <code>CAPTCHA</code> timestamp in the token remains valid after the client successfully solves a <code>CAPTCHA</code> puzzle. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies how WAF should handle <code>CAPTCHA</code> evaluations. This is available at the web ACL level and in each rule. ',
    required: [],
  })
  .openapi('CaptchaConfig')

const ChallengeConfigSchema = z
  .object({
    ImmunityTimeProperty: ImmunityTimePropertySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies how WAF should handle <code>Challenge</code> evaluations. This is available at the web ACL level and in each rule. ',
    required: [],
  })
  .openapi('ChallengeConfig')

const RuleSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the rule. You can't change the name of a <code>Rule</code> after you create it. ",
        }),
    ),
    Priority: RulePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            "If you define more than one <code>Rule</code> in a <code>WebACL</code>, WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.",
        }),
    ),
    Statement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WAF processing statement for the rule, for example <a>ByteMatchStatement</a> or <a>SizeConstraintStatement</a>. ',
        }),
    ),
    Action: RuleActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting. </p> <p>This is used only for rules whose statements do not reference a rule group. Rule statements that reference a rule group include <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <p>You must specify either this <code>Action</code> setting or the rule <code>OverrideAction</code> setting, but not both:</p> <ul> <li> <p>If the rule statement does not reference a rule group, use this rule action setting and not the rule override action setting. </p> </li> <li> <p>If the rule statement references a rule group, use the override action setting and not this action setting. </p> </li> </ul>',
        }),
    ).exactOptional(),
    OverrideAction: OverrideActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note>',
        }),
    ).exactOptional(),
    RuleLabels: LabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Labels to apply to web requests that match the rule match statement. WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace. </p> <p>Rules that run after this rule in the web ACL can match against these labels using a <code>LabelMatchStatement</code>.</p> <p>For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:</p> <ul> <li> <p>Separate each component of the label with a colon. </p> </li> <li> <p>Each namespace or name can have up to 128 characters.</p> </li> <li> <p>You can specify up to 5 namespaces in a label.</p> </li> <li> <p>Don't use the following reserved words in your label specification: <code>aws</code>, <code>waf</code>, <code>managed</code>, <code>rulegroup</code>, <code>webacl</code>, <code>regexpatternset</code>, or <code>ipset</code>.</p> </li> </ul> <p>For example, <code>myLabelName</code> or <code>nameSpace1:nameSpace2:myLabelName</code>. </p>",
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    CaptchaConfig: CaptchaConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle <code>CAPTCHA</code> evaluations. If you don't specify this, WAF uses the <code>CAPTCHA</code> configuration that's defined for the web ACL. ",
        }),
    ).exactOptional(),
    ChallengeConfig: ChallengeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle <code>Challenge</code> evaluations. If you don't specify this, WAF uses the challenge configuration that's defined for the web ACL. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Priority', 'Statement', 'VisibilityConfig'],
    description:
      'A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
  })
  .openapi('Rule')

const RulesSchema = z.array(RuleSchema).openapi('Rules')

const CheckCapacityRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <a>Rule</a> that you're configuring to use in a rule group or web ACL. ",
        }),
    ),
  })
  .openapi({ required: ['Scope', 'Rules'], title: 'CheckCapacityRequest' })
  .openapi('CheckCapacityRequest')

const WAFLimitsExceededExceptionSchema = z.any().openapi('WAFLimitsExceededException')

const WAFInvalidResourceExceptionSchema = z.any().openapi('WAFInvalidResourceException')

const WAFSubscriptionNotFoundExceptionSchema = z.any().openapi('WAFSubscriptionNotFoundException')

const WAFExpiredManagedRuleGroupVersionExceptionSchema = z
  .any()
  .openapi('WAFExpiredManagedRuleGroupVersionException')

const APIKeySchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('APIKey')

const CreateAPIKeyResponseSchema = z
  .object({
    APIKey: APIKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration. </p> <p>For information about how to use this in your CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAPIKeyResponse')

const TokenDomainSchema = z
  .string()
  .regex(/^[\w\.\-\/]+$/)
  .min(1)
  .max(253)
  .openapi('TokenDomain')

const APIKeyTokenDomainsSchema = z.array(TokenDomainSchema).min(1).openapi('APIKeyTokenDomains')

const CreateAPIKeyRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    TokenDomains: APIKeyTokenDomainsSchema.and(
      z
        .any()
        .openapi({
          description: 'The client application domains that you want to use this API key for. ',
        }),
    ),
  })
  .openapi({ required: ['Scope', 'TokenDomains'], title: 'CreateAPIKeyRequest' })
  .openapi('CreateAPIKeyRequest')

const EntityIdSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/)
  .min(1)
  .max(36)
  .openapi('EntityId')

const EntityDescriptionSchema = z
  .string()
  .regex(/^[\w+=:#@\/\-,\.][\w+=:#@\/\-,\.\s]+[\w+=:#@\/\-,\.]$/)
  .min(1)
  .max(256)
  .openapi('EntityDescription')

const LockTokenSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/)
  .min(1)
  .max(36)
  .openapi('LockToken')

const IPSetSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the IP set that helps with identification. ' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.',
    required: [],
  })
  .openapi('IPSetSummary')

const CreateIPSetResponseSchema = z
  .object({
    Summary: IPSetSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIPSetResponse')

const IPAddressVersionSchema = z.enum(['IPV4', 'IPV6']).openapi('IPAddressVersion')

const IPAddressSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(50)
  .openapi('IPAddress')

const IPAddressesSchema = z.array(IPAddressSchema).openapi('IPAddresses')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      '<p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console. </p>',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).openapi('TagList')

const CreateIPSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the IP set that helps with identification. ' }),
    ).exactOptional(),
    IPAddressVersion: IPAddressVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. ',
        }),
    ),
    Addresses: IPAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p> <p>Example address strings: </p> <ul> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>Example JSON <code>Addresses</code> specifications: </p> <ul> <li> <p>Empty array: <code>"Addresses": []</code> </p> </li> <li> <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code> </p> </li> <li> <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code> </p> </li> <li> <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p> </li> </ul>',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of key:value pairs to associate with the resource.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'IPAddressVersion', 'Addresses'],
    title: 'CreateIPSetRequest',
  })
  .openapi('CreateIPSetRequest')

const WAFDuplicateItemExceptionSchema = z.any().openapi('WAFDuplicateItemException')

const WAFOptimisticLockExceptionSchema = z.any().openapi('WAFOptimisticLockException')

const WAFTagOperationExceptionSchema = z.any().openapi('WAFTagOperationException')

const WAFTagOperationInternalErrorExceptionSchema = z
  .any()
  .openapi('WAFTagOperationInternalErrorException')

const RegexPatternSetSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data type instance. You cannot change the name after you create the instance.',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.',
    required: [],
  })
  .openapi('RegexPatternSetSummary')

const CreateRegexPatternSetResponseSchema = z
  .object({
    Summary: RegexPatternSetSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRegexPatternSetResponse')

const RegexSchema = z
  .object({
    RegexString: RegexPatternStringSchema.and(
      z.any().openapi({ description: 'The string representing the regular expression.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A single regular expression. This is used in a <a>RegexPatternSet</a>.',
    required: [],
  })
  .openapi('Regex')

const RegularExpressionListSchema = z.array(RegexSchema).openapi('RegularExpressionList')

const CreateRegexPatternSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the set. You cannot change the name after you create the set.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    RegularExpressionList: RegularExpressionListSchema.and(
      z.any().openapi({ description: 'Array of regular expression strings. ' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of key:value pairs to associate with the resource.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'RegularExpressionList'],
    title: 'CreateRegexPatternSetRequest',
  })
  .openapi('CreateRegexPatternSetRequest')

const RuleGroupSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the data type instance. You cannot change the name after you create the instance.',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the rule group that helps with identification. ',
        }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.',
    required: [],
  })
  .openapi('RuleGroupSummary')

const CreateRuleGroupResponseSchema = z
  .object({
    Summary: RuleGroupSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRuleGroupResponse')

const CapacityUnitSchema = z.int().min(1).openapi('CapacityUnit')

const ResponseContentTypeSchema = z
  .enum(['TEXT_PLAIN', 'TEXT_HTML', 'APPLICATION_JSON'])
  .openapi('ResponseContentType')

const ResponseContentSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(10240)
  .openapi('ResponseContent')

const CustomResponseBodySchema = z
  .object({
    ContentType: ResponseContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of content in the payload that you are defining in the <code>Content</code> string.',
        }),
    ),
    Content: ResponseContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The payload of the custom response. </p> <p>You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the <code>ContentType</code> setting. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['ContentType', 'Content'],
    description:
      'The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>.',
  })
  .openapi('CustomResponseBody')

const CustomResponseBodiesSchema = z
  .record(z.string(), CustomResponseBodySchema)
  .refine((val) => Object.keys(val).length >= 1)
  .openapi('CustomResponseBodies')

const CreateRuleGroupRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Capacity: CapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The web ACL capacity units (WCUs) required for this rule group.</p> <p>When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using <a>CheckCapacity</a>.</p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the rule group that helps with identification. ',
        }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of key:value pairs to associate with the resource.' }),
    ).exactOptional(),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'Capacity', 'VisibilityConfig'],
    title: 'CreateRuleGroupRequest',
  })
  .openapi('CreateRuleGroupRequest')

const WebACLSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the web ACL that helps with identification. ' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.',
    required: [],
  })
  .openapi('WebACLSummary')

const CreateWebACLResponseSchema = z
  .object({
    Summary: WebACLSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWebACLResponse')

const DefaultActionSchema = z
  .object({
    Block: BlockActionSchema.and(
      z.any().openapi({ description: 'Specifies that WAF should block requests by default. ' }),
    ).exactOptional(),
    Allow: AllowActionSchema.and(
      z.any().openapi({ description: 'Specifies that WAF should allow requests by default.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "In a <a>WebACL</a>, this is the action that you want WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action.",
    required: [],
  })
  .openapi('DefaultAction')

const TokenDomainsSchema = z.array(TokenDomainSchema).openapi('TokenDomains')

const SizeInspectionLimitSchema = z
  .enum(['KB_16', 'KB_32', 'KB_48', 'KB_64'])
  .openapi('SizeInspectionLimit')

const RequestBodyAssociatedResourceTypeConfigSchema = z
  .object({
    DefaultSizeInspectionLimit: SizeInspectionLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the maximum size of the web request body component that an associated CloudFront distribution should send to WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body. </p> <p>Default: <code>16 KB (16,384 kilobytes)</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['DefaultSizeInspectionLimit'],
    description:
      '<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>',
  })
  .openapi('RequestBodyAssociatedResourceTypeConfig')

const RequestBodySchema = z
  .record(z.string(), RequestBodyAssociatedResourceTypeConfigSchema)
  .openapi('RequestBody')

const AssociationConfigSchema = z
  .object({
    RequestBody: RequestBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
    required: [],
  })
  .openapi('AssociationConfig')

const CreateWebACLRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    DefaultAction: DefaultActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. ',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the web ACL that helps with identification. ' }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of key:value pairs to associate with the resource.' }),
    ).exactOptional(),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    CaptchaConfig: CaptchaConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. ",
        }),
    ).exactOptional(),
    ChallengeConfig: ChallengeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle challenge evaluations for rules that don't have their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. ",
        }),
    ).exactOptional(),
    TokenDomains: TokenDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don\'t specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource\'s host domain plus all domains in the token domain list, including their prefixed subdomains.</p> <p>Example JSON: <code>"TokenDomains": { "mywebsite.com", "myotherwebsite.com" }</code> </p> <p>Public suffixes aren\'t allowed. For example, you can\'t use <code>usa.gov</code> or <code>co.uk</code> as token domains.</p>',
        }),
    ).exactOptional(),
    AssociationConfig: AssociationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'DefaultAction', 'VisibilityConfig'],
    title: 'CreateWebACLRequest',
  })
  .openapi('CreateWebACLRequest')

const WAFConfigurationWarningExceptionSchema = z.any().openapi('WAFConfigurationWarningException')

const DeleteFirewallManagerRuleGroupsResponseSchema = z
  .object({
    NextWebACLLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFirewallManagerRuleGroupsResponse')

const DeleteFirewallManagerRuleGroupsRequestSchema = z
  .object({
    WebACLArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the web ACL.' }),
    ),
    WebACLLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({
    required: ['WebACLArn', 'WebACLLockToken'],
    title: 'DeleteFirewallManagerRuleGroupsRequest',
  })
  .openapi('DeleteFirewallManagerRuleGroupsRequest')

const DeleteIPSetResponseSchema = z.object({}).openapi('DeleteIPSetResponse')

const DeleteIPSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id', 'LockToken'], title: 'DeleteIPSetRequest' })
  .openapi('DeleteIPSetRequest')

const WAFAssociatedItemExceptionSchema = z.any().openapi('WAFAssociatedItemException')

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
            '<p>The Amazon Resource Name (ARN) of the rule group from which you want to delete the policy.</p> <p>You must be the owner of the rule group to perform this operation.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeletePermissionPolicyRequest' })
  .openapi('DeletePermissionPolicyRequest')

const DeleteRegexPatternSetResponseSchema = z.object({}).openapi('DeleteRegexPatternSetResponse')

const DeleteRegexPatternSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the set. You cannot change the name after you create the set.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'LockToken'],
    title: 'DeleteRegexPatternSetRequest',
  })
  .openapi('DeleteRegexPatternSetRequest')

const DeleteRuleGroupResponseSchema = z.object({}).openapi('DeleteRuleGroupResponse')

const DeleteRuleGroupRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id', 'LockToken'], title: 'DeleteRuleGroupRequest' })
  .openapi('DeleteRuleGroupRequest')

const DeleteWebACLResponseSchema = z.object({}).openapi('DeleteWebACLResponse')

const DeleteWebACLRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id', 'LockToken'], title: 'DeleteWebACLRequest' })
  .openapi('DeleteWebACLRequest')

const RuleSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z.any().openapi({ description: 'The name of the rule. ' }),
    ).exactOptional(),
    Action: RuleActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.',
    required: [],
  })
  .openapi('RuleSummary')

const RuleSummariesSchema = z.array(RuleSummarySchema).openapi('RuleSummaries')

const LabelSummarySchema = z
  .object({
    Name: LabelNameSchema.and(
      z.any().openapi({ description: 'An individual label specification.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This summary object is used for the following rule group lists: </p> <ul> <li> <p> <code>AvailableLabels</code> - Labels that rules add to matching requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p> </li> <li> <p> <code>ConsumedLabels</code> - Labels that rules match against. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. </p> </li> </ul>',
    required: [],
  })
  .openapi('LabelSummary')

const LabelSummariesSchema = z.array(LabelSummarySchema).openapi('LabelSummaries')

const DescribeManagedRuleGroupResponseSchema = z
  .object({
    VersionName: VersionKeyStringSchema.and(
      z.any().openapi({ description: "The managed rule group's version. " }),
    ).exactOptional(),
    SnsTopicArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that\'s used to record changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide</a>.',
        }),
    ).exactOptional(),
    Capacity: CapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The web ACL capacity units (WCUs) required for this rule group.</p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    Rules: RuleSummariesSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    LabelNamespace: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p> <ul> <li> <p>The syntax for the label namespace prefix for a managed rule group is the following: </p> <p> <code>awswaf:managed:&lt;vendor&gt;:&lt;rule group name&gt;</code>:</p> </li> <li> <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p> <p> <code>&lt;label namespace&gt;:&lt;label from rule&gt;</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    AvailableLabels: LabelSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.',
        }),
    ).exactOptional(),
    ConsumedLabels: LabelSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeManagedRuleGroupResponse')

const DescribeManagedRuleGroupRequestSchema = z
  .object({
    VendorName: VendorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.',
        }),
    ),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    VersionName: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the rule group. You can only use a version that is not scheduled for expiration. If you don't provide this, WAF uses the vendor's default version. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VendorName', 'Name', 'Scope'], title: 'DescribeManagedRuleGroupRequest' })
  .openapi('DescribeManagedRuleGroupRequest')

const DisassociateWebACLResponseSchema = z.object({}).openapi('DisassociateWebACLResponse')

const DisassociateWebACLRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL. </p> <p>The ARN must be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> <li> <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i> </code> </p> </li> <li> <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i> </code> </p> </li> <li> <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DisassociateWebACLRequest' })
  .openapi('DisassociateWebACLRequest')

const DownloadUrlSchema = z.string().openapi('DownloadUrl')

const GenerateMobileSdkReleaseUrlResponseSchema = z
  .object({
    Url: DownloadUrlSchema.and(
      z.any().openapi({ description: 'The presigned download URL for the specified SDK release.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GenerateMobileSdkReleaseUrlResponse')

const PlatformSchema = z.enum(['IOS', 'ANDROID']).openapi('Platform')

const GenerateMobileSdkReleaseUrlRequestSchema = z
  .object({
    Platform: PlatformSchema.and(z.any().openapi({ description: 'The device platform.' })),
    ReleaseVersion: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The release version. For the latest available version, specify <code>LATEST</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Platform', 'ReleaseVersion'],
    title: 'GenerateMobileSdkReleaseUrlRequest',
  })
  .openapi('GenerateMobileSdkReleaseUrlRequest')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const GetDecryptedAPIKeyResponseSchema = z
  .object({
    TokenDomains: TokenDomainsSchema.and(
      z.any().openapi({ description: 'The token domains that are defined in this API key. ' }),
    ).exactOptional(),
    CreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the key was created. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDecryptedAPIKeyResponse')

const GetDecryptedAPIKeyRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    APIKey: APIKeySchema.and(z.any().openapi({ description: 'The encrypted API key. ' })),
  })
  .openapi({ required: ['Scope', 'APIKey'], title: 'GetDecryptedAPIKeyRequest' })
  .openapi('GetDecryptedAPIKeyRequest')

const IPSetSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the IP set that helps with identification. ' }),
    ).exactOptional(),
    IPAddressVersion: IPAddressVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. ',
        }),
    ),
    Addresses: IPAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p> <p>Example address strings: </p> <ul> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>Example JSON <code>Addresses</code> specifications: </p> <ul> <li> <p>Empty array: <code>"Addresses": []</code> </p> </li> <li> <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code> </p> </li> <li> <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code> </p> </li> <li> <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Id', 'ARN', 'IPAddressVersion', 'Addresses'],
    description:
      '<p>Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>',
  })
  .openapi('IPSet')

const GetIPSetResponseSchema = z
  .object({
    IPSet: IPSetSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIPSetResponse')

const GetIPSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id'], title: 'GetIPSetRequest' })
  .openapi('GetIPSetRequest')

const LogDestinationConfigsSchema = z
  .array(ResourceArnSchema)
  .min(1)
  .max(100)
  .openapi('LogDestinationConfigs')

const RedactedFieldsSchema = z.array(FieldToMatchSchema).max(100).openapi('RedactedFields')

const FilterBehaviorSchema = z.enum(['KEEP', 'DROP']).openapi('FilterBehavior')

const FilterRequirementSchema = z.enum(['MEETS_ALL', 'MEETS_ANY']).openapi('FilterRequirement')

const ConditionSchema: z.ZodType<ConditionType> = z
  .lazy(() =>
    z
      .object({
        ActionCondition: ActionConditionSchema.and(
          z
            .any()
            .openapi({
              description:
                'A single action condition. This is the action setting that a log record must contain in order to meet the condition.',
            }),
        ).exactOptional(),
        LabelNameCondition: LabelNameConditionSchema.and(
          z
            .any()
            .openapi({
              description:
                'A single label name condition. This is the fully qualified label name that a log record must contain in order to meet the condition. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. ',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'A single match condition for a <a>Filter</a>.', required: [] }),
  )
  .openapi('Condition')

const ConditionsSchema = z.array(ConditionSchema).min(1).openapi('Conditions')

const FilterSchema = z
  .object({
    Behavior: FilterBehaviorSchema.and(
      z
        .any()
        .openapi({
          description: "How to handle logs that satisfy the filter's conditions and requirement. ",
        }),
    ),
    Requirement: FilterRequirementSchema.and(
      z
        .any()
        .openapi({
          description:
            'Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.',
        }),
    ),
    Conditions: ConditionsSchema.and(
      z.any().openapi({ description: 'Match conditions for the filter.' }),
    ),
  })
  .openapi({
    required: ['Behavior', 'Requirement', 'Conditions'],
    description: 'A single logging filter, used in <a>LoggingFilter</a>. ',
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).min(1).openapi('Filters')

const LoggingFilterSchema = z
  .object({
    Filters: FiltersSchema.and(
      z.any().openapi({ description: 'The filters that you want to apply to the logs. ' }),
    ),
    DefaultBehavior: FilterBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "Default handling for logs that don't match any of the specified filtering conditions. ",
        }),
    ),
  })
  .openapi({
    required: ['Filters', 'DefaultBehavior'],
    description:
      "<p>Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's <a>LoggingConfiguration</a>. </p> <p>You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation. </p>",
  })
  .openapi('LoggingFilter')

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
      z
        .any()
        .openapi({
          description:
            '<p>The logging destination configuration that you want to associate with the web ACL.</p> <note> <p>You can associate one logging destination to a web ACL.</p> </note>',
        }),
    ),
    RedactedFields: RedactedFieldsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parts of the request that you want to keep out of the logs. For example, if you redact the <code>SingleHeader</code> field, the <code>HEADER</code> field in the logs will be <code>REDACTED</code>. </p> <note> <p>You can specify only the following fields for redaction: <code>UriPath</code>, <code>QueryString</code>, <code>SingleHeader</code>, <code>Method</code>, and <code>JsonBody</code>.</p> </note>',
        }),
    ).exactOptional(),
    ManagedByFirewallManager: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the logging configuration was created by Firewall Manager, as part of an WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration. ',
        }),
    ).exactOptional(),
    LoggingFilter: LoggingFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceArn', 'LogDestinationConfigs'],
    description:
      '<p>Defines an association between logging destinations and a web ACL resource, for logging from WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records. </p> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p>',
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

const TimeWindowDaySchema = z.int().min(1).openapi('TimeWindowDay')

const ManagedRuleSetVersionSchema = z
  .object({
    AssociatedRuleGroupArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the vendor rule group that's used to define the published version of your managed rule group. ",
        }),
    ).exactOptional(),
    Capacity: CapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The web ACL capacity units (WCUs) required for this rule group.</p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    ForecastedLifetime: TimeWindowDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time you expect this version of your managed rule group to last, in days. ',
        }),
    ).exactOptional(),
    PublishTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time that you first published this version. </p> <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>',
        }),
    ).exactOptional(),
    LastUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time that you updated this version. </p> <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>',
        }),
    ).exactOptional(),
    ExpiryTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time that this version is set to expire.</p> <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information for a single version of a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
    required: [],
  })
  .openapi('ManagedRuleSetVersion')

const PublishedVersionsSchema = z
  .record(z.string(), ManagedRuleSetVersionSchema)
  .openapi('PublishedVersions')

const ManagedRuleSetSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p> <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.',
        }),
    ),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    PublishedVersions: PublishedVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The versions of this managed rule set that are available for use by customers. ',
        }),
    ).exactOptional(),
    RecommendedVersion: VersionKeyStringSchema.and(
      z.any().openapi({ description: 'The version that you would like your customers to use.' }),
    ).exactOptional(),
    LabelNamespace: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p> <ul> <li> <p>The syntax for the label namespace prefix for a managed rule group is the following: </p> <p> <code>awswaf:managed:&lt;vendor&gt;:&lt;rule group name&gt;</code>:</p> </li> <li> <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p> <p> <code>&lt;label namespace&gt;:&lt;label from rule&gt;</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Id', 'ARN'],
    description:
      '<p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed rule groups for customers of WAF.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
  })
  .openapi('ManagedRuleSet')

const GetManagedRuleSetResponseSchema = z
  .object({
    ManagedRuleSet: ManagedRuleSetSchema.and(
      z.any().openapi({ description: 'The managed rule set that you requested. ' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetManagedRuleSetResponse')

const GetManagedRuleSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p> <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id'], title: 'GetManagedRuleSetRequest' })
  .openapi('GetManagedRuleSetRequest')

const ReleaseNotesSchema = z.string().openapi('ReleaseNotes')

const MobileSdkReleaseSchema = z
  .object({
    ReleaseVersion: VersionKeyStringSchema.and(
      z.any().openapi({ description: 'The release version. ' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the release. ' }),
    ).exactOptional(),
    ReleaseNotes: ReleaseNotesSchema.and(
      z.any().openapi({ description: 'Notes describing the release.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Tags that are associated with the release. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information for a release of the mobile SDK, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('MobileSdkRelease')

const GetMobileSdkReleaseResponseSchema = z
  .object({
    MobileSdkRelease: MobileSdkReleaseSchema.and(
      z
        .any()
        .openapi({
          description: 'Information for a specified SDK release, including release notes and tags.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMobileSdkReleaseResponse')

const GetMobileSdkReleaseRequestSchema = z
  .object({
    Platform: PlatformSchema.and(z.any().openapi({ description: 'The device platform.' })),
    ReleaseVersion: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The release version. For the latest available version, specify <code>LATEST</code>.',
        }),
    ),
  })
  .openapi({ required: ['Platform', 'ReleaseVersion'], title: 'GetMobileSdkReleaseRequest' })
  .openapi('GetMobileSdkReleaseRequest')

const PolicyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(395000)
  .openapi('PolicyString')

const GetPermissionPolicyResponseSchema = z
  .object({
    Policy: PolicyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The IAM policy that is attached to the specified rule group.' }),
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
            'The Amazon Resource Name (ARN) of the rule group for which you want to get the policy.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetPermissionPolicyRequest' })
  .openapi('GetPermissionPolicyRequest')

const RateBasedStatementManagedKeysIPSetSchema = z
  .object({
    IPAddressVersion: IPAddressVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. ',
        }),
    ).exactOptional(),
    Addresses: IPAddressesSchema.and(
      z.any().openapi({ description: 'The IP addresses that are currently blocked.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>.',
    required: [],
  })
  .openapi('RateBasedStatementManagedKeysIPSet')

const GetRateBasedStatementManagedKeysResponseSchema = z
  .object({
    ManagedKeysIPV4: RateBasedStatementManagedKeysIPSetSchema.and(
      z.any().openapi({ description: 'The keys that are of Internet Protocol version 4 (IPv4). ' }),
    ).exactOptional(),
    ManagedKeysIPV6: RateBasedStatementManagedKeysIPSetSchema.and(
      z.any().openapi({ description: 'The keys that are of Internet Protocol version 6 (IPv6). ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRateBasedStatementManagedKeysResponse')

const GetRateBasedStatementManagedKeysRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    WebACLName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    WebACLId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    RuleGroupRuleName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group reference statement in your web ACL. This is required only when you have the rate-based rule nested inside a rule group. ',
        }),
    ).exactOptional(),
    RuleName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the rate-based rule to get the keys for. If you have the rule defined inside a rule group that you're using in your web ACL, also provide the name of the rule group reference statement in the request parameter <code>RuleGroupRuleName</code>.",
        }),
    ),
  })
  .openapi({
    required: ['Scope', 'WebACLName', 'WebACLId', 'RuleName'],
    title: 'GetRateBasedStatementManagedKeysRequest',
  })
  .openapi('GetRateBasedStatementManagedKeysRequest')

const RegexPatternSetSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the set. You cannot change the name after you create the set.',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    RegularExpressionList: RegularExpressionListSchema.and(
      z.any().openapi({ description: 'The regular expression patterns in the set.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains one or more regular expressions. </p> <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>',
    required: [],
  })
  .openapi('RegexPatternSet')

const GetRegexPatternSetResponseSchema = z
  .object({
    RegexPatternSet: RegexPatternSetSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRegexPatternSetResponse')

const GetRegexPatternSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the set. You cannot change the name after you create the set.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id'], title: 'GetRegexPatternSetRequest' })
  .openapi('GetRegexPatternSetRequest')

const RuleGroupSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    Capacity: CapacityUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The web ACL capacity units (WCUs) required for this rule group.</p> <p>When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using <a>CheckCapacity</a>.</p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the rule group that helps with identification. ',
        }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    LabelNamespace: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p> <ul> <li> <p>The syntax for the label namespace prefix for your rule groups is the following: </p> <p> <code>awswaf:&lt;account ID&gt;:rulegroup:&lt;rule group name&gt;:</code> </p> </li> <li> <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p> <p> <code>&lt;label namespace&gt;:&lt;label from rule&gt;</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    AvailableLabels: LabelSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.',
        }),
    ).exactOptional(),
    ConsumedLabels: LabelSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Id', 'Capacity', 'ARN', 'VisibilityConfig'],
    description:
      ' A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. ',
  })
  .openapi('RuleGroup')

const GetRuleGroupResponseSchema = z
  .object({
    RuleGroup: RuleGroupSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRuleGroupResponse')

const GetRuleGroupRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ).exactOptional(),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetRuleGroupRequest', required: [] })
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
      z.any().openapi({ description: 'The name of the HTTP header.' }),
    ).exactOptional(),
    Value: HeaderValueSchema.and(
      z.any().openapi({ description: 'The value of the HTTP header.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests. ',
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
            '<p>The IP address that the request originated from. If the web ACL is associated with a CloudFront distribution, this is the value of one of the following fields in CloudFront access logs:</p> <ul> <li> <p> <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send the request</p> </li> <li> <p> <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer to send the request</p> </li> </ul>',
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
            'The URI path of the request, which identifies the resource, for example, <code>/images/daily-ad.jpg</code>.',
        }),
    ).exactOptional(),
    Method: HTTPMethodSchema.and(
      z.any().openapi({ description: 'The HTTP method specified in the sampled web request. ' }),
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
            'A complex type that contains the name and value for each header in the sampled web request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests. ',
    required: [],
  })
  .openapi('HTTPRequest')

const SampleWeightSchema = z.int().min(0).openapi('SampleWeight')

const ActionSchema = z.string().openapi('Action')

const ResponseCodeSchema = z.int().openapi('ResponseCode')

const SolveTimestampSchema = z.int().openapi('SolveTimestamp')

const FailureReasonSchema = z
  .enum(['TOKEN_MISSING', 'TOKEN_EXPIRED', 'TOKEN_INVALID', 'TOKEN_DOMAIN_MISMATCH'])
  .openapi('FailureReason')

const CaptchaResponseSchema = z
  .object({
    ResponseCode: ResponseCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP response code indicating the status of the <code>CAPTCHA</code> token in the web request. If the token is missing, invalid, or expired, this code is <code>405 Method Not Allowed</code>.',
        }),
    ).exactOptional(),
    SolveTimestamp: SolveTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the <code>CAPTCHA</code> was last solved for the supplied token. ',
        }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason for failure, populated when the evaluation of the token fails.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result from the inspection of the web request for a valid <code>CAPTCHA</code> token. ',
    required: [],
  })
  .openapi('CaptchaResponse')

const ChallengeResponseSchema = z
  .object({
    ResponseCode: ResponseCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP response code indicating the status of the challenge token in the web request. If the token is missing, invalid, or expired, this code is <code>202 Request Accepted</code>.',
        }),
    ).exactOptional(),
    SolveTimestamp: SolveTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the challenge was last solved for the supplied token. ',
        }),
    ).exactOptional(),
    FailureReason: FailureReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason for failure, populated when the evaluation of the token fails.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The result from the inspection of the web request for a valid challenge token. ',
    required: [],
  })
  .openapi('ChallengeResponse')

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
            'A value that indicates how one result in the response relates proportionally to other results in the response. For example, a result that has a weight of <code>2</code> represents roughly twice as many web requests as a result that has a weight of <code>1</code>.',
        }),
    ),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which WAF received the request from your Amazon Web Services resource, in Unix time format (in seconds).',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z.any().openapi({ description: 'The action that WAF applied to the request.' }),
    ).exactOptional(),
    RuleNameWithinRuleGroup: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the <code>Rule</code> that the request matched. For managed rule groups, the format for this name is <code>&lt;vendor name&gt;#&lt;managed rule group name&gt;#&lt;rule name&gt;</code>. For your own rule groups, the format for this name is <code>&lt;rule group name&gt;#&lt;rule name&gt;</code>. If the rule is not in a rule group, this field is absent. ',
        }),
    ).exactOptional(),
    RequestHeadersInserted: HTTPHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom request headers inserted by WAF into the request, according to the custom request configuration for the matching rule action.',
        }),
    ).exactOptional(),
    ResponseCodeSent: ResponseStatusCodeSchema.and(
      z.any().openapi({ description: 'The response code that was sent for the request.' }),
    ).exactOptional(),
    Labels: LabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Labels applied to the web request by matching rules. WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace. </p> <p>For example, <code>awswaf:111122223333:myRuleGroup:testRules:testNS1:testNS2:labelNameA</code> or <code>awswaf:managed:aws:managed-rule-set:header:encoding:utf8</code>. </p>",
        }),
    ).exactOptional(),
    CaptchaResponse: CaptchaResponseSchema.and(
      z.any().openapi({ description: 'The <code>CAPTCHA</code> response for the request.' }),
    ).exactOptional(),
    ChallengeResponse: ChallengeResponseSchema.and(
      z.any().openapi({ description: 'The <code>Challenge</code> response for the request.' }),
    ).exactOptional(),
    OverriddenAction: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used only for rule group rules that have a rule action override in place in the web ACL. This is the action that the rule group rule is configured for, and not the action that was applied to the request. The action that WAF applied is the <code>Action</code> value. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Request', 'Weight'],
    description:
      'Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.',
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
            'The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your Amazon Web Services resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.',
        }),
    ),
    EndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your Amazon Web Services resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.',
        }),
    ),
  })
  .openapi({
    required: ['StartTime', 'EndTime'],
    description:
      '<p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which WAF actually returned a sample of web requests. WAF gets the specified number of requests from among the first 5,000 requests that your Amazon Web Services resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the 5,000th request.</p>',
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
            'The total number of requests from which <code>GetSampledRequests</code> got a sample of <code>MaxItems</code> requests. If <code>PopulationSize</code> is less than <code>MaxItems</code>, the sample includes every request that your Amazon Web Services resource received during the specified time range.',
        }),
    ).exactOptional(),
    TimeWindow: TimeWindowSchema.and(
      z
        .any()
        .openapi({
          description:
            'Usually, <code>TimeWindow</code> is the time range that you specified in the <code>GetSampledRequests</code> request. However, if your Amazon Web Services resource received more than 5,000 requests during the time range that you specified in the request, <code>GetSampledRequests</code> returns the time range for the first 5,000 requests. Times are in Coordinated Universal Time (UTC) format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSampledRequestsResponse')

const ListMaxItemsSchema = z.int().min(1).max(500).openapi('ListMaxItems')

const GetSampledRequestsRequestSchema = z
  .object({
    WebAclArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon resource name (ARN) of the <code>WebACL</code> for which you want a sample of requests.',
        }),
    ),
    RuleMetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric name assigned to the <code>Rule</code> or <code>RuleGroup</code> dimension for which you want a sample of requests.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    TimeWindow: TimeWindowSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date and time and the end date and time of the range for which you want <code>GetSampledRequests</code> to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours. If you specify a start time that\'s earlier than three hours ago, WAF sets it to three hours ago.',
        }),
    ),
    MaxItems: ListMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of requests that you want WAF to return from among the first 5,000 requests that your Amazon Web Services resource received during the time range. If your resource received fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code> returns information about all of them. ',
        }),
    ),
  })
  .openapi({
    required: ['WebAclArn', 'RuleMetricName', 'Scope', 'TimeWindow', 'MaxItems'],
    title: 'GetSampledRequestsRequest',
  })
  .openapi('GetSampledRequestsRequest')

const FirewallManagerStatementSchema = z
  .object({
    ManagedRuleGroupStatement: ManagedRuleGroupStatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statement used by Firewall Manager to run the rules that are defined in a managed rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.',
        }),
    ).exactOptional(),
    RuleGroupReferenceStatement: RuleGroupReferenceStatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statement used by Firewall Manager to run the rules that are defined in a rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a single rule group reference.',
    required: [],
  })
  .openapi('FirewallManagerStatement')

const FirewallManagerRuleGroupSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ),
    Priority: RulePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            "If you define more than one rule group in the first or last Firewall Manager rule groups, WAF evaluates each request against the rule groups in order, starting from the lowest priority setting. The priorities don't need to be consecutive, but they must all be different.",
        }),
    ),
    FirewallManagerStatement: FirewallManagerStatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.',
        }),
    ),
    OverrideAction: OverrideActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note>',
        }),
    ),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
  })
  .openapi({
    required: [
      'Name',
      'Priority',
      'FirewallManagerStatement',
      'OverrideAction',
      'VisibilityConfig',
    ],
    description: "A rule group that's defined for an Firewall Manager WAF policy.",
  })
  .openapi('FirewallManagerRuleGroup')

const FirewallManagerRuleGroupsSchema = z
  .array(FirewallManagerRuleGroupSchema)
  .openapi('FirewallManagerRuleGroups')

const WebACLSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to create and list commands. You use this ID to do things like get, update, and delete a <code>WebACL</code>.',
        }),
    ),
    ARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.',
        }),
    ),
    DefaultAction: DefaultActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. ',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the web ACL that helps with identification. ' }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    Capacity: ConsumedCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The web ACL capacity units (WCUs) currently being used by this web ACL. </p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    PreProcessFirewallManagerRuleGroups: FirewallManagerRuleGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The first set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized after these. </p> <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.</p>",
        }),
    ).exactOptional(),
    PostProcessFirewallManagerRuleGroups: FirewallManagerRuleGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The last set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized before these. </p> <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.</p>",
        }),
    ).exactOptional(),
    ManagedByFirewallManager: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether this web ACL is managed by Firewall Manager. If true, then only Firewall Manager can delete the web ACL or any Firewall Manager rule groups in the web ACL. ',
        }),
    ).exactOptional(),
    LabelNamespace: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix. </p> <ul> <li> <p>The syntax for the label namespace prefix for a web ACL is the following: </p> <p> <code>awswaf:&lt;account ID&gt;:webacl:&lt;web ACL name&gt;:</code> </p> </li> <li> <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p> <p> <code>&lt;label namespace&gt;:&lt;label from rule&gt;</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    CaptchaConfig: CaptchaConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. ",
        }),
    ).exactOptional(),
    ChallengeConfig: ChallengeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle challenge evaluations for rules that don't have their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. ",
        }),
    ).exactOptional(),
    TokenDomains: TokenDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.",
        }),
    ).exactOptional(),
    AssociationConfig: AssociationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Id', 'ARN', 'DefaultAction', 'VisibilityConfig'],
    description:
      ' A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. ',
  })
  .openapi('WebACL')

const OutputUrlSchema = z.string().openapi('OutputUrl')

const GetWebACLResponseSchema = z
  .object({
    WebACL: WebACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The web ACL specification. You can modify the settings in this web ACL and use it to update this web ACL or create a new one.',
        }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ApplicationIntegrationURL: OutputUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group <code>AWSManagedRulesATPRuleSet</code>. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWebACLResponse')

const GetWebACLRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
  })
  .openapi({ required: ['Name', 'Scope', 'Id'], title: 'GetWebACLRequest' })
  .openapi('GetWebACLRequest')

const GetWebACLForResourceResponseSchema = z
  .object({
    WebACL: WebACLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The web ACL that is associated with the resource. If there is no associated resource, WAF returns a null web ACL.',
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
            '<p>The Amazon Resource Name (ARN) of the resource whose web ACL you want to retrieve. </p> <p>The ARN must be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i> </code> </p> </li> <li> <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i> </code> </p> </li> <li> <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i> </code> </p> </li> <li> <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i> </code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'GetWebACLForResourceRequest' })
  .openapi('GetWebACLForResourceRequest')

const NextMarkerSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('NextMarker')

const APIKeyVersionSchema = z.int().min(0).openapi('APIKeyVersion')

const APIKeySummarySchema = z
  .object({
    TokenDomains: TokenDomainsSchema.and(
      z.any().openapi({ description: 'The token domains that are defined in this API key. ' }),
    ).exactOptional(),
    APIKey: APIKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration. </p> <p>For information about how to use this in your CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    CreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the key was created. ' }),
    ).exactOptional(),
    Version: APIKeyVersionSchema.and(
      z.any().openapi({ description: 'Internal value used by WAF to manage the key. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information for a single API key. ', required: [] })
  .openapi('APIKeySummary')

const APIKeySummariesSchema = z.array(APIKeySummarySchema).openapi('APIKeySummaries')

const ListAPIKeysResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    APIKeySummaries: APIKeySummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of key summaries. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
    ApplicationIntegrationURL: OutputUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The CAPTCHA application integration URL, for use in your JavaScript implementation. </p> <p>For information about how to use this in your CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAPIKeysResponse')

const PaginationLimitSchema = z.int().min(1).max(100).openapi('PaginationLimit')

const ListAPIKeysRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListAPIKeysRequest' })
  .openapi('ListAPIKeysRequest')

const ManagedRuleGroupVersionSchema = z
  .object({
    Name: VersionKeyStringSchema.and(
      z.any().openapi({ description: 'The version name. ' }),
    ).exactOptional(),
    LastUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the managed rule group owner updated the rule group version information. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a single version of a managed rule group. ', required: [] })
  .openapi('ManagedRuleGroupVersion')

const ManagedRuleGroupVersionsSchema = z
  .array(ManagedRuleGroupVersionSchema)
  .openapi('ManagedRuleGroupVersions')

const ListAvailableManagedRuleGroupVersionsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Versions: ManagedRuleGroupVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The versions that are currently available for the specified managed rule group. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
    CurrentDefaultVersion: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({ description: "The name of the version that's currently set as the default. " }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableManagedRuleGroupVersionsResponse')

const ListAvailableManagedRuleGroupVersionsRequestSchema = z
  .object({
    VendorName: VendorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.',
        }),
    ),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VendorName', 'Name', 'Scope'],
    title: 'ListAvailableManagedRuleGroupVersionsRequest',
  })
  .openapi('ListAvailableManagedRuleGroupVersionsRequest')

const ManagedRuleGroupSummarySchema = z
  .object({
    VendorName: VendorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.',
        }),
    ).exactOptional(),
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.',
        }),
    ).exactOptional(),
    VersioningSupported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the managed rule group is versioned. If it is, you can retrieve the versions list by calling <a>ListAvailableManagedRuleGroupVersions</a>. ',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the managed rule group, provided by Amazon Web Services Managed Rules or the Amazon Web Services Marketplace seller who manages it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups, which are free of charge to WAF customers, and Amazon Web Services Marketplace managed rule groups, which you can subscribe to through Amazon Web Services Marketplace. ',
    required: [],
  })
  .openapi('ManagedRuleGroupSummary')

const ManagedRuleGroupSummariesSchema = z
  .array(ManagedRuleGroupSummarySchema)
  .openapi('ManagedRuleGroupSummaries')

const ListAvailableManagedRuleGroupsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    ManagedRuleGroups: ManagedRuleGroupSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of managed rule groups that you can use. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailableManagedRuleGroupsResponse')

const ListAvailableManagedRuleGroupsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListAvailableManagedRuleGroupsRequest' })
  .openapi('ListAvailableManagedRuleGroupsRequest')

const IPSetSummariesSchema = z.array(IPSetSummarySchema).openapi('IPSetSummaries')

const ListIPSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    IPSets: IPSetSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of IPSets. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIPSetsResponse')

const ListIPSetsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListIPSetsRequest' })
  .openapi('ListIPSetsRequest')

const LoggingConfigurationsSchema = z
  .array(LoggingConfigurationSchema)
  .openapi('LoggingConfigurations')

const ListLoggingConfigurationsResponseSchema = z
  .object({
    LoggingConfigurations: LoggingConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of logging configurations. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLoggingConfigurationsResponse')

const ListLoggingConfigurationsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListLoggingConfigurationsRequest' })
  .openapi('ListLoggingConfigurationsRequest')

const ManagedRuleSetSummarySchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p> <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>',
        }),
    ).exactOptional(),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.',
        }),
    ).exactOptional(),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
    ARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the entity.' }),
    ).exactOptional(),
    LabelNamespace: LabelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p> <ul> <li> <p>The syntax for the label namespace prefix for a managed rule group is the following: </p> <p> <code>awswaf:managed:&lt;vendor&gt;:&lt;rule group name&gt;</code>:</p> </li> <li> <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p> <p> <code>&lt;label namespace&gt;:&lt;label from rule&gt;</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>High-level information for a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
    required: [],
  })
  .openapi('ManagedRuleSetSummary')

const ManagedRuleSetSummariesSchema = z
  .array(ManagedRuleSetSummarySchema)
  .openapi('ManagedRuleSetSummaries')

const ListManagedRuleSetsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    ManagedRuleSets: ManagedRuleSetSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Your managed rule sets. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedRuleSetsResponse')

const ListManagedRuleSetsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListManagedRuleSetsRequest' })
  .openapi('ListManagedRuleSetsRequest')

const ReleaseSummarySchema = z
  .object({
    ReleaseVersion: VersionKeyStringSchema.and(
      z.any().openapi({ description: 'The release version. ' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the release. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'High level information for an SDK release. ', required: [] })
  .openapi('ReleaseSummary')

const ReleaseSummariesSchema = z.array(ReleaseSummarySchema).openapi('ReleaseSummaries')

const ListMobileSdkReleasesResponseSchema = z
  .object({
    ReleaseSummaries: ReleaseSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The high level information for the available SDK releases. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMobileSdkReleasesResponse')

const ListMobileSdkReleasesRequestSchema = z
  .object({
    Platform: PlatformSchema.and(
      z.any().openapi({ description: 'The device platform to retrieve the list for.' }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Platform'], title: 'ListMobileSdkReleasesRequest' })
  .openapi('ListMobileSdkReleasesRequest')

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
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    RegexPatternSets: RegexPatternSetSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of regex pattern sets. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRegexPatternSetsResponse')

const ListRegexPatternSetsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListRegexPatternSetsRequest' })
  .openapi('ListRegexPatternSetsRequest')

const ResourceArnsSchema = z.array(ResourceArnSchema).openapi('ResourceArns')

const ListResourcesForWebACLResponseSchema = z
  .object({
    ResourceArns: ResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description: 'The array of Amazon Resource Names (ARNs) of the associated resources.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesForWebACLResponse')

const ResourceTypeSchema = z
  .enum([
    'APPLICATION_LOAD_BALANCER',
    'API_GATEWAY',
    'APPSYNC',
    'COGNITO_USER_POOL',
    'APP_RUNNER_SERVICE',
  ])
  .openapi('ResourceType')

const ListResourcesForWebACLRequestSchema = z
  .object({
    WebACLArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the web ACL.' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Used for web ACLs that are scoped for regional applications. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <note> <p>If you don't provide a resource type, the call uses the resource type <code>APPLICATION_LOAD_BALANCER</code>. </p> </note> <p>Default: <code>APPLICATION_LOAD_BALANCER</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WebACLArn'], title: 'ListResourcesForWebACLRequest' })
  .openapi('ListResourcesForWebACLRequest')

const RuleGroupSummariesSchema = z.array(RuleGroupSummarySchema).openapi('RuleGroupSummaries')

const ListRuleGroupsResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    RuleGroups: RuleGroupSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of rule groups. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRuleGroupsResponse')

const ListRuleGroupsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListRuleGroupsRequest' })
  .openapi('ListRuleGroupsRequest')

const TagInfoForResourceSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The array of <a>Tag</a> objects defined for the resource. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console. </p>',
    required: [],
  })
  .openapi('TagInfoForResource')

const ListTagsForResourceResponseSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    TagInfoForResource: TagInfoForResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tagging definitions for the resource. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
    ResourceARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
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
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    WebACLs: WebACLSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of web ACLs. If you specified a <code>Limit</code> in your request, this might not be the full list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWebACLsResponse')

const ListWebACLsRequestSchema = z
  .object({
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    NextMarker: NextMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a <code>NextMarker</code> value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.',
        }),
    ).exactOptional(),
    Limit: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Scope'], title: 'ListWebACLsRequest' })
  .openapi('ListWebACLsRequest')

const PutLoggingConfigurationResponseSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutLoggingConfigurationResponse')

const PutLoggingConfigurationRequestSchema = z
  .object({
    LoggingConfiguration: LoggingConfigurationSchema.and(z.any().openapi({ description: '<p/>' })),
  })
  .openapi({ required: ['LoggingConfiguration'], title: 'PutLoggingConfigurationRequest' })
  .openapi('PutLoggingConfigurationRequest')

const WAFServiceLinkedRoleErrorExceptionSchema = z
  .any()
  .openapi('WAFServiceLinkedRoleErrorException')

const WAFLogDestinationPermissionIssueExceptionSchema = z
  .any()
  .openapi('WAFLogDestinationPermissionIssueException')

const PutManagedRuleSetVersionsResponseSchema = z
  .object({
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutManagedRuleSetVersionsResponse')

const VersionToPublishSchema = z
  .object({
    AssociatedRuleGroupArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the vendor's rule group that's used in the published managed rule group version. ",
        }),
    ).exactOptional(),
    ForecastedLifetime: TimeWindowDaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time the vendor expects this version of the managed rule group to last, in days. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>",
    required: [],
  })
  .openapi('VersionToPublish')

const VersionsToPublishSchema = z
  .record(z.string(), VersionToPublishSchema)
  .openapi('VersionsToPublish')

const PutManagedRuleSetVersionsRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p> <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
    RecommendedVersion: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the named managed rule group that you'd like your customers to choose, from among your version offerings. ",
        }),
    ).exactOptional(),
    VersionsToPublish: VersionsToPublishSchema.and(
      z
        .any()
        .openapi({
          description:
            'The versions of the named managed rule group that you want to offer to your customers. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'LockToken'],
    title: 'PutManagedRuleSetVersionsRequest',
  })
  .openapi('PutManagedRuleSetVersionsRequest')

const PutPermissionPolicyResponseSchema = z.object({}).openapi('PutPermissionPolicyResponse')

const PutPermissionPolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the <a>RuleGroup</a> to which you want to attach the policy.',
        }),
    ),
    Policy: PolicyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The policy to attach to the specified rule group. </p> <p>The policy specifications must conform to the following:</p> <ul> <li> <p>The policy must be composed using IAM Policy version 2012-10-17.</p> </li> <li> <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p> <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and <code>wafv2:PutFirewallManagerRuleGroups</code> and may optionally specify <code>wafv2:GetRuleGroup</code>. WAF rejects any extra actions or wildcard actions in the policy.</p> </li> <li> <p>The policy must not include a <code>Resource</code> parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p>',
        }),
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
    ResourceARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of key:value pairs to associate with the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of keys identifying the tags to disassociate from the resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateIPSetResponseSchema = z
  .object({
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateIPSetResponse')

const UpdateIPSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the IP set that helps with identification. ' }),
    ).exactOptional(),
    Addresses: IPAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p> <p>Example address strings: </p> <ul> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>Example JSON <code>Addresses</code> specifications: </p> <ul> <li> <p>Empty array: <code>"Addresses": []</code> </p> </li> <li> <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code> </p> </li> <li> <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code> </p> </li> <li> <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p> </li> </ul>',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'Addresses', 'LockToken'],
    title: 'UpdateIPSetRequest',
  })
  .openapi('UpdateIPSetRequest')

const UpdateManagedRuleSetVersionExpiryDateResponseSchema = z
  .object({
    ExpiringVersion: VersionKeyStringSchema.and(
      z.any().openapi({ description: 'The version that is set to expire. ' }),
    ).exactOptional(),
    ExpiryTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time that the version will expire. </p> <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>',
        }),
    ).exactOptional(),
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateManagedRuleSetVersionExpiryDateResponse')

const UpdateManagedRuleSetVersionExpiryDateRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p> <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
    VersionToExpire: VersionKeyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version that you want to remove from your list of offerings for the named managed rule group. ',
        }),
    ),
    ExpiryTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time that you want the version to expire.</p> <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'LockToken', 'VersionToExpire', 'ExpiryTimestamp'],
    title: 'UpdateManagedRuleSetVersionExpiryDateRequest',
  })
  .openapi('UpdateManagedRuleSetVersionExpiryDateRequest')

const UpdateRegexPatternSetResponseSchema = z
  .object({
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRegexPatternSetResponse')

const UpdateRegexPatternSetRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the set. You cannot change the name after you create the set.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the set that helps with identification. ' }),
    ).exactOptional(),
    RegularExpressionList: RegularExpressionListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'RegularExpressionList', 'LockToken'],
    title: 'UpdateRegexPatternSetRequest',
  })
  .openapi('UpdateRegexPatternSetRequest')

const UpdateRuleGroupResponseSchema = z
  .object({
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRuleGroupResponse')

const UpdateRuleGroupRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the rule group. You cannot change the name of a rule group after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the rule group that helps with identification. ',
        }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'VisibilityConfig', 'LockToken'],
    title: 'UpdateRuleGroupRequest',
  })
  .openapi('UpdateRuleGroupRequest')

const UpdateWebACLResponseSchema = z
  .object({
    NextLockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebACLResponse')

const UpdateWebACLRequestSchema = z
  .object({
    Name: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the web ACL. You cannot change the name of a web ACL after you create it.',
        }),
    ),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p> <ul> <li> <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p> </li> <li> <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p> </li> </ul>',
        }),
    ),
    Id: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ),
    DefaultAction: DefaultActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. ',
        }),
    ),
    Description: EntityDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the web ACL that helps with identification. ' }),
    ).exactOptional(),
    Rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>Rule</a> statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them. ',
        }),
    ).exactOptional(),
    VisibilityConfig: VisibilityConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines and enables Amazon CloudWatch metrics and web request sample collection. ',
        }),
    ),
    LockToken: LockTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. ',
        }),
    ),
    CustomResponseBodies: CustomResponseBodiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    CaptchaConfig: CaptchaConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. ",
        }),
    ).exactOptional(),
    ChallengeConfig: ChallengeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how WAF should handle challenge evaluations for rules that don't have their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. ",
        }),
    ).exactOptional(),
    TokenDomains: TokenDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don\'t specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource\'s host domain plus all domains in the token domain list, including their prefixed subdomains.</p> <p>Example JSON: <code>"TokenDomains": { "mywebsite.com", "myotherwebsite.com" }</code> </p> <p>Public suffixes aren\'t allowed. For example, you can\'t use <code>usa.gov</code> or <code>co.uk</code> as token domains.</p>',
        }),
    ).exactOptional(),
    AssociationConfig: AssociationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Scope', 'Id', 'DefaultAction', 'VisibilityConfig', 'LockToken'],
    title: 'UpdateWebACLRequest',
  })
  .openapi('UpdateWebACLRequest')

const AssociatedResourceTypeSchema = z.literal('CLOUDFRONT').openapi('AssociatedResourceType')

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

export const postXAmzTargetAWSWAF20190729AssociateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.AssociateWebACL',
  description:
    '<p>Associates a web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>For Amazon CloudFront, don\'t use this call. Instead, use your CloudFront distribution configuration. To associate a web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront Developer Guide</i>. </p> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>',
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
        .literal('AWSWAF_20190729.AssociateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.AssociateWebACL'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CheckCapacityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CheckCapacity',
  description:
    '<p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a <a>RuleGroup</a> or <a>WebACL</a>. </p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>',
  operationId: 'CheckCapacity',
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
        .literal('AWSWAF_20190729.CheckCapacity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CheckCapacity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckCapacityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckCapacityResponseSchema } },
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
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
    },
    485: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    486: {
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
    487: {
      description: 'WAFExpiredManagedRuleGroupVersionException',
      content: { 'application/json': { schema: WAFExpiredManagedRuleGroupVersionExceptionSchema } },
    },
    488: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CreateAPIKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CreateAPIKey',
  description:
    '<p>Creates an API key for use in the integration of the CAPTCHA API in your JavaScript client applications. The integration lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> <p>The CAPTCHA API requires a key that authorizes CAPTCHA use from the client application domain. You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration. </p>',
  operationId: 'CreateAPIKey',
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
        .literal('AWSWAF_20190729.CreateAPIKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CreateAPIKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAPIKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAPIKeyResponseSchema } },
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
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CreateIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CreateIPSet',
  description:
    "Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses. ",
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
        .literal('AWSWAF_20190729.CreateIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CreateIPSet'] },
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
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    483: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CreateRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet',
  description:
    'Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request component for the specified patterns.',
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
        .literal('AWSWAF_20190729.CreateRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CreateRegexPatternSet'] },
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
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    483: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CreateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup',
  description:
    '<p>Creates a <a>RuleGroup</a> per the specifications provided. </p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>',
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
        .literal('AWSWAF_20190729.CreateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CreateRuleGroup'] },
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
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    483: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    485: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
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
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
    489: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    490: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729CreateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.CreateWebACL',
  description:
    '<p>Creates a <a>WebACL</a> per the specifications provided.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p>',
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
        .literal('AWSWAF_20190729.CreateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.CreateWebACL'] },
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
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    483: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
    },
    486: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    487: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    488: {
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    489: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    490: {
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
    491: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    492: {
      description: 'WAFConfigurationWarningException',
      content: { 'application/json': { schema: WAFConfigurationWarningExceptionSchema } },
    },
    493: {
      description: 'WAFExpiredManagedRuleGroupVersionException',
      content: { 'application/json': { schema: WAFExpiredManagedRuleGroupVersionExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups',
  description:
    '<p>Deletes all rule groups that are managed by Firewall Manager for the specified web ACL. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p>',
  operationId: 'DeleteFirewallManagerRuleGroups',
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
        .literal('AWSWAF_20190729.DeleteFirewallManagerRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteFirewallManagerRuleGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallManagerRuleGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallManagerRuleGroupsResponseSchema } },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteIPSet',
  description: 'Deletes the specified <a>IPSet</a>. ',
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
        .literal('AWSWAF_20190729.DeleteIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteIPSet'] },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFAssociatedItemException',
      content: { 'application/json': { schema: WAFAssociatedItemExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration',
  description: 'Deletes the <a>LoggingConfiguration</a> from the specified web ACL.',
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
        .literal('AWSWAF_20190729.DeleteLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteLoggingConfiguration'] },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeletePermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy',
  description:
    '<p>Permanently deletes an IAM policy from the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>',
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
        .literal('AWSWAF_20190729.DeletePermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeletePermissionPolicy'] },
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
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet',
  description: 'Deletes the specified <a>RegexPatternSet</a>.',
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
        .literal('AWSWAF_20190729.DeleteRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteRegexPatternSet'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFAssociatedItemException',
      content: { 'application/json': { schema: WAFAssociatedItemExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup',
  description: 'Deletes the specified <a>RuleGroup</a>.',
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
        .literal('AWSWAF_20190729.DeleteRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteRuleGroup'] },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFAssociatedItemException',
      content: { 'application/json': { schema: WAFAssociatedItemExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DeleteWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DeleteWebACL',
  description:
    '<p>Deletes the specified <a>WebACL</a>. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p> <note> <p>Before deleting any web ACL, first disassociate it from all resources.</p> <ul> <li> <p>To retrieve a list of the resources that are associated with a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, use the CloudFront call <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> <li> <p>To disassociate a resource from a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>DisassociateWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> </ul> </note>',
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
        .literal('AWSWAF_20190729.DeleteWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DeleteWebACL'] },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFAssociatedItemException',
      content: { 'application/json': { schema: WAFAssociatedItemExceptionSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DescribeManagedRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup',
  description:
    'Provides high-level information for a managed rule group, including descriptions of the rules. ',
  operationId: 'DescribeManagedRuleGroup',
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
        .literal('AWSWAF_20190729.DescribeManagedRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DescribeManagedRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeManagedRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeManagedRuleGroupResponseSchema } },
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
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
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
      description: 'WAFExpiredManagedRuleGroupVersionException',
      content: { 'application/json': { schema: WAFExpiredManagedRuleGroupVersionExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729DisassociateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL',
  description:
    '<p>Disassociates the specified regional application resource from any existing web ACL association. A resource can have at most one web ACL association. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p> <p>For Amazon CloudFront, don\'t use this call. Instead, use your CloudFront distribution configuration. To disassociate a web ACL, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p>',
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
        .literal('AWSWAF_20190729.DisassociateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.DisassociateWebACL'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl',
  description:
    '<p>Generates a presigned download URL for the specified release of the mobile SDK.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
  operationId: 'GenerateMobileSdkReleaseUrl',
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
        .literal('AWSWAF_20190729.GenerateMobileSdkReleaseUrl')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GenerateMobileSdkReleaseUrl'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GenerateMobileSdkReleaseUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateMobileSdkReleaseUrlResponseSchema } },
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
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetDecryptedAPIKeyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey',
  description:
    'Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. ',
  operationId: 'GetDecryptedAPIKey',
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
        .literal('AWSWAF_20190729.GetDecryptedAPIKey')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetDecryptedAPIKey'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDecryptedAPIKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDecryptedAPIKeyResponseSchema } },
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
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetIPSet',
  description: 'Retrieves the specified <a>IPSet</a>.',
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
        .literal('AWSWAF_20190729.GetIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetIPSet'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration',
  description: 'Returns the <a>LoggingConfiguration</a> for the specified web ACL.',
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
        .literal('AWSWAF_20190729.GetLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetLoggingConfiguration'] },
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
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetManagedRuleSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet',
  description:
    '<p>Retrieves the specified managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
  operationId: 'GetManagedRuleSet',
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
        .literal('AWSWAF_20190729.GetManagedRuleSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetManagedRuleSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetManagedRuleSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetManagedRuleSetResponseSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetMobileSdkReleaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease',
  description:
    '<p>Retrieves information for the specified mobile SDK release, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
  operationId: 'GetMobileSdkRelease',
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
        .literal('AWSWAF_20190729.GetMobileSdkRelease')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetMobileSdkRelease'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMobileSdkReleaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMobileSdkReleaseResponseSchema } },
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
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetPermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy',
  description:
    '<p>Returns the IAM policy that is attached to the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>',
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
        .literal('AWSWAF_20190729.GetPermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetPermissionPolicy'] },
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
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys',
  description:
    "<p>Retrieves the keys that are currently blocked by a rate-based rule instance. The maximum number of managed keys that can be blocked for a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p> <p>For a rate-based rule that you've defined inside a rule group, provide the name of the rule group reference statement in your request, in addition to the rate-based rule name and the web ACL name. </p> <p>WAF monitors web requests and manages keys independently for each unique combination of web ACL, optional rule group, and rate-based rule. For example, if you define a rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF monitors web requests and manages keys for that web ACL, rule group reference statement, and rate-based rule instance. If you use the same rule group in a second web ACL, WAF monitors web requests and manages keys for this second usage completely independent of your first. </p>",
  operationId: 'GetRateBasedStatementManagedKeys',
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
        .literal('AWSWAF_20190729.GetRateBasedStatementManagedKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetRateBasedStatementManagedKeys'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRateBasedStatementManagedKeysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRateBasedStatementManagedKeysResponseSchema } },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet',
  description: 'Retrieves the specified <a>RegexPatternSet</a>.',
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
        .literal('AWSWAF_20190729.GetRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetRegexPatternSet'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetRuleGroup',
  description: 'Retrieves the specified <a>RuleGroup</a>.',
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
        .literal('AWSWAF_20190729.GetRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetRuleGroup'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetSampledRequestsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetSampledRequests',
  description:
    '<p>Gets detailed information about a specified number of requests--a sample--that WAF randomly selects from among the first 5,000 requests that your Amazon Web Services resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which WAF selected the requests in the sample.</p>',
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
        .literal('AWSWAF_20190729.GetSampledRequests')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetSampledRequests'] },
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
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetWebACL',
  description: 'Retrieves the specified <a>WebACL</a>.',
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
        .literal('AWSWAF_20190729.GetWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetWebACL'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729GetWebACLForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource',
  description: 'Retrieves the <a>WebACL</a> for the specified resource. ',
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
        .literal('AWSWAF_20190729.GetWebACLForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.GetWebACLForResource'] },
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
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListAPIKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListAPIKeys',
  description: "Retrieves a list of the API keys that you've defined for the specified scope. ",
  operationId: 'ListAPIKeys',
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
        .literal('AWSWAF_20190729.ListAPIKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListAPIKeys'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListAPIKeysRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAPIKeysResponseSchema } },
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
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions',
  description: 'Returns a list of the available versions for the specified managed rule group. ',
  operationId: 'ListAvailableManagedRuleGroupVersions',
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
        .literal('AWSWAF_20190729.ListAvailableManagedRuleGroupVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ListAvailableManagedRuleGroupVersionsRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListAvailableManagedRuleGroupVersionsResponseSchema },
      },
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
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups',
  description:
    "Retrieves an array of managed rule groups that are available for you to use. This list includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're subscribed to.",
  operationId: 'ListAvailableManagedRuleGroups',
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
        .literal('AWSWAF_20190729.ListAvailableManagedRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListAvailableManagedRuleGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAvailableManagedRuleGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAvailableManagedRuleGroupsResponseSchema } },
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
  },
})

export const postXAmzTargetAWSWAF20190729ListIPSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListIPSets',
  description: 'Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.',
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
        .literal('AWSWAF_20190729.ListIPSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListIPSets'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListLoggingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations',
  description: 'Retrieves an array of your <a>LoggingConfiguration</a> objects.',
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
        .literal('AWSWAF_20190729.ListLoggingConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListLoggingConfigurations'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListManagedRuleSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets',
  description:
    '<p>Retrieves the managed rule sets that you own. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
  operationId: 'ListManagedRuleSets',
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
        .literal('AWSWAF_20190729.ListManagedRuleSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListManagedRuleSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListManagedRuleSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListManagedRuleSetsResponseSchema } },
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
  },
})

export const postXAmzTargetAWSWAF20190729ListMobileSdkReleasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases',
  description:
    '<p>Retrieves a list of the available releases for the mobile SDK and the specified device platform. </p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>',
  operationId: 'ListMobileSdkReleases',
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
        .literal('AWSWAF_20190729.ListMobileSdkReleases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListMobileSdkReleases'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMobileSdkReleasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMobileSdkReleasesResponseSchema } },
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
  },
})

export const postXAmzTargetAWSWAF20190729ListRegexPatternSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets',
  description:
    'Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.',
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
        .literal('AWSWAF_20190729.ListRegexPatternSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListRegexPatternSets'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListResourcesForWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL',
  description:
    'Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of Amazon CloudFront resources, use the CloudFront call <code>ListDistributionsByWebACLId</code>. ',
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
        .literal('AWSWAF_20190729.ListResourcesForWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListResourcesForWebACL'] },
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
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListRuleGroups',
  description:
    'Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. ',
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
        .literal('AWSWAF_20190729.ListRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListRuleGroups'] },
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
    481: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListTagsForResource',
  description:
    '<p>Retrieves the <a>TagInfoForResource</a> for the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console. </p>',
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
        .literal('AWSWAF_20190729.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListTagsForResource'] },
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
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    484: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729ListWebACLsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.ListWebACLs',
  description:
    'Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.',
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
        .literal('AWSWAF_20190729.ListWebACLs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.ListWebACLs'] },
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
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729PutLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration',
  description:
    '<p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided. </p> <note> <p>This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. </p> <p>To modify an existing logging configuration, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetLoggingConfiguration</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete logging configuration specification to this call</p> </li> </ol> </note> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p>',
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
        .literal('AWSWAF_20190729.PutLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.PutLoggingConfiguration'] },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    483: {
      description: 'WAFServiceLinkedRoleErrorException',
      content: { 'application/json': { schema: WAFServiceLinkedRoleErrorExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    486: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    487: {
      description: 'WAFLogDestinationPermissionIssueException',
      content: { 'application/json': { schema: WAFLogDestinationPermissionIssueExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions',
  description:
    '<p>Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using. </p> <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>',
  operationId: 'PutManagedRuleSetVersions',
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
        .literal('AWSWAF_20190729.PutManagedRuleSetVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.PutManagedRuleSetVersions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutManagedRuleSetVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutManagedRuleSetVersionsResponseSchema } },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729PutPermissionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy',
  description:
    '<p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p> <p>You must be the owner of the rule group to perform this operation.</p> <p>This action is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same Region.</p> </li> <li> <p>The user making the request must be the owner of the rule group.</p> </li> </ul>',
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
        .literal('AWSWAF_20190729.PutPermissionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.PutPermissionPolicy'] },
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
      description: 'WAFNonexistentItemException',
      content: { 'application/json': { schema: WAFNonexistentItemExceptionSchema } },
    },
    481: {
      description: 'WAFInternalErrorException',
      content: { 'application/json': { schema: WAFInternalErrorExceptionSchema } },
    },
    482: {
      description: 'WAFInvalidParameterException',
      content: { 'application/json': { schema: WAFInvalidParameterExceptionSchema } },
    },
    483: {
      description: 'WAFInvalidPermissionPolicyException',
      content: { 'application/json': { schema: WAFInvalidPermissionPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.TagResource',
  description:
    '<p>Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console. </p>',
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
        .literal('AWSWAF_20190729.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.TagResource'] },
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
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    485: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UntagResource',
  description:
    'Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each Amazon Web Services resource.',
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
        .literal('AWSWAF_20190729.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.UntagResource'] },
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
      description: 'WAFTagOperationException',
      content: { 'application/json': { schema: WAFTagOperationExceptionSchema } },
    },
    484: {
      description: 'WAFTagOperationInternalErrorException',
      content: { 'application/json': { schema: WAFTagOperationInternalErrorExceptionSchema } },
    },
    485: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UpdateIPSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UpdateIPSet',
  description:
    '<p>Updates the specified <a>IPSet</a>. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. </p> <p>To modify an IP set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetIPSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete IP set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>',
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
        .literal('AWSWAF_20190729.UpdateIPSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.UpdateIPSet'] },
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
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    484: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate',
  description:
    '<p>Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>',
  operationId: 'UpdateManagedRuleSetVersionExpiryDate',
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
        .literal('AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateManagedRuleSetVersionExpiryDateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateManagedRuleSetVersionExpiryDateResponseSchema },
      },
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
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    484: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UpdateRegexPatternSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet',
  description:
    '<p>Updates the specified <a>RegexPatternSet</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. </p> <p>To modify a regex pattern set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRegexPatternSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete regex pattern set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>',
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
        .literal('AWSWAF_20190729.UpdateRegexPatternSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.UpdateRegexPatternSet'] },
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
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    484: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UpdateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup',
  description:
    '<p>Updates the specified <a>RuleGroup</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p> <p>To modify a rule group, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRuleGroup</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete rule group specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>',
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
        .literal('AWSWAF_20190729.UpdateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.UpdateRuleGroup'] },
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
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    484: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    487: {
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
    488: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    489: {
      description: 'WAFConfigurationWarningException',
      content: { 'application/json': { schema: WAFConfigurationWarningExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSWAF20190729UpdateWebACLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSWAF_20190729.UpdateWebACL',
  description:
    '<p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p> <p>To modify a web ACL, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetWebACL</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete web ACL specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, or an App Runner service. </p>',
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
        .literal('AWSWAF_20190729.UpdateWebACL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSWAF_20190729.UpdateWebACL'] },
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
      description: 'WAFDuplicateItemException',
      content: { 'application/json': { schema: WAFDuplicateItemExceptionSchema } },
    },
    484: {
      description: 'WAFOptimisticLockException',
      content: { 'application/json': { schema: WAFOptimisticLockExceptionSchema } },
    },
    485: {
      description: 'WAFLimitsExceededException',
      content: { 'application/json': { schema: WAFLimitsExceededExceptionSchema } },
    },
    486: {
      description: 'WAFInvalidResourceException',
      content: { 'application/json': { schema: WAFInvalidResourceExceptionSchema } },
    },
    487: {
      description: 'WAFUnavailableEntityException',
      content: { 'application/json': { schema: WAFUnavailableEntityExceptionSchema } },
    },
    488: {
      description: 'WAFSubscriptionNotFoundException',
      content: { 'application/json': { schema: WAFSubscriptionNotFoundExceptionSchema } },
    },
    489: {
      description: 'WAFInvalidOperationException',
      content: { 'application/json': { schema: WAFInvalidOperationExceptionSchema } },
    },
    490: {
      description: 'WAFExpiredManagedRuleGroupVersionException',
      content: { 'application/json': { schema: WAFExpiredManagedRuleGroupVersionExceptionSchema } },
    },
    491: {
      description: 'WAFConfigurationWarningException',
      content: { 'application/json': { schema: WAFConfigurationWarningExceptionSchema } },
    },
  },
})
