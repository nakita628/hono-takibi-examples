import { createRoute, z } from '@hono/zod-openapi'

const CertificateArnSchema = z.string().openapi('CertificateArn')

const DefaultSchema = z.boolean().openapi('Default')

const CertificateSchema = z
  .object({
    CertificateArn: CertificateArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
    ).exactOptional(),
    IsDefault: DefaultSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an SSL server certificate.', required: [] })
  .openapi('Certificate')

const CertificateListSchema = z.array(CertificateSchema).openapi('CertificateList')

const AddListenerCertificatesOutputSchema = z
  .object({
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the certificates in the certificate list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddListenerCertificatesOutput')

const ListenerNotFoundExceptionSchema = z.any().openapi('ListenerNotFoundException')

const TooManyCertificatesExceptionSchema = z.any().openapi('TooManyCertificatesException')

const CertificateNotFoundExceptionSchema = z.any().openapi('CertificateNotFoundException')

const AddTagsOutputSchema = z.object({}).openapi('AddTagsOutput')

const ResourceArnSchema = z.string().openapi('ResourceArn')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Key'], description: 'Information about a tag.' })
  .openapi('Tag')

const DuplicateTagKeysExceptionSchema = z.any().openapi('DuplicateTagKeysException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const LoadBalancerNotFoundExceptionSchema = z.any().openapi('LoadBalancerNotFoundException')

const TargetGroupNotFoundExceptionSchema = z.any().openapi('TargetGroupNotFoundException')

const RuleNotFoundExceptionSchema = z.any().openapi('RuleNotFoundException')

const ListenerArnSchema = z.string().openapi('ListenerArn')

const LoadBalancerArnSchema = z.string().openapi('LoadBalancerArn')

const PortSchema = z.int().min(1).max(65535).openapi('Port')

const ProtocolEnumSchema = z
  .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
  .openapi('ProtocolEnum')

const SslPolicyNameSchema = z.string().openapi('SslPolicyName')

const ActionTypeEnumSchema = z
  .enum(['forward', 'authenticate-oidc', 'authenticate-cognito', 'redirect', 'fixed-response'])
  .openapi('ActionTypeEnum')

const TargetGroupArnSchema = z.string().openapi('TargetGroupArn')

const AuthenticateOidcActionIssuerSchema = z.string().openapi('AuthenticateOidcActionIssuer')

const AuthenticateOidcActionAuthorizationEndpointSchema = z
  .string()
  .openapi('AuthenticateOidcActionAuthorizationEndpoint')

const AuthenticateOidcActionTokenEndpointSchema = z
  .string()
  .openapi('AuthenticateOidcActionTokenEndpoint')

const AuthenticateOidcActionUserInfoEndpointSchema = z
  .string()
  .openapi('AuthenticateOidcActionUserInfoEndpoint')

const AuthenticateOidcActionClientIdSchema = z.string().openapi('AuthenticateOidcActionClientId')

const AuthenticateOidcActionClientSecretSchema = z
  .string()
  .openapi('AuthenticateOidcActionClientSecret')

const AuthenticateOidcActionSessionCookieNameSchema = z
  .string()
  .openapi('AuthenticateOidcActionSessionCookieName')

const AuthenticateOidcActionScopeSchema = z.string().openapi('AuthenticateOidcActionScope')

const AuthenticateOidcActionSessionTimeoutSchema = z
  .int()
  .openapi('AuthenticateOidcActionSessionTimeout')

const AuthenticateOidcActionAuthenticationRequestParamValueSchema = z
  .string()
  .openapi('AuthenticateOidcActionAuthenticationRequestParamValue')

const AuthenticateOidcActionAuthenticationRequestExtraParamsSchema = z
  .record(z.string(), AuthenticateOidcActionAuthenticationRequestParamValueSchema)
  .openapi('AuthenticateOidcActionAuthenticationRequestExtraParams')

const AuthenticateOidcActionConditionalBehaviorEnumSchema = z
  .enum(['deny', 'allow', 'authenticate'])
  .openapi('AuthenticateOidcActionConditionalBehaviorEnum')

const AuthenticateOidcActionUseExistingClientSecretSchema = z
  .boolean()
  .openapi('AuthenticateOidcActionUseExistingClientSecret')

const AuthenticateOidcActionConfigSchema = z
  .object({
    Issuer: AuthenticateOidcActionIssuerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
        }),
    ),
    AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
        }),
    ),
    TokenEndpoint: AuthenticateOidcActionTokenEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
        }),
    ),
    UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
        }),
    ),
    ClientId: AuthenticateOidcActionClientIdSchema.and(
      z.any().openapi({ description: 'The OAuth 2.0 client identifier.' }),
    ),
    ClientSecret: AuthenticateOidcActionClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
        }),
    ).exactOptional(),
    SessionCookieName: AuthenticateOidcActionSessionCookieNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
        }),
    ).exactOptional(),
    Scope: AuthenticateOidcActionScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
        }),
    ).exactOptional(),
    SessionTimeout: AuthenticateOidcActionSessionTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
        }),
    ).exactOptional(),
    AuthenticationRequestExtraParams:
      AuthenticateOidcActionAuthenticationRequestExtraParamsSchema.and(
        z
          .any()
          .openapi({
            description:
              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
          }),
      ).exactOptional(),
    OnUnauthenticatedRequest: AuthenticateOidcActionConditionalBehaviorEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
        }),
    ).exactOptional(),
    UseExistingClientSecret: AuthenticateOidcActionUseExistingClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Issuer', 'AuthorizationEndpoint', 'TokenEndpoint', 'UserInfoEndpoint', 'ClientId'],
    description:
      'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
  })
  .openapi('AuthenticateOidcActionConfig')

const AuthenticateCognitoActionUserPoolArnSchema = z
  .string()
  .openapi('AuthenticateCognitoActionUserPoolArn')

const AuthenticateCognitoActionUserPoolClientIdSchema = z
  .string()
  .openapi('AuthenticateCognitoActionUserPoolClientId')

const AuthenticateCognitoActionUserPoolDomainSchema = z
  .string()
  .openapi('AuthenticateCognitoActionUserPoolDomain')

const AuthenticateCognitoActionSessionCookieNameSchema = z
  .string()
  .openapi('AuthenticateCognitoActionSessionCookieName')

const AuthenticateCognitoActionScopeSchema = z.string().openapi('AuthenticateCognitoActionScope')

const AuthenticateCognitoActionSessionTimeoutSchema = z
  .int()
  .openapi('AuthenticateCognitoActionSessionTimeout')

const AuthenticateCognitoActionAuthenticationRequestParamValueSchema = z
  .string()
  .openapi('AuthenticateCognitoActionAuthenticationRequestParamValue')

const AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema = z
  .record(z.string(), AuthenticateCognitoActionAuthenticationRequestParamValueSchema)
  .openapi('AuthenticateCognitoActionAuthenticationRequestExtraParams')

const AuthenticateCognitoActionConditionalBehaviorEnumSchema = z
  .enum(['deny', 'allow', 'authenticate'])
  .openapi('AuthenticateCognitoActionConditionalBehaviorEnum')

const AuthenticateCognitoActionConfigSchema = z
  .object({
    UserPoolArn: AuthenticateCognitoActionUserPoolArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
        }),
    ),
    UserPoolClientId: AuthenticateCognitoActionUserPoolClientIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Cognito user pool client.' }),
    ),
    UserPoolDomain: AuthenticateCognitoActionUserPoolDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
        }),
    ),
    SessionCookieName: AuthenticateCognitoActionSessionCookieNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
        }),
    ).exactOptional(),
    Scope: AuthenticateCognitoActionScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
        }),
    ).exactOptional(),
    SessionTimeout: AuthenticateCognitoActionSessionTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
        }),
    ).exactOptional(),
    AuthenticationRequestExtraParams:
      AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema.and(
        z
          .any()
          .openapi({
            description:
              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
          }),
      ).exactOptional(),
    OnUnauthenticatedRequest: AuthenticateCognitoActionConditionalBehaviorEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
    description:
      'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
  })
  .openapi('AuthenticateCognitoActionConfig')

const ActionOrderSchema = z.int().min(1).max(50000).openapi('ActionOrder')

const RedirectActionProtocolSchema = z
  .string()
  .regex(/^(HTTPS?|#\{protocol\})$/)
  .openapi('RedirectActionProtocol')

const RedirectActionPortSchema = z.string().openapi('RedirectActionPort')

const RedirectActionHostSchema = z.string().min(1).max(128).openapi('RedirectActionHost')

const RedirectActionPathSchema = z.string().min(1).max(128).openapi('RedirectActionPath')

const RedirectActionQuerySchema = z.string().min(0).max(128).openapi('RedirectActionQuery')

const RedirectActionStatusCodeEnumSchema = z
  .enum(['HTTP_301', 'HTTP_302'])
  .openapi('RedirectActionStatusCodeEnum')

const RedirectActionConfigSchema = z
  .object({
    Protocol: RedirectActionProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.',
        }),
    ).exactOptional(),
    Port: RedirectActionPortSchema.and(
      z
        .any()
        .openapi({ description: 'The port. You can specify a value from 1 to 65535 or #{port}.' }),
    ).exactOptional(),
    Host: RedirectActionHostSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hostname. This component is not percent-encoded. The hostname can contain #{host}.',
        }),
    ).exactOptional(),
    Path: RedirectActionPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.',
        }),
    ).exactOptional(),
    Query: RedirectActionQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.',
        }),
    ).exactOptional(),
    StatusCode: RedirectActionStatusCodeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).',
        }),
    ),
  })
  .openapi({
    required: ['StatusCode'],
    description:
      '<p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p>',
  })
  .openapi('RedirectActionConfig')

const FixedResponseActionMessageSchema = z
  .string()
  .min(0)
  .max(1024)
  .openapi('FixedResponseActionMessage')

const FixedResponseActionStatusCodeSchema = z
  .string()
  .regex(/^(2|4|5)\d\d$/)
  .openapi('FixedResponseActionStatusCode')

const FixedResponseActionContentTypeSchema = z
  .string()
  .min(0)
  .max(32)
  .openapi('FixedResponseActionContentType')

const FixedResponseActionConfigSchema = z
  .object({
    MessageBody: FixedResponseActionMessageSchema.and(
      z.any().openapi({ description: 'The message.' }),
    ).exactOptional(),
    StatusCode: FixedResponseActionStatusCodeSchema.and(
      z.any().openapi({ description: 'The HTTP response code (2XX, 4XX, or 5XX).' }),
    ),
    ContentType: FixedResponseActionContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content type.</p> <p>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StatusCode'],
    description: 'Information about an action that returns a custom HTTP response.',
  })
  .openapi('FixedResponseActionConfig')

const TargetGroupWeightSchema = z.int().openapi('TargetGroupWeight')

const TargetGroupTupleSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ).exactOptional(),
    Weight: TargetGroupWeightSchema.and(
      z.any().openapi({ description: 'The weight. The range is 0 to 999.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about how traffic will be distributed between multiple target groups in a forward rule.',
    required: [],
  })
  .openapi('TargetGroupTuple')

const TargetGroupListSchema = z.array(TargetGroupTupleSchema).openapi('TargetGroupList')

const TargetGroupStickinessEnabledSchema = z.boolean().openapi('TargetGroupStickinessEnabled')

const TargetGroupStickinessDurationSecondsSchema = z
  .int()
  .openapi('TargetGroupStickinessDurationSeconds')

const TargetGroupStickinessConfigSchema = z
  .object({
    Enabled: TargetGroupStickinessEnabledSchema.and(
      z.any().openapi({ description: 'Indicates whether target group stickiness is enabled.' }),
    ).exactOptional(),
    DurationSeconds: TargetGroupStickinessDurationSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the target group stickiness for a rule.',
    required: [],
  })
  .openapi('TargetGroupStickinessConfig')

const ForwardActionConfigSchema = z
  .object({
    TargetGroups: TargetGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target groups. For Network Load Balancers, you can specify a single target group.',
        }),
    ).exactOptional(),
    TargetGroupStickinessConfig: TargetGroupStickinessConfigSchema.and(
      z.any().openapi({ description: 'The target group stickiness for the rule.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a forward action.', required: [] })
  .openapi('ForwardActionConfig')

const ActionSchema = z
  .object({
    Type: ActionTypeEnumSchema.and(z.any().openapi({ description: 'The type of action.' })),
    TargetGroupArn: TargetGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
        }),
    ).exactOptional(),
    AuthenticateOidcConfig: AuthenticateOidcActionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
        }),
    ).exactOptional(),
    AuthenticateCognitoConfig: AuthenticateCognitoActionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
        }),
    ).exactOptional(),
    Order: ActionOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
        }),
    ).exactOptional(),
    RedirectConfig: RedirectActionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
        }),
    ).exactOptional(),
    FixedResponseConfig: FixedResponseActionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
        }),
    ).exactOptional(),
    ForwardConfig: ForwardActionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
  })
  .openapi('Action')

const ActionsSchema = z.array(ActionSchema).openapi('Actions')

const AlpnPolicyValueSchema = z.string().openapi('AlpnPolicyValue')

const AlpnPolicyNameSchema = z.array(AlpnPolicyValueSchema).openapi('AlpnPolicyName')

const ListenerSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ).exactOptional(),
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ).exactOptional(),
    Port: PortSchema.and(
      z.any().openapi({ description: 'The port on which the load balancer is listening.' }),
    ).exactOptional(),
    Protocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The protocol for connections from clients to the load balancer.',
        }),
    ).exactOptional(),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description: '[HTTPS or TLS listener] The default certificate for the listener.',
        }),
    ).exactOptional(),
    SslPolicy: SslPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTPS or TLS listener] The security policy that defines which protocols and ciphers are supported.',
        }),
    ).exactOptional(),
    DefaultActions: ActionsSchema.and(
      z.any().openapi({ description: 'The default actions for the listener.' }),
    ).exactOptional(),
    AlpnPolicy: AlpnPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a listener.', required: [] })
  .openapi('Listener')

const ListenersSchema = z.array(ListenerSchema).openapi('Listeners')

const CreateListenerOutputSchema = z
  .object({
    Listeners: ListenersSchema.and(
      z.any().openapi({ description: 'Information about the listener.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Listeners: [
        {
          Certificates: [
            { CertificateArn: 'arn:aws:iam::123456789012:server-certificate/my-server-cert' },
          ],
          DefaultActions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          ListenerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2',
          LoadBalancerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          Port: 443,
          Protocol: 'HTTPS',
          SslPolicy: 'ELBSecurityPolicy-2015-05',
        },
      ],
    },
    required: [],
  })
  .openapi('CreateListenerOutput')

const DuplicateListenerExceptionSchema = z.any().openapi('DuplicateListenerException')

const TooManyListenersExceptionSchema = z.any().openapi('TooManyListenersException')

const TargetGroupAssociationLimitExceptionSchema = z
  .any()
  .openapi('TargetGroupAssociationLimitException')

const InvalidConfigurationRequestExceptionSchema = z
  .any()
  .openapi('InvalidConfigurationRequestException')

const IncompatibleProtocolsExceptionSchema = z.any().openapi('IncompatibleProtocolsException')

const SSLPolicyNotFoundExceptionSchema = z.any().openapi('SSLPolicyNotFoundException')

const UnsupportedProtocolExceptionSchema = z.any().openapi('UnsupportedProtocolException')

const TooManyRegistrationsForTargetIdExceptionSchema = z
  .any()
  .openapi('TooManyRegistrationsForTargetIdException')

const TooManyTargetsExceptionSchema = z.any().openapi('TooManyTargetsException')

const TooManyActionsExceptionSchema = z.any().openapi('TooManyActionsException')

const InvalidLoadBalancerActionExceptionSchema = z
  .any()
  .openapi('InvalidLoadBalancerActionException')

const TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema = z
  .any()
  .openapi('TooManyUniqueTargetGroupsPerLoadBalancerException')

const ALPNPolicyNotSupportedExceptionSchema = z.any().openapi('ALPNPolicyNotSupportedException')

const DNSNameSchema = z.string().openapi('DNSName')

const CanonicalHostedZoneIdSchema = z.string().openapi('CanonicalHostedZoneId')

const CreatedTimeSchema = z.iso.datetime({ offset: true }).openapi('CreatedTime')

const LoadBalancerNameSchema = z.string().openapi('LoadBalancerName')

const LoadBalancerSchemeEnumSchema = z
  .enum(['internet-facing', 'internal'])
  .openapi('LoadBalancerSchemeEnum')

const VpcIdSchema = z.string().openapi('VpcId')

const LoadBalancerStateEnumSchema = z
  .enum(['active', 'provisioning', 'active_impaired', 'failed'])
  .openapi('LoadBalancerStateEnum')

const StateReasonSchema = z.string().openapi('StateReason')

const LoadBalancerStateSchema = z
  .object({
    Code: LoadBalancerStateEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state code. The initial state of the load balancer is <code>provisioning</code>. After the load balancer is fully set up and ready to route traffic, its state is <code>active</code>. If load balancer is routing traffic but does not have the resources it needs to scale, its state is<code>active_impaired</code>. If the load balancer could not be set up, its state is <code>failed</code>.',
        }),
    ).exactOptional(),
    Reason: StateReasonSchema.and(
      z.any().openapi({ description: 'A description of the state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the state of the load balancer.', required: [] })
  .openapi('LoadBalancerState')

const LoadBalancerTypeEnumSchema = z
  .enum(['application', 'network', 'gateway'])
  .openapi('LoadBalancerTypeEnum')

const ZoneNameSchema = z.string().openapi('ZoneName')

const SubnetIdSchema = z.string().openapi('SubnetId')

const OutpostIdSchema = z.string().openapi('OutpostId')

const IpAddressSchema = z.string().openapi('IpAddress')

const AllocationIdSchema = z.string().openapi('AllocationId')

const PrivateIPv4AddressSchema = z.string().openapi('PrivateIPv4Address')

const IPv6AddressSchema = z.string().openapi('IPv6Address')

const LoadBalancerAddressSchema = z
  .object({
    IpAddress: IpAddressSchema.and(
      z.any().openapi({ description: 'The static IP address.' }),
    ).exactOptional(),
    AllocationId: AllocationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] The allocation ID of the Elastic IP address for an internal-facing load balancer.',
        }),
    ).exactOptional(),
    PrivateIPv4Address: PrivateIPv4AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] The private IPv4 address for an internal load balancer.',
        }),
    ).exactOptional(),
    IPv6Address: IPv6AddressSchema.and(
      z.any().openapi({ description: '[Network Load Balancers] The IPv6 address.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a static IP address for a load balancer.',
    required: [],
  })
  .openapi('LoadBalancerAddress')

const LoadBalancerAddressesSchema = z
  .array(LoadBalancerAddressSchema)
  .openapi('LoadBalancerAddresses')

const AvailabilityZoneSchema = z
  .object({
    ZoneName: ZoneNameSchema.and(
      z.any().openapi({ description: 'The name of the Availability Zone.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the subnet. You can specify one subnet per Availability Zone.',
        }),
    ).exactOptional(),
    OutpostId: OutpostIdSchema.and(
      z
        .any()
        .openapi({
          description: '[Application Load Balancers on Outposts] The ID of the Outpost.',
        }),
    ).exactOptional(),
    LoadBalancerAddresses: LoadBalancerAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] If you need static IP addresses for your load balancer, you can specify one Elastic IP address per Availability Zone when you create an internal-facing load balancer. For internal load balancers, you can specify a private IP address from the IPv4 range of the subnet.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Availability Zone.', required: [] })
  .openapi('AvailabilityZone')

const AvailabilityZonesSchema = z.array(AvailabilityZoneSchema).openapi('AvailabilityZones')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const SecurityGroupsSchema = z.array(SecurityGroupIdSchema).openapi('SecurityGroups')

const IpAddressTypeSchema = z.enum(['ipv4', 'dualstack']).openapi('IpAddressType')

const CustomerOwnedIpv4PoolSchema = z
  .string()
  .regex(/^(ipv4pool-coip-)[a-zA-Z0-9]+$/)
  .max(256)
  .openapi('CustomerOwnedIpv4Pool')

const LoadBalancerSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ).exactOptional(),
    DNSName: DNSNameSchema.and(
      z.any().openapi({ description: 'The public DNS name of the load balancer.' }),
    ).exactOptional(),
    CanonicalHostedZoneId: CanonicalHostedZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Route 53 hosted zone associated with the load balancer.',
        }),
    ).exactOptional(),
    CreatedTime: CreatedTimeSchema.and(
      z.any().openapi({ description: 'The date and time the load balancer was created.' }),
    ).exactOptional(),
    LoadBalancerName: LoadBalancerNameSchema.and(
      z.any().openapi({ description: 'The name of the load balancer.' }),
    ).exactOptional(),
    Scheme: LoadBalancerSchemeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p>',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC for the load balancer.' }),
    ).exactOptional(),
    State: LoadBalancerStateSchema.and(
      z.any().openapi({ description: 'The state of the load balancer.' }),
    ).exactOptional(),
    Type: LoadBalancerTypeEnumSchema.and(
      z.any().openapi({ description: 'The type of load balancer.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'The subnets for the load balancer.' }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupsSchema.and(
      z.any().openapi({ description: 'The IDs of the security groups for the load balancer.' }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses).',
        }),
    ).exactOptional(),
    CustomerOwnedIpv4Pool: CustomerOwnedIpv4PoolSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Application Load Balancers on Outposts] The ID of the customer-owned address pool.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a load balancer.', required: [] })
  .openapi('LoadBalancer')

const LoadBalancersSchema = z.array(LoadBalancerSchema).openapi('LoadBalancers')

const CreateLoadBalancerOutputSchema = z
  .object({
    LoadBalancers: LoadBalancersSchema.and(
      z.any().openapi({ description: 'Information about the load balancer.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      LoadBalancers: [
        {
          AvailabilityZones: [
            { SubnetId: 'subnet-8360a9e7', ZoneName: 'us-west-2a' },
            { SubnetId: 'subnet-b7d581c0', ZoneName: 'us-west-2b' },
          ],
          CanonicalHostedZoneId: 'Z2P70J7EXAMPLE',
          CreatedTime: '2016-03-25T21:29:48.850Z',
          DNSName: 'internal-my-internal-load-balancer-1529930873.us-west-2.elb.amazonaws.com',
          LoadBalancerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-internal-load-balancer/5b49b8d4303115c2',
          LoadBalancerName: 'my-internal-load-balancer',
          Scheme: 'internal',
          SecurityGroups: ['sg-5943793c'],
          State: { Code: 'provisioning' },
          Type: 'application',
          VpcId: 'vpc-3ac0fb5f',
        },
      ],
    },
    required: [],
  })
  .openapi('CreateLoadBalancerOutput')

const SubnetMappingSchema = z
  .object({
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The ID of the subnet.' }),
    ).exactOptional(),
    AllocationId: AllocationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.',
        }),
    ).exactOptional(),
    PrivateIPv4Address: PrivateIPv4AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] The private IPv4 address for an internal load balancer.',
        }),
    ).exactOptional(),
    IPv6Address: IPv6AddressSchema.and(
      z.any().openapi({ description: '[Network Load Balancers] The IPv6 address.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a subnet mapping.', required: [] })
  .openapi('SubnetMapping')

const DuplicateLoadBalancerNameExceptionSchema = z
  .any()
  .openapi('DuplicateLoadBalancerNameException')

const TooManyLoadBalancersExceptionSchema = z.any().openapi('TooManyLoadBalancersException')

const SubnetNotFoundExceptionSchema = z.any().openapi('SubnetNotFoundException')

const InvalidSubnetExceptionSchema = z.any().openapi('InvalidSubnetException')

const InvalidSecurityGroupExceptionSchema = z.any().openapi('InvalidSecurityGroupException')

const InvalidSchemeExceptionSchema = z.any().openapi('InvalidSchemeException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const AllocationIdNotFoundExceptionSchema = z.any().openapi('AllocationIdNotFoundException')

const AvailabilityZoneNotSupportedExceptionSchema = z
  .any()
  .openapi('AvailabilityZoneNotSupportedException')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const RuleArnSchema = z.string().openapi('RuleArn')

const StringSchema = z.string().openapi('String')

const ConditionFieldNameSchema = z.string().max(64).openapi('ConditionFieldName')

const StringValueSchema = z.string().openapi('StringValue')

const ListOfStringSchema = z.array(StringValueSchema).openapi('ListOfString')

const HostHeaderConditionConfigSchema = z
  .object({
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The host names. The maximum size of each name is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p> <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a host header condition.', required: [] })
  .openapi('HostHeaderConditionConfig')

const PathPatternConditionConfigSchema = z
  .object({
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p> <p>If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use <a>QueryStringConditionConfig</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a path pattern condition.', required: [] })
  .openapi('PathPatternConditionConfig')

const HttpHeaderConditionNameSchema = z.string().openapi('HttpHeaderConditionName')

const HttpHeaderConditionConfigSchema = z
  .object({
    HttpHeaderName: HttpHeaderConditionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.</p> <p>You can't use an HTTP header condition to specify the host header. Use <a>HostHeaderConditionConfig</a> to specify a host header condition.</p>",
        }),
    ).exactOptional(),
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p> <p>If the same header appears multiple times in the request, we search them in order until a match is found.</p> <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>',
    required: [],
  })
  .openapi('HttpHeaderConditionConfig')

const QueryStringKeyValuePairSchema = z
  .object({
    Key: StringValueSchema.and(
      z.any().openapi({ description: 'The key. You can omit the key.' }),
    ).exactOptional(),
    Value: StringValueSchema.and(z.any().openapi({ description: 'The value.' })).exactOptional(),
  })
  .openapi({ description: 'Information about a key/value pair.', required: [] })
  .openapi('QueryStringKeyValuePair')

const QueryStringKeyValuePairListSchema = z
  .array(QueryStringKeyValuePairSchema)
  .openapi('QueryStringKeyValuePairList')

const QueryStringConditionConfigSchema = z
  .object({
    Values: QueryStringKeyValuePairListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in <code>Values</code> using a '\\' character.</p> <p>If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p>",
    required: [],
  })
  .openapi('QueryStringConditionConfig')

const HttpRequestMethodConditionConfigSchema = z
  .object({
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the request method. The maximum size is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.</p> <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p>',
    required: [],
  })
  .openapi('HttpRequestMethodConditionConfig')

const SourceIpConditionConfigSchema = z
  .object({
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.</p> <p>If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use <a>HttpHeaderConditionConfig</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>',
    required: [],
  })
  .openapi('SourceIpConditionConfig')

const RuleConditionSchema = z
  .object({
    Field: ConditionFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The field in the HTTP request. The following are the possible values:</p> <ul> <li> <p> <code>http-header</code> </p> </li> <li> <p> <code>http-request-method</code> </p> </li> <li> <p> <code>host-header</code> </p> </li> <li> <p> <code>path-pattern</code> </p> </li> <li> <p> <code>query-string</code> </p> </li> <li> <p> <code>source-ip</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The condition value. Specify only when <code>Field</code> is <code>host-header</code> or <code>path-pattern</code>. Alternatively, to specify multiple host names or multiple path patterns, use <code>HostHeaderConfig</code> or <code>PathPatternConfig</code>.</p> <p>If <code>Field</code> is <code>host-header</code> and you are not using <code>HostHeaderConfig</code>, you can specify a single host name (for example, my.example.com) in <code>Values</code>. A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If <code>Field</code> is <code>path-pattern</code> and you are not using <code>PathPatternConfig</code>, you can specify a single path pattern (for example, /img/*) in <code>Values</code>. A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ " \' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>',
        }),
    ).exactOptional(),
    HostHeaderConfig: HostHeaderConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for a host header condition. Specify only when <code>Field</code> is <code>host-header</code>.',
        }),
    ).exactOptional(),
    PathPatternConfig: PathPatternConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for a path pattern condition. Specify only when <code>Field</code> is <code>path-pattern</code>.',
        }),
    ).exactOptional(),
    HttpHeaderConfig: HttpHeaderConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for an HTTP header condition. Specify only when <code>Field</code> is <code>http-header</code>.',
        }),
    ).exactOptional(),
    QueryStringConfig: QueryStringConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for a query string condition. Specify only when <code>Field</code> is <code>query-string</code>.',
        }),
    ).exactOptional(),
    HttpRequestMethodConfig: HttpRequestMethodConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for an HTTP method condition. Specify only when <code>Field</code> is <code>http-request-method</code>.',
        }),
    ).exactOptional(),
    SourceIpConfig: SourceIpConditionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information for a source IP condition. Specify only when <code>Field</code> is <code>source-ip</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>. Note that the value for a condition cannot be empty.</p>',
    required: [],
  })
  .openapi('RuleCondition')

const RuleConditionListSchema = z.array(RuleConditionSchema).openapi('RuleConditionList')

const IsDefaultSchema = z.boolean().openapi('IsDefault')

const RuleSchema = z
  .object({
    RuleArn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ).exactOptional(),
    Priority: StringSchema.and(z.any().openapi({ description: 'The priority.' })).exactOptional(),
    Conditions: RuleConditionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The conditions. Each rule can include zero or one of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>, and zero or more of the following conditions: <code>http-header</code> and <code>query-string</code>.',
        }),
    ).exactOptional(),
    Actions: ActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>redirect</code>, or <code>fixed-response</code>, and it must be the last action to be performed.',
        }),
    ).exactOptional(),
    IsDefault: IsDefaultSchema.and(
      z.any().openapi({ description: 'Indicates whether this is the default rule.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a rule.', required: [] })
  .openapi('Rule')

const RulesSchema = z.array(RuleSchema).openapi('Rules')

const CreateRuleOutputSchema = z
  .object({
    Rules: RulesSchema.and(
      z.any().openapi({ description: 'Information about the rule.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rules: [
        {
          Actions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          Conditions: [{ Field: 'path-pattern', Values: ['/img/*'] }],
          IsDefault: false,
          Priority: '10',
          RuleArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee',
        },
      ],
    },
    required: [],
  })
  .openapi('CreateRuleOutput')

const PriorityInUseExceptionSchema = z.any().openapi('PriorityInUseException')

const TooManyTargetGroupsExceptionSchema = z.any().openapi('TooManyTargetGroupsException')

const TooManyRulesExceptionSchema = z.any().openapi('TooManyRulesException')

const TargetGroupNameSchema = z.string().openapi('TargetGroupName')

const HealthCheckPortSchema = z.string().openapi('HealthCheckPort')

const HealthCheckEnabledSchema = z.boolean().openapi('HealthCheckEnabled')

const HealthCheckIntervalSecondsSchema = z
  .int()
  .min(5)
  .max(300)
  .openapi('HealthCheckIntervalSeconds')

const HealthCheckTimeoutSecondsSchema = z.int().min(2).max(120).openapi('HealthCheckTimeoutSeconds')

const HealthCheckThresholdCountSchema = z.int().min(2).max(10).openapi('HealthCheckThresholdCount')

const PathSchema = z.string().min(1).max(1024).openapi('Path')

const HttpCodeSchema = z.string().openapi('HttpCode')

const GrpcCodeSchema = z.string().openapi('GrpcCode')

const MatcherSchema = z
  .object({
    HttpCode: HttpCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Gateway Load Balancers, this must be "200–399".</p> <p>Note that when using shorthand syntax, some values such as commas need to be escaped.</p>',
        }),
    ).exactOptional(),
    GrpcCode: GrpcCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. ',
    required: [],
  })
  .openapi('Matcher')

const LoadBalancerArnsSchema = z.array(LoadBalancerArnSchema).openapi('LoadBalancerArns')

const TargetTypeEnumSchema = z.enum(['instance', 'ip', 'lambda', 'alb']).openapi('TargetTypeEnum')

const ProtocolVersionSchema = z.string().openapi('ProtocolVersion')

const TargetGroupIpAddressTypeEnumSchema = z
  .enum(['ipv4', 'ipv6'])
  .openapi('TargetGroupIpAddressTypeEnum')

const TargetGroupSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ).exactOptional(),
    TargetGroupName: TargetGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the target group.' }),
    ).exactOptional(),
    Protocol: ProtocolEnumSchema.and(
      z.any().openapi({ description: 'The protocol to use for routing traffic to the targets.' }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port on which the targets are listening. Not used if the target is a Lambda function.',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC for the targets.' }),
    ).exactOptional(),
    HealthCheckProtocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to use to connect with the target. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z.any().openapi({ description: 'The port to use to connect with the target.' }),
    ).exactOptional(),
    HealthCheckEnabled: HealthCheckEnabledSchema.and(
      z.any().openapi({ description: 'Indicates whether health checks are enabled.' }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate amount of time, in seconds, between health checks of an individual target.',
        }),
    ).exactOptional(),
    HealthCheckTimeoutSeconds: HealthCheckTimeoutSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, during which no response means a failed health check.',
        }),
    ).exactOptional(),
    HealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks successes required before considering an unhealthy target healthy.',
        }),
    ).exactOptional(),
    UnhealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check failures required before considering the target unhealthy.',
        }),
    ).exactOptional(),
    HealthCheckPath: PathSchema.and(
      z.any().openapi({ description: 'The destination for health checks on the targets.' }),
    ).exactOptional(),
    Matcher: MatcherSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP or gRPC codes to use when checking for a successful response from a target.',
        }),
    ).exactOptional(),
    LoadBalancerArns: LoadBalancerArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.',
        }),
    ).exactOptional(),
    TargetType: TargetTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of target that you must specify when registering targets with this target group. The possible values are <code>instance</code> (register targets by instance ID), <code>ip</code> (register targets by IP address), <code>lambda</code> (register a single Lambda function as a target), or <code>alb</code> (register a single Application Load Balancer as a target).',
        }),
    ).exactOptional(),
    ProtocolVersion: ProtocolVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTP/HTTPS protocol] The protocol version. The possible values are <code>GRPC</code>, <code>HTTP1</code>, and <code>HTTP2</code>.',
        }),
    ).exactOptional(),
    IpAddressType: TargetGroupIpAddressTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address used for this target group. The possible values are <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a target group.', required: [] })
  .openapi('TargetGroup')

const TargetGroupsSchema = z.array(TargetGroupSchema).openapi('TargetGroups')

const CreateTargetGroupOutputSchema = z
  .object({
    TargetGroups: TargetGroupsSchema.and(
      z.any().openapi({ description: 'Information about the target group.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetGroups: [
        {
          HealthCheckIntervalSeconds: 30,
          HealthCheckPath: '/',
          HealthCheckPort: 'traffic-port',
          HealthCheckProtocol: 'HTTP',
          HealthCheckTimeoutSeconds: 5,
          HealthyThresholdCount: 5,
          Matcher: { HttpCode: '200' },
          Port: 80,
          Protocol: 'HTTP',
          TargetGroupArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
          TargetGroupName: 'my-targets',
          UnhealthyThresholdCount: 2,
          VpcId: 'vpc-3ac0fb5f',
        },
      ],
    },
    required: [],
  })
  .openapi('CreateTargetGroupOutput')

const DuplicateTargetGroupNameExceptionSchema = z.any().openapi('DuplicateTargetGroupNameException')

const DeleteListenerOutputSchema = z.object({}).openapi('DeleteListenerOutput')

const DeleteLoadBalancerOutputSchema = z.object({}).openapi('DeleteLoadBalancerOutput')

const DeleteRuleOutputSchema = z.object({}).openapi('DeleteRuleOutput')

const DeleteTargetGroupOutputSchema = z.object({}).openapi('DeleteTargetGroupOutput')

const DeregisterTargetsOutputSchema = z.object({}).openapi('DeregisterTargetsOutput')

const TargetIdSchema = z.string().openapi('TargetId')

const TargetDescriptionSchema = z
  .object({
    Id: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
        }),
    ),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
        }),
    ).exactOptional(),
    AvailabilityZone: ZoneNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'Information about a target.' })
  .openapi('TargetDescription')

const InvalidTargetExceptionSchema = z.any().openapi('InvalidTargetException')

const NameSchema = z.string().openapi('Name')

const MaxSchema = z.string().openapi('Max')

const LimitSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the limit. The possible values are:</p> <ul> <li> <p>application-load-balancers</p> </li> <li> <p>condition-values-per-alb-rule</p> </li> <li> <p>condition-wildcards-per-alb-rule</p> </li> <li> <p>gateway-load-balancers</p> </li> <li> <p>gateway-load-balancers-per-vpc</p> </li> <li> <p>geneve-target-groups</p> </li> <li> <p>listeners-per-application-load-balancer</p> </li> <li> <p>listeners-per-network-load-balancer</p> </li> <li> <p>network-load-balancers</p> </li> <li> <p>rules-per-application-load-balancer</p> </li> <li> <p>target-groups</p> </li> <li> <p>target-groups-per-action-on-application-load-balancer</p> </li> <li> <p>target-groups-per-action-on-network-load-balancer</p> </li> <li> <p>target-groups-per-application-load-balancer</p> </li> <li> <p>targets-per-application-load-balancer</p> </li> <li> <p>targets-per-availability-zone-per-gateway-load-balancer</p> </li> <li> <p>targets-per-availability-zone-per-network-load-balancer</p> </li> <li> <p>targets-per-network-load-balancer</p> </li> </ul>',
        }),
    ).exactOptional(),
    Max: MaxSchema.and(
      z.any().openapi({ description: 'The maximum value of the limit.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an Elastic Load Balancing resource limit for your Amazon Web Services account.',
    required: [],
  })
  .openapi('Limit')

const LimitsSchema = z.array(LimitSchema).openapi('Limits')

const MarkerSchema = z.string().openapi('Marker')

const DescribeAccountLimitsOutputSchema = z
  .object({
    Limits: LimitsSchema.and(
      z.any().openapi({ description: 'Information about the limits.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountLimitsOutput')

const DescribeListenerCertificatesOutputSchema = z
  .object({
    Certificates: CertificateListSchema.and(
      z.any().openapi({ description: 'Information about the certificates.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeListenerCertificatesOutput')

const DescribeListenersOutputSchema = z
  .object({
    Listeners: ListenersSchema.and(
      z.any().openapi({ description: 'Information about the listeners.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Listeners: [
        {
          DefaultActions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          ListenerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2',
          LoadBalancerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          Port: 80,
          Protocol: 'HTTP',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeListenersOutput')

const LoadBalancerAttributeKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9._]+$/)
  .max(256)
  .openapi('LoadBalancerAttributeKey')

const LoadBalancerAttributeValueSchema = z.string().max(1024).openapi('LoadBalancerAttributeValue')

const LoadBalancerAttributeSchema = z
  .object({
    Key: LoadBalancerAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the attribute.</p> <p>The following attributes are supported by all load balancers:</p> <ul> <li> <p> <code>deletion_protection.enabled</code> - Indicates whether deletion protection is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load balancing is enabled. The possible values are <code>true</code> and <code>false</code>. The default for Network Load Balancers and Gateway Load Balancers is <code>false</code>. The default for Application Load Balancers is <code>true</code>, and cannot be changed.</p> </li> </ul> <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.</p> </li> <li> <p> <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the access logs.</p> </li> <li> <p> <code>ipv6.deny_all_igw_traffic</code> - Blocks internet gateway (IGW) access to the load balancer. It is set to <code>false</code> for internet-facing load balancers and <code>true</code> for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.</p> </li> </ul> <p>The following attributes are supported by only Application Load Balancers:</p> <ul> <li> <p> <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.</p> </li> <li> <p> <code>routing.http.desync_mitigation_mode</code> - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are <code>monitor</code>, <code>defensive</code>, and <code>strictest</code>. The default is <code>defensive</code>.</p> </li> <li> <p> <code>routing.http.drop_invalid_header_fields.enabled</code> - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (<code>true</code>) or routed to targets (<code>false</code>). The default is <code>false</code>.</p> </li> <li> <p> <code>routing.http.preserve_host_header.enabled</code> - Indicates whether the Application Load Balancer should preserve the <code>Host</code> header in the HTTP request and send it to the target without any change. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>routing.http.x_amzn_tls_version_and_cipher_suite.enabled</code> - Indicates whether the two headers (<code>x-amzn-tls-version</code> and <code>x-amzn-tls-cipher-suite</code>), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The <code>x-amzn-tls-version</code> header has information about the TLS protocol version negotiated with the client, and the <code>x-amzn-tls-cipher-suite</code> header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are <code>true</code> and <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>routing.http.xff_client_port.enabled</code> - Indicates whether the <code>X-Forwarded-For</code> header should preserve the source port that the client used to connect to the load balancer. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>routing.http.xff_header_processing.mode</code> - Enables you to modify, preserve, or remove the <code>X-Forwarded-For</code> header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are <code>append</code>, <code>preserve</code>, and <code>remove</code>. The default is <code>append</code>.</p> <ul> <li> <p>If the value is <code>append</code>, the Application Load Balancer adds the client IP address (of the last hop) to the <code>X-Forwarded-For</code> header in the HTTP request before it sends it to targets.</p> </li> <li> <p>If the value is <code>preserve</code> the Application Load Balancer preserves the <code>X-Forwarded-For</code> header in the HTTP request, and sends it to targets without any change.</p> </li> <li> <p>If the value is <code>remove</code>, the Application Load Balancer removes the <code>X-Forwarded-For</code> header in the HTTP request before it sends it to targets.</p> </li> </ul> </li> <li> <p> <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The possible values are <code>true</code> and <code>false</code>. The default is <code>true</code>. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens.</p> </li> <li> <p> <code>waf.fail_open.enabled</code> - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to Amazon Web Services WAF. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Value: LoadBalancerAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a load balancer attribute.', required: [] })
  .openapi('LoadBalancerAttribute')

const LoadBalancerAttributesSchema = z
  .array(LoadBalancerAttributeSchema)
  .max(20)
  .openapi('LoadBalancerAttributes')

const DescribeLoadBalancerAttributesOutputSchema = z
  .object({
    Attributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'Information about the load balancer attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Attributes: [
        { Key: 'access_logs.s3.enabled', Value: 'false' },
        { Key: 'idle_timeout.timeout_seconds', Value: '60' },
        { Key: 'access_logs.s3.prefix', Value: '' },
        { Key: 'deletion_protection.enabled', Value: 'false' },
        { Key: 'access_logs.s3.bucket', Value: '' },
      ],
    },
    required: [],
  })
  .openapi('DescribeLoadBalancerAttributesOutput')

const DescribeLoadBalancersOutputSchema = z
  .object({
    LoadBalancers: LoadBalancersSchema.and(
      z.any().openapi({ description: 'Information about the load balancers.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      LoadBalancers: [
        {
          AvailabilityZones: [
            { SubnetId: 'subnet-8360a9e7', ZoneName: 'us-west-2a' },
            { SubnetId: 'subnet-b7d581c0', ZoneName: 'us-west-2b' },
          ],
          CanonicalHostedZoneId: 'Z2P70J7EXAMPLE',
          CreatedTime: '2016-03-25T21:26:12.920Z',
          DNSName: 'my-load-balancer-424835706.us-west-2.elb.amazonaws.com',
          LoadBalancerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          LoadBalancerName: 'my-load-balancer',
          Scheme: 'internet-facing',
          SecurityGroups: ['sg-5943793c'],
          State: { Code: 'active' },
          Type: 'application',
          VpcId: 'vpc-3ac0fb5f',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeLoadBalancersOutput')

const DescribeRulesOutputSchema = z
  .object({
    Rules: RulesSchema.and(
      z.any().openapi({ description: 'Information about the rules.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rules: [
        {
          Actions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          Conditions: [{ Field: 'path-pattern', Values: ['/img/*'] }],
          IsDefault: false,
          Priority: '10',
          RuleArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeRulesOutput')

const SslProtocolSchema = z.string().openapi('SslProtocol')

const SslProtocolsSchema = z.array(SslProtocolSchema).openapi('SslProtocols')

const CipherNameSchema = z.string().openapi('CipherName')

const CipherPrioritySchema = z.int().openapi('CipherPriority')

const CipherSchema = z
  .object({
    Name: CipherNameSchema.and(
      z.any().openapi({ description: 'The name of the cipher.' }),
    ).exactOptional(),
    Priority: CipherPrioritySchema.and(
      z.any().openapi({ description: 'The priority of the cipher.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a cipher used in a policy.', required: [] })
  .openapi('Cipher')

const CiphersSchema = z.array(CipherSchema).openapi('Ciphers')

const SslPolicySchema = z
  .object({
    SslProtocols: SslProtocolsSchema.and(
      z.any().openapi({ description: 'The protocols.' }),
    ).exactOptional(),
    Ciphers: CiphersSchema.and(z.any().openapi({ description: 'The ciphers.' })).exactOptional(),
    Name: SslPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the policy.' }),
    ).exactOptional(),
    SupportedLoadBalancerTypes: ListOfStringSchema.and(
      z.any().openapi({ description: ' The supported load balancers. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a policy used for SSL negotiation.', required: [] })
  .openapi('SslPolicy')

const SslPoliciesSchema = z.array(SslPolicySchema).openapi('SslPolicies')

const DescribeSSLPoliciesOutputSchema = z
  .object({
    SslPolicies: SslPoliciesSchema.and(
      z.any().openapi({ description: 'Information about the security policies.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SslPolicies: [
        {
          Ciphers: [
            { Name: 'ECDHE-ECDSA-AES128-GCM-SHA256', Priority: 1 },
            { Name: 'ECDHE-RSA-AES128-GCM-SHA256', Priority: 2 },
            { Name: 'ECDHE-ECDSA-AES128-SHA256', Priority: 3 },
            { Name: 'ECDHE-RSA-AES128-SHA256', Priority: 4 },
            { Name: 'ECDHE-ECDSA-AES128-SHA', Priority: 5 },
            { Name: 'ECDHE-RSA-AES128-SHA', Priority: 6 },
            { Name: 'DHE-RSA-AES128-SHA', Priority: 7 },
            { Name: 'ECDHE-ECDSA-AES256-GCM-SHA384', Priority: 8 },
            { Name: 'ECDHE-RSA-AES256-GCM-SHA384', Priority: 9 },
            { Name: 'ECDHE-ECDSA-AES256-SHA384', Priority: 10 },
            { Name: 'ECDHE-RSA-AES256-SHA384', Priority: 11 },
            { Name: 'ECDHE-RSA-AES256-SHA', Priority: 12 },
            { Name: 'ECDHE-ECDSA-AES256-SHA', Priority: 13 },
            { Name: 'AES128-GCM-SHA256', Priority: 14 },
            { Name: 'AES128-SHA256', Priority: 15 },
            { Name: 'AES128-SHA', Priority: 16 },
            { Name: 'AES256-GCM-SHA384', Priority: 17 },
            { Name: 'AES256-SHA256', Priority: 18 },
            { Name: 'AES256-SHA', Priority: 19 },
          ],
          Name: 'ELBSecurityPolicy-2015-05',
          SslProtocols: ['TLSv1', 'TLSv1.1', 'TLSv1.2'],
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeSSLPoliciesOutput')

const TagListSchema = z.array(TagSchema).min(1).openapi('TagList')

const TagDescriptionSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The tags associated with a resource.', required: [] })
  .openapi('TagDescription')

const TagDescriptionsSchema = z.array(TagDescriptionSchema).openapi('TagDescriptions')

const DescribeTagsOutputSchema = z
  .object({
    TagDescriptions: TagDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the tags.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TagDescriptions: [
        {
          ResourceArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          Tags: [
            { Key: 'project', Value: 'lima' },
            { Key: 'department', Value: 'digital-media' },
          ],
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeTagsOutput')

const TargetGroupAttributeKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9._]+$/)
  .max(256)
  .openapi('TargetGroupAttributeKey')

const TargetGroupAttributeValueSchema = z.string().openapi('TargetGroupAttributeValue')

const TargetGroupAttributeSchema = z
  .object({
    Key: TargetGroupAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the attribute.</p> <p>The following attributes are supported by all load balancers:</p> <ul> <li> <p> <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported.</p> </li> <li> <p> <code>stickiness.enabled</code> - Indicates whether target stickiness is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>stickiness.type</code> - Indicates the type of stickiness. The possible values are:</p> <ul> <li> <p> <code>lb_cookie</code> and <code>app_cookie</code> for Application Load Balancers.</p> </li> <li> <p> <code>source_ip</code> for Network Load Balancers.</p> </li> <li> <p> <code>source_ip_dest_ip</code> and <code>source_ip_dest_ip_proto</code> for Gateway Load Balancers.</p> </li> </ul> </li> </ul> <p>The following attributes are supported by Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross zone load balancing is enabled. The value is <code>true</code>, <code>false</code> or <code>use_load_balancer_configuration</code>. The default is <code>use_load_balancer_configuration</code>.</p> </li> <li> <p> <code>target_group_health.dns_failover.minimum_healthy_targets.count</code> - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are <code>off</code> or an integer from 1 to the maximum number of targets. The default is <code>off</code>.</p> </li> <li> <p> <code>target_group_health.dns_failover.minimum_healthy_targets.percentage</code> - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are <code>off</code> or an integer from 1 to 100. The default is <code>off</code>.</p> </li> <li> <p> <code>target_group_health.unhealthy_state_routing.minimum_healthy_targets.count</code> - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are 1 to the maximum number of targets. The default is 1.</p> </li> <li> <p> <code>target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage</code> - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are <code>off</code> or an integer from 1 to 100. The default is <code>off</code>.</p> </li> </ul> <p>The following attributes are supported only if the load balancer is an Application Load Balancer and the target is an instance or an IP address:</p> <ul> <li> <p> <code>load_balancing.algorithm.type</code> - The load balancing algorithm determines how the load balancer selects targets when routing requests. The value is <code>round_robin</code> or <code>least_outstanding_requests</code>. The default is <code>round_robin</code>.</p> </li> <li> <p> <code>slow_start.duration_seconds</code> - The time period, in seconds, during which a newly registered target receives an increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). The default is 0 seconds (disabled).</p> </li> <li> <p> <code>stickiness.app_cookie.cookie_name</code> - Indicates the name of the application-based cookie. Names that start with the following prefixes are not allowed: <code>AWSALB</code>, <code>AWSALBAPP</code>, and <code>AWSALBTG</code>; they're reserved for use by the load balancer.</p> </li> <li> <p> <code>stickiness.app_cookie.duration_seconds</code> - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the application-based cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).</p> </li> <li> <p> <code>stickiness.lb_cookie.duration_seconds</code> - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds). </p> </li> </ul> <p>The following attribute is supported only if the load balancer is an Application Load Balancer and the target is a Lambda function:</p> <ul> <li> <p> <code>lambda.multi_value_headers.enabled</code> - Indicates whether the request and response headers that are exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>. If the value is <code>false</code> and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client.</p> </li> </ul> <p>The following attributes are supported only by Network Load Balancers:</p> <ul> <li> <p> <code>deregistration_delay.connection_termination.enabled</code> - Indicates whether the load balancer terminates connections at the end of the deregistration timeout. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>preserve_client_ip.enabled</code> - Indicates whether client IP preservation is enabled. The value is <code>true</code> or <code>false</code>. The default is disabled if the target group type is IP address and the target group protocol is TCP or TLS. Otherwise, the default is enabled. Client IP preservation cannot be disabled for UDP and TCP_UDP target groups.</p> </li> <li> <p> <code>proxy_protocol_v2.enabled</code> - Indicates whether Proxy Protocol version 2 is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>. </p> </li> </ul> <p>The following attributes are supported only by Gateway Load Balancers:</p> <ul> <li> <p> <code>target_failover.on_deregistration</code> - Indicates how the Gateway Load Balancer handles existing flows when a target is deregistered. The possible values are <code>rebalance</code> and <code>no_rebalance</code>. The default is <code>no_rebalance</code>. The two attributes (<code>target_failover.on_deregistration</code> and <code>target_failover.on_unhealthy</code>) can't be set independently. The value you set for both attributes must be the same. </p> </li> <li> <p> <code>target_failover.on_unhealthy</code> - Indicates how the Gateway Load Balancer handles existing flows when a target is unhealthy. The possible values are <code>rebalance</code> and <code>no_rebalance</code>. The default is <code>no_rebalance</code>. The two attributes (<code>target_failover.on_deregistration</code> and <code>target_failover.on_unhealthy</code>) cannot be set independently. The value you set for both attributes must be the same. </p> </li> </ul>",
        }),
    ).exactOptional(),
    Value: TargetGroupAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a target group attribute.', required: [] })
  .openapi('TargetGroupAttribute')

const TargetGroupAttributesSchema = z
  .array(TargetGroupAttributeSchema)
  .openapi('TargetGroupAttributes')

const DescribeTargetGroupAttributesOutputSchema = z
  .object({
    Attributes: TargetGroupAttributesSchema.and(
      z.any().openapi({ description: 'Information about the target group attributes' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Attributes: [
        { Key: 'stickiness.enabled', Value: 'false' },
        { Key: 'deregistration_delay.timeout_seconds', Value: '300' },
        { Key: 'stickiness.type', Value: 'lb_cookie' },
        { Key: 'stickiness.lb_cookie.duration_seconds', Value: '86400' },
      ],
    },
    required: [],
  })
  .openapi('DescribeTargetGroupAttributesOutput')

const DescribeTargetGroupsOutputSchema = z
  .object({
    TargetGroups: TargetGroupsSchema.and(
      z.any().openapi({ description: 'Information about the target groups.' }),
    ).exactOptional(),
    NextMarker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are additional results, this is the marker for the next set of results. Otherwise, this is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetGroups: [
        {
          HealthCheckIntervalSeconds: 30,
          HealthCheckPath: '/',
          HealthCheckPort: 'traffic-port',
          HealthCheckProtocol: 'HTTP',
          HealthCheckTimeoutSeconds: 5,
          HealthyThresholdCount: 5,
          LoadBalancerArns: [
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          ],
          Matcher: { HttpCode: '200' },
          Port: 80,
          Protocol: 'HTTP',
          TargetGroupArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
          TargetGroupName: 'my-targets',
          UnhealthyThresholdCount: 2,
          VpcId: 'vpc-3ac0fb5f',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeTargetGroupsOutput')

const TargetHealthStateEnumSchema = z
  .enum(['initial', 'healthy', 'unhealthy', 'unused', 'draining', 'unavailable'])
  .openapi('TargetHealthStateEnum')

const TargetHealthReasonEnumSchema = z
  .enum([
    'Elb.RegistrationInProgress',
    'Elb.InitialHealthChecking',
    'Target.ResponseCodeMismatch',
    'Target.Timeout',
    'Target.FailedHealthChecks',
    'Target.NotRegistered',
    'Target.NotInUse',
    'Target.DeregistrationInProgress',
    'Target.InvalidState',
    'Target.IpUnusable',
    'Target.HealthCheckDisabled',
    'Elb.InternalError',
  ])
  .openapi('TargetHealthReasonEnum')

const DescriptionSchema = z.string().openapi('Description')

const TargetHealthSchema = z
  .object({
    State: TargetHealthStateEnumSchema.and(
      z.any().openapi({ description: 'The state of the target.' }),
    ).exactOptional(),
    Reason: TargetHealthReasonEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reason code.</p> <p>If the target state is <code>healthy</code>, a reason code is not provided.</p> <p>If the target state is <code>initial</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Elb.RegistrationInProgress</code> - The target is in the process of being registered with the load balancer.</p> </li> <li> <p> <code>Elb.InitialHealthChecking</code> - The load balancer is still sending the target the minimum number of health checks required to determine its health status.</p> </li> </ul> <p>If the target state is <code>unhealthy</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.ResponseCodeMismatch</code> - The health checks did not return an expected HTTP code. Applies only to Application Load Balancers and Gateway Load Balancers.</p> </li> <li> <p> <code>Target.Timeout</code> - The health check requests timed out. Applies only to Application Load Balancers and Gateway Load Balancers.</p> </li> <li> <p> <code>Target.FailedHealthChecks</code> - The load balancer received an error while establishing a connection to the target or the target response was malformed.</p> </li> <li> <p> <code>Elb.InternalError</code> - The health checks failed due to an internal error. Applies only to Application Load Balancers.</p> </li> </ul> <p>If the target state is <code>unused</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.NotRegistered</code> - The target is not registered with the target group.</p> </li> <li> <p> <code>Target.NotInUse</code> - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.</p> </li> <li> <p> <code>Target.InvalidState</code> - The target is in the stopped or terminated state.</p> </li> <li> <p> <code>Target.IpUnusable</code> - The target IP address is reserved for use by a load balancer.</p> </li> </ul> <p>If the target state is <code>draining</code>, the reason code can be the following value:</p> <ul> <li> <p> <code>Target.DeregistrationInProgress</code> - The target is in the process of being deregistered and the deregistration delay period has not expired.</p> </li> </ul> <p>If the target state is <code>unavailable</code>, the reason code can be the following value:</p> <ul> <li> <p> <code>Target.HealthCheckDisabled</code> - Health checks are disabled for the target group. Applies only to Application Load Balancers.</p> </li> <li> <p> <code>Elb.InternalError</code> - Target health is unavailable due to an internal error. Applies only to Network Load Balancers.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the target health that provides additional details. If the state is <code>healthy</code>, a description is not provided.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the current health of a target.', required: [] })
  .openapi('TargetHealth')

const TargetHealthDescriptionSchema = z
  .object({
    Target: TargetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the target.' }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z.any().openapi({ description: 'The port to use to connect with the target.' }),
    ).exactOptional(),
    TargetHealth: TargetHealthSchema.and(
      z.any().openapi({ description: 'The health information for the target.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the health of a target.', required: [] })
  .openapi('TargetHealthDescription')

const TargetHealthDescriptionsSchema = z
  .array(TargetHealthDescriptionSchema)
  .openapi('TargetHealthDescriptions')

const DescribeTargetHealthOutputSchema = z
  .object({
    TargetHealthDescriptions: TargetHealthDescriptionsSchema.and(
      z.any().openapi({ description: 'Information about the health of the targets.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetHealthDescriptions: [
        {
          HealthCheckPort: '80',
          Target: { Id: 'i-0f76fade', Port: 80 },
          TargetHealth: { State: 'healthy' },
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeTargetHealthOutput')

const HealthUnavailableExceptionSchema = z.any().openapi('HealthUnavailableException')

const ModifyListenerOutputSchema = z
  .object({
    Listeners: ListenersSchema.and(
      z.any().openapi({ description: 'Information about the modified listener.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Listeners: [
        {
          Certificates: [
            { CertificateArn: 'arn:aws:iam::123456789012:server-certificate/my-new-server-cert' },
          ],
          DefaultActions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          ListenerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/0467ef3c8400ae65',
          LoadBalancerArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          Port: 443,
          Protocol: 'HTTPS',
          SslPolicy: 'ELBSecurityPolicy-2015-05',
        },
      ],
    },
    required: [],
  })
  .openapi('ModifyListenerOutput')

const ModifyLoadBalancerAttributesOutputSchema = z
  .object({
    Attributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'Information about the load balancer attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Attributes: [
        { Key: 'access_logs.s3.enabled', Value: 'true' },
        { Key: 'access_logs.s3.bucket', Value: 'my-load-balancer-logs' },
        { Key: 'access_logs.s3.prefix', Value: 'myapp' },
        { Key: 'idle_timeout.timeout_seconds', Value: '60' },
        { Key: 'deletion_protection.enabled', Value: 'false' },
      ],
    },
    required: [],
  })
  .openapi('ModifyLoadBalancerAttributesOutput')

const ModifyRuleOutputSchema = z
  .object({
    Rules: RulesSchema.and(
      z.any().openapi({ description: 'Information about the modified rule.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rules: [
        {
          Actions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          Conditions: [{ Field: 'path-pattern', Values: ['/images/*'] }],
          IsDefault: false,
          Priority: '10',
          RuleArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee',
        },
      ],
    },
    required: [],
  })
  .openapi('ModifyRuleOutput')

const ModifyTargetGroupOutputSchema = z
  .object({
    TargetGroups: TargetGroupsSchema.and(
      z.any().openapi({ description: 'Information about the modified target group.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      TargetGroups: [
        {
          HealthCheckIntervalSeconds: 30,
          HealthCheckPort: '443',
          HealthCheckProtocol: 'HTTPS',
          HealthCheckTimeoutSeconds: 5,
          HealthyThresholdCount: 5,
          LoadBalancerArns: [
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
          ],
          Matcher: { HttpCode: '200' },
          Port: 443,
          Protocol: 'HTTPS',
          TargetGroupArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-https-targets/2453ed029918f21f',
          TargetGroupName: 'my-https-targets',
          UnhealthyThresholdCount: 2,
          VpcId: 'vpc-3ac0fb5f',
        },
      ],
    },
    required: [],
  })
  .openapi('ModifyTargetGroupOutput')

const ModifyTargetGroupAttributesOutputSchema = z
  .object({
    Attributes: TargetGroupAttributesSchema.and(
      z.any().openapi({ description: 'Information about the attributes.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Attributes: [
        { Key: 'stickiness.enabled', Value: 'false' },
        { Key: 'deregistration_delay.timeout_seconds', Value: '600' },
        { Key: 'stickiness.type', Value: 'lb_cookie' },
        { Key: 'stickiness.lb_cookie.duration_seconds', Value: '86400' },
      ],
    },
    required: [],
  })
  .openapi('ModifyTargetGroupAttributesOutput')

const RegisterTargetsOutputSchema = z.object({}).openapi('RegisterTargetsOutput')

const RemoveListenerCertificatesOutputSchema = z
  .object({})
  .openapi('RemoveListenerCertificatesOutput')

const RemoveTagsOutputSchema = z.object({}).openapi('RemoveTagsOutput')

const SetIpAddressTypeOutputSchema = z
  .object({
    IpAddressType: IpAddressTypeSchema.and(
      z.any().openapi({ description: 'The IP address type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetIpAddressTypeOutput')

const SetRulePrioritiesOutputSchema = z
  .object({
    Rules: RulesSchema.and(
      z.any().openapi({ description: 'Information about the rules.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Rules: [
        {
          Actions: [
            {
              TargetGroupArn:
                'arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
              Type: 'forward',
            },
          ],
          Conditions: [{ Field: 'path-pattern', Values: ['/img/*'] }],
          IsDefault: false,
          Priority: '5',
          RuleArn:
            'arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/1291d13826f405c3',
        },
      ],
    },
    required: [],
  })
  .openapi('SetRulePrioritiesOutput')

const RulePrioritySchema = z.int().min(1).max(50000).openapi('RulePriority')

const RulePriorityPairSchema = z
  .object({
    RuleArn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ).exactOptional(),
    Priority: RulePrioritySchema.and(
      z.any().openapi({ description: 'The rule priority.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the priorities for the rules for a listener.',
    required: [],
  })
  .openapi('RulePriorityPair')

const SetSecurityGroupsOutputSchema = z
  .object({
    SecurityGroupIds: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description: 'The IDs of the security groups associated with the load balancer.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { SecurityGroupIds: ['sg-5943793c'] }, required: [] })
  .openapi('SetSecurityGroupsOutput')

const SetSubnetsOutputSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z.any().openapi({ description: 'Information about the subnets.' }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z.any().openapi({ description: '[Network Load Balancers] The IP address type.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AvailabilityZones: [
        { SubnetId: 'subnet-8360a9e7', ZoneName: 'us-west-2a' },
        { SubnetId: 'subnet-b7d581c0', ZoneName: 'us-west-2b' },
      ],
    },
    required: [],
  })
  .openapi('SetSubnetsOutput')

const AddListenerCertificatesInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate to add. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
        }),
    ),
  })
  .openapi({ required: ['ListenerArn', 'Certificates'], title: 'AddListenerCertificatesInput' })
  .openapi('AddListenerCertificatesInput')

const ResourceArnsSchema = z.array(ResourceArnSchema).openapi('ResourceArns')

const AddTagsInputSchema = z
  .object({
    ResourceArns: ResourceArnsSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tags.' })),
  })
  .openapi({ required: ['ResourceArns', 'Tags'], title: 'AddTagsInput' })
  .openapi('AddTagsInput')

const AuthenticateCognitoActionAuthenticationRequestParamNameSchema = z
  .string()
  .openapi('AuthenticateCognitoActionAuthenticationRequestParamName')

const AuthenticateOidcActionAuthenticationRequestParamNameSchema = z
  .string()
  .openapi('AuthenticateOidcActionAuthenticationRequestParamName')

const CreateListenerInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
    Protocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.',
        }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.',
        }),
    ).exactOptional(),
    SslPolicy: SslPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
        }),
    ).exactOptional(),
    DefaultActions: ActionsSchema.and(
      z.any().openapi({ description: 'The actions for the default rule.' }),
    ),
    AlpnPolicy: AlpnPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the listener.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['LoadBalancerArn', 'DefaultActions'], title: 'CreateListenerInput' })
  .openapi('CreateListenerInput')

const SubnetsSchema = z.array(SubnetIdSchema).openapi('Subnets')

const SubnetMappingsSchema = z.array(SubnetMappingSchema).openapi('SubnetMappings')

const CreateLoadBalancerInputSchema = z
  .object({
    Name: LoadBalancerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</p>',
        }),
    ),
    Subnets: SubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones.</p>',
        }),
    ).exactOptional(),
    SubnetMappings: SubnetMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p>',
        }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Application Load Balancers] The IDs of the security groups for the load balancer.',
        }),
    ).exactOptional(),
    Scheme: LoadBalancerSchemeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p> <p>You cannot specify a scheme for a Gateway Load Balancer.</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the load balancer.' }),
    ).exactOptional(),
    Type: LoadBalancerTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of load balancer. The default is <code>application</code>.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). ',
        }),
    ).exactOptional(),
    CustomerOwnedIpv4Pool: CustomerOwnedIpv4PoolSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateLoadBalancerInput' })
  .openapi('CreateLoadBalancerInput')

const CreateRuleInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    Conditions: RuleConditionListSchema.and(z.any().openapi({ description: 'The conditions.' })),
    Priority: RulePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            "The rule priority. A listener can't have multiple rules with the same priority.",
        }),
    ),
    Actions: ActionsSchema.and(z.any().openapi({ description: 'The actions.' })),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the rule.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ListenerArn', 'Conditions', 'Priority', 'Actions'],
    title: 'CreateRuleInput',
  })
  .openapi('CreateRuleInput')

const CreateTargetGroupInputSchema = z
  .object({
    Name: TargetGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>',
        }),
    ),
    Protocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.',
        }),
    ).exactOptional(),
    ProtocolVersion: ProtocolVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTP/HTTPS protocol] The protocol version. Specify <code>GRPC</code> to send requests to targets using gRPC. Specify <code>HTTP2</code> to send requests to targets using HTTP/2. The default is <code>HTTP1</code>, which sends requests to targets using HTTP/1.1.',
        }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.',
        }),
    ).exactOptional(),
    VpcId: VpcIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.',
        }),
    ).exactOptional(),
    HealthCheckProtocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.',
        }),
    ).exactOptional(),
    HealthCheckEnabled: HealthCheckEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code>, <code>ip</code>, or <code>alb</code>, health checks are always enabled and cannot be disabled.',
        }),
    ).exactOptional(),
    HealthCheckPath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>',
        }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.',
        }),
    ).exactOptional(),
    HealthCheckTimeoutSeconds: HealthCheckTimeoutSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is <code>lambda</code>, the default is 30 seconds.',
        }),
    ).exactOptional(),
    HealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is <code>lambda</code>, the default is 5.',
        }),
    ).exactOptional(),
    UnhealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is <code>lambda</code>, the default is 5.',
        }),
    ).exactOptional(),
    Matcher: MatcherSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.',
        }),
    ).exactOptional(),
    TargetType: TargetTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Register targets by instance ID. This is the default value.</p> </li> <li> <p> <code>ip</code> - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - Register a single Lambda function as a target.</p> </li> <li> <p> <code>alb</code> - Register a single Application Load Balancer as a target.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the target group.' }),
    ).exactOptional(),
    IpAddressType: TargetGroupIpAddressTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of IP address used for this target group. The possible values are <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateTargetGroupInput' })
  .openapi('CreateTargetGroupInput')

const DeleteListenerInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
  })
  .openapi({ required: ['ListenerArn'], title: 'DeleteListenerInput' })
  .openapi('DeleteListenerInput')

const DeleteLoadBalancerInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
  })
  .openapi({ required: ['LoadBalancerArn'], title: 'DeleteLoadBalancerInput' })
  .openapi('DeleteLoadBalancerInput')

const DeleteRuleInputSchema = z
  .object({
    RuleArn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ),
  })
  .openapi({ required: ['RuleArn'], title: 'DeleteRuleInput' })
  .openapi('DeleteRuleInput')

const DeleteTargetGroupInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
  })
  .openapi({ required: ['TargetGroupArn'], title: 'DeleteTargetGroupInput' })
  .openapi('DeleteTargetGroupInput')

const TargetDescriptionsSchema = z.array(TargetDescriptionSchema).openapi('TargetDescriptions')

const DeregisterTargetsInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
    Targets: TargetDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.',
        }),
    ),
  })
  .openapi({ required: ['TargetGroupArn', 'Targets'], title: 'DeregisterTargetsInput' })
  .openapi('DeregisterTargetsInput')

const PageSizeSchema = z.int().min(1).max(400).openapi('PageSize')

const DescribeAccountLimitsInputSchema = z
  .object({
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAccountLimitsInput', required: [] })
  .openapi('DescribeAccountLimitsInput')

const DescribeListenerCertificatesInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARN) of the listener.' }),
    ),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListenerArn'], title: 'DescribeListenerCertificatesInput' })
  .openapi('DescribeListenerCertificatesInput')

const ListenerArnsSchema = z.array(ListenerArnSchema).openapi('ListenerArns')

const DescribeListenersInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ).exactOptional(),
    ListenerArns: ListenerArnsSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARN) of the listeners.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeListenersInput', required: [] })
  .openapi('DescribeListenersInput')

const DescribeLoadBalancerAttributesInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
  })
  .openapi({ required: ['LoadBalancerArn'], title: 'DescribeLoadBalancerAttributesInput' })
  .openapi('DescribeLoadBalancerAttributesInput')

const LoadBalancerNamesSchema = z.array(LoadBalancerNameSchema).openapi('LoadBalancerNames')

const DescribeLoadBalancersInputSchema = z
  .object({
    LoadBalancerArns: LoadBalancerArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.',
        }),
    ).exactOptional(),
    Names: LoadBalancerNamesSchema.and(
      z.any().openapi({ description: 'The names of the load balancers.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeLoadBalancersInput', required: [] })
  .openapi('DescribeLoadBalancersInput')

const RuleArnsSchema = z.array(RuleArnSchema).openapi('RuleArns')

const DescribeRulesInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ).exactOptional(),
    RuleArns: RuleArnsSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARN) of the rules.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRulesInput', required: [] })
  .openapi('DescribeRulesInput')

const SslPolicyNamesSchema = z.array(SslPolicyNameSchema).openapi('SslPolicyNames')

const DescribeSSLPoliciesInputSchema = z
  .object({
    Names: SslPolicyNamesSchema.and(
      z.any().openapi({ description: 'The names of the policies.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
    LoadBalancerType: LoadBalancerTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of load balancer. The default lists the SSL policies for all load balancers.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSSLPoliciesInput', required: [] })
  .openapi('DescribeSSLPoliciesInput')

const DescribeTagsInputSchema = z
  .object({
    ResourceArns: ResourceArnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArns'], title: 'DescribeTagsInput' })
  .openapi('DescribeTagsInput')

const DescribeTargetGroupAttributesInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
  })
  .openapi({ required: ['TargetGroupArn'], title: 'DescribeTargetGroupAttributesInput' })
  .openapi('DescribeTargetGroupAttributesInput')

const TargetGroupArnsSchema = z.array(TargetGroupArnSchema).openapi('TargetGroupArns')

const TargetGroupNamesSchema = z.array(TargetGroupNameSchema).openapi('TargetGroupNames')

const DescribeTargetGroupsInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ).exactOptional(),
    TargetGroupArns: TargetGroupArnsSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARN) of the target groups.' }),
    ).exactOptional(),
    Names: TargetGroupNamesSchema.and(
      z.any().openapi({ description: 'The names of the target groups.' }),
    ).exactOptional(),
    Marker: MarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. (You received this marker from a previous call.)',
        }),
    ).exactOptional(),
    PageSize: PageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return with this call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeTargetGroupsInput', required: [] })
  .openapi('DescribeTargetGroupsInput')

const DescribeTargetHealthInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
    Targets: TargetDescriptionsSchema.and(
      z.any().openapi({ description: 'The targets.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetGroupArn'], title: 'DescribeTargetHealthInput' })
  .openapi('DescribeTargetHealthInput')

const ModifyListenerInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port for connections from clients to the load balancer. You cannot specify a port for a Gateway Load Balancer.',
        }),
    ).exactOptional(),
    Protocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols. You can’t change the protocol to UDP or TCP_UDP if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.',
        }),
    ).exactOptional(),
    SslPolicy: SslPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
        }),
    ).exactOptional(),
    DefaultActions: ActionsSchema.and(
      z.any().openapi({ description: 'The actions for the default rule.' }),
    ).exactOptional(),
    AlpnPolicy: AlpnPolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListenerArn'], title: 'ModifyListenerInput' })
  .openapi('ModifyListenerInput')

const ModifyLoadBalancerAttributesInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
    Attributes: LoadBalancerAttributesSchema.and(
      z.any().openapi({ description: 'The load balancer attributes.' }),
    ),
  })
  .openapi({
    required: ['LoadBalancerArn', 'Attributes'],
    title: 'ModifyLoadBalancerAttributesInput',
  })
  .openapi('ModifyLoadBalancerAttributesInput')

const ModifyRuleInputSchema = z
  .object({
    RuleArn: RuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
    ),
    Conditions: RuleConditionListSchema.and(
      z.any().openapi({ description: 'The conditions.' }),
    ).exactOptional(),
    Actions: ActionsSchema.and(z.any().openapi({ description: 'The actions.' })).exactOptional(),
  })
  .openapi({ required: ['RuleArn'], title: 'ModifyRuleInput' })
  .openapi('ModifyRuleInput')

const ModifyTargetGroupAttributesInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
    Attributes: TargetGroupAttributesSchema.and(
      z.any().openapi({ description: 'The attributes.' }),
    ),
  })
  .openapi({
    required: ['TargetGroupArn', 'Attributes'],
    title: 'ModifyTargetGroupAttributesInput',
  })
  .openapi('ModifyTargetGroupAttributesInput')

const ModifyTargetGroupInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
    HealthCheckProtocol: ProtocolEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z
        .any()
        .openapi({
          description: 'The port the load balancer uses when performing health checks on targets.',
        }),
    ).exactOptional(),
    HealthCheckPath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>',
        }),
    ).exactOptional(),
    HealthCheckEnabled: HealthCheckEnabledSchema.and(
      z.any().openapi({ description: 'Indicates whether health checks are enabled.' }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate amount of time, in seconds, between health checks of an individual target.',
        }),
    ).exactOptional(),
    HealthCheckTimeoutSeconds: HealthCheckTimeoutSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.',
        }),
    ).exactOptional(),
    HealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks successes required before considering an unhealthy target healthy.',
        }),
    ).exactOptional(),
    UnhealthyThresholdCount: HealthCheckThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health check failures required before considering the target unhealthy.',
        }),
    ).exactOptional(),
    Matcher: MatcherSchema.and(
      z
        .any()
        .openapi({
          description:
            '[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetGroupArn'], title: 'ModifyTargetGroupInput' })
  .openapi('ModifyTargetGroupInput')

const RegisterTargetsInputSchema = z
  .object({
    TargetGroupArn: TargetGroupArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the target group.' }),
    ),
    Targets: TargetDescriptionsSchema.and(z.any().openapi({ description: 'The targets.' })),
  })
  .openapi({ required: ['TargetGroupArn', 'Targets'], title: 'RegisterTargetsInput' })
  .openapi('RegisterTargetsInput')

const RemoveListenerCertificatesInputSchema = z
  .object({
    ListenerArn: ListenerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    Certificates: CertificateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate to remove. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
        }),
    ),
  })
  .openapi({ required: ['ListenerArn', 'Certificates'], title: 'RemoveListenerCertificatesInput' })
  .openapi('RemoveListenerCertificatesInput')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const RemoveTagsInputSchema = z
  .object({
    ResourceArns: ResourceArnsSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
    TagKeys: TagKeysSchema.and(
      z.any().openapi({ description: 'The tag keys for the tags to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceArns', 'TagKeys'], title: 'RemoveTagsInput' })
  .openapi('RemoveTagsInput')

const RulePriorityListSchema = z.array(RulePriorityPairSchema).openapi('RulePriorityList')

const SetIpAddressTypeInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.',
        }),
    ),
  })
  .openapi({ required: ['LoadBalancerArn', 'IpAddressType'], title: 'SetIpAddressTypeInput' })
  .openapi('SetIpAddressTypeInput')

const SetRulePrioritiesInputSchema = z
  .object({
    RulePriorities: RulePriorityListSchema.and(
      z.any().openapi({ description: 'The rule priorities.' }),
    ),
  })
  .openapi({ required: ['RulePriorities'], title: 'SetRulePrioritiesInput' })
  .openapi('SetRulePrioritiesInput')

const SetSecurityGroupsInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
    SecurityGroups: SecurityGroupsSchema.and(
      z.any().openapi({ description: 'The IDs of the security groups.' }),
    ),
  })
  .openapi({ required: ['LoadBalancerArn', 'SecurityGroups'], title: 'SetSecurityGroupsInput' })
  .openapi('SetSecurityGroupsInput')

const SetSubnetsInputSchema = z
  .object({
    LoadBalancerArn: LoadBalancerArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the load balancer.' }),
    ),
    Subnets: SubnetsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>',
        }),
    ).exactOptional(),
    SubnetMappings: SubnetMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p>',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Network Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener. .',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LoadBalancerArn'], title: 'SetSubnetsInput' })
  .openapi('SetSubnetsInput')

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

export const getActionAddListenerCertificatesRoute = createRoute({
  method: 'get',
  path: '/#Action=AddListenerCertificates',
  description:
    '<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'GET_AddListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Certificates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                CertificateArn: CertificateArnSchema.and(
                  z
                    .any()
                    .openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
                ).exactOptional(),
                IsDefault: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    DefaultSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Information about an SSL server certificate.',
                required: [],
              }),
          ),
        )
        .openapi({
          param: {
            name: 'Certificates',
            in: 'query',
            required: true,
            description:
              'The certificate to add. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  CertificateArn: {
                    allOf: [
                      { $ref: '#/components/schemas/CertificateArn' },
                      { description: 'The Amazon Resource Name (ARN) of the certificate.' },
                    ],
                  },
                  IsDefault: {
                    allOf: [
                      { $ref: '#/components/schemas/Default' },
                      {
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      },
                    ],
                  },
                },
                description: 'Information about an SSL server certificate.',
              },
            },
          },
        }),
      Action: z
        .literal('AddListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
  },
})

export const postActionAddListenerCertificatesRoute = createRoute({
  method: 'post',
  path: '/#Action=AddListenerCertificates',
  description:
    '<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'POST_AddListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('AddListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddListenerCertificatesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AddListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    482: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
  },
})

export const getActionAddTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=AddTags',
  description:
    '<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>',
  operationId: 'GET_AddTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ResourceArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceArnSchema),
        )
        .openapi({
          param: {
            name: 'ResourceArns',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ResourceArn' } },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: true,
            description: 'The tags.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('AddTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: AddTagsOutputSchema } } },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    483: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    484: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    485: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
  },
})

export const postActionAddTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=AddTags',
  description:
    '<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>',
  operationId: 'POST_AddTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('AddTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: AddTagsOutputSchema } } },
    480: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    483: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    484: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    485: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
  },
})

export const getActionCreateListenerRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateListener',
  description:
    '<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>',
  operationId: 'GET_CreateListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Protocol: z
        .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Protocol',
            in: 'query',
            required: false,
            description:
              'The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.',
            schema: {
              type: 'string',
              enum: ['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'],
            },
          },
        }),
      Port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(65535),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Port',
            in: 'query',
            required: false,
            description:
              'The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.',
            schema: { type: 'integer', minimum: 1, maximum: 65535 },
          },
        }),
      SslPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SslPolicy',
            in: 'query',
            required: false,
            description:
              '<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
            schema: { type: 'string' },
          },
        }),
      Certificates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                CertificateArn: CertificateArnSchema.and(
                  z
                    .any()
                    .openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
                ).exactOptional(),
                IsDefault: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    DefaultSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Information about an SSL server certificate.',
                required: [],
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Certificates',
            in: 'query',
            required: false,
            description:
              '[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  CertificateArn: {
                    allOf: [
                      { $ref: '#/components/schemas/CertificateArn' },
                      { description: 'The Amazon Resource Name (ARN) of the certificate.' },
                    ],
                  },
                  IsDefault: {
                    allOf: [
                      { $ref: '#/components/schemas/Default' },
                      {
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      },
                    ],
                  },
                },
                description: 'Information about an SSL server certificate.',
              },
            },
          },
        }),
      DefaultActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Type: ActionTypeEnumSchema.and(
                  z.any().openapi({ description: 'The type of action.' }),
                ),
                TargetGroupArn: TargetGroupArnSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                    }),
                ).exactOptional(),
                AuthenticateOidcConfig: z
                  .object({
                    Issuer: AuthenticateOidcActionIssuerSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    TokenEndpoint: AuthenticateOidcActionTokenEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    ClientId: AuthenticateOidcActionClientIdSchema.and(
                      z.any().openapi({ description: 'The OAuth 2.0 client identifier.' }),
                    ),
                    ClientSecret: AuthenticateOidcActionClientSecretSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                        }),
                    ).exactOptional(),
                    SessionCookieName: AuthenticateOidcActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateOidcActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateOidcActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateOidcActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateOidcActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                    UseExistingClientSecret: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        AuthenticateOidcActionUseExistingClientSecretSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                          }),
                      )
                      .exactOptional(),
                  })
                  .openapi({
                    required: [
                      'Issuer',
                      'AuthorizationEndpoint',
                      'TokenEndpoint',
                      'UserInfoEndpoint',
                      'ClientId',
                    ],
                    description:
                      'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      }),
                  )
                  .exactOptional(),
                AuthenticateCognitoConfig: z
                  .object({
                    UserPoolArn: AuthenticateCognitoActionUserPoolArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                        }),
                    ),
                    UserPoolClientId: AuthenticateCognitoActionUserPoolClientIdSchema.and(
                      z
                        .any()
                        .openapi({ description: 'The ID of the Amazon Cognito user pool client.' }),
                    ),
                    UserPoolDomain: AuthenticateCognitoActionUserPoolDomainSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                        }),
                    ),
                    SessionCookieName: AuthenticateCognitoActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateCognitoActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateCognitoActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateCognitoActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                  })
                  .openapi({
                    required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                    description:
                      'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      }),
                  )
                  .exactOptional(),
                Order: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    ActionOrderSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      }),
                  )
                  .exactOptional(),
                RedirectConfig: RedirectActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                    }),
                ).exactOptional(),
                FixedResponseConfig: FixedResponseActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                    }),
                ).exactOptional(),
                ForwardConfig: z
                  .object({
                    TargetGroups: z
                      .array(
                        z
                          .object({
                            TargetGroupArn: TargetGroupArnSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The Amazon Resource Name (ARN) of the target group.',
                                }),
                            ).exactOptional(),
                            Weight: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                TargetGroupWeightSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({ description: 'The weight. The range is 0 to 999.' }),
                              )
                              .exactOptional(),
                          })
                          .openapi({
                            description:
                              'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                            required: [],
                          }),
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The target groups. For Network Load Balancers, you can specify a single target group.',
                          }),
                      )
                      .exactOptional(),
                    TargetGroupStickinessConfig: z
                      .object({
                        Enabled: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            TargetGroupStickinessEnabledSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'Indicates whether target group stickiness is enabled.',
                              }),
                          )
                          .exactOptional(),
                        DurationSeconds: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            TargetGroupStickinessDurationSecondsSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({
                        description: 'Information about the target group stickiness for a rule.',
                        required: [],
                      })
                      .and(
                        z
                          .any()
                          .openapi({ description: 'The target group stickiness for the rule.' }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ description: 'Information about a forward action.', required: [] })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['Type'],
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              }),
          ),
        )
        .openapi({
          param: {
            name: 'DefaultActions',
            in: 'query',
            required: true,
            description: 'The actions for the default rule.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Type'],
                properties: {
                  Type: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionTypeEnum' },
                      { description: 'The type of action.' },
                    ],
                  },
                  TargetGroupArn: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetGroupArn' },
                      {
                        description:
                          'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                      },
                    ],
                  },
                  AuthenticateOidcConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: [
                          'Issuer',
                          'AuthorizationEndpoint',
                          'TokenEndpoint',
                          'UserInfoEndpoint',
                          'ClientId',
                        ],
                        properties: {
                          Issuer: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionIssuer' },
                              {
                                description:
                                  'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          AuthorizationEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthorizationEndpoint',
                              },
                              {
                                description:
                                  'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          TokenEndpoint: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionTokenEndpoint' },
                              {
                                description:
                                  'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          UserInfoEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUserInfoEndpoint',
                              },
                              {
                                description:
                                  'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          ClientId: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientId' },
                              { description: 'The OAuth 2.0 client identifier.' },
                            ],
                          },
                          ClientSecret: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientSecret' },
                              {
                                description:
                                  'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionSessionTimeout' },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                          UseExistingClientSecret: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUseExistingClientSecret',
                              },
                              {
                                description:
                                  'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      },
                    ],
                  },
                  AuthenticateCognitoConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                        properties: {
                          UserPoolArn: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolArn' },
                              {
                                description:
                                  'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          UserPoolClientId: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolClientId',
                              },
                              { description: 'The ID of the Amazon Cognito user pool client.' },
                            ],
                          },
                          UserPoolDomain: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolDomain',
                              },
                              {
                                description:
                                  'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionTimeout',
                              },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      },
                    ],
                  },
                  Order: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionOrder' },
                      {
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      },
                    ],
                  },
                  RedirectConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/RedirectActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                      },
                    ],
                  },
                  FixedResponseConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/FixedResponseActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                      },
                    ],
                  },
                  ForwardConfig: {
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          TargetGroups: {
                            allOf: [
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    TargetGroupArn: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupArn' },
                                        {
                                          description:
                                            'The Amazon Resource Name (ARN) of the target group.',
                                        },
                                      ],
                                    },
                                    Weight: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupWeight' },
                                        { description: 'The weight. The range is 0 to 999.' },
                                      ],
                                    },
                                  },
                                  description:
                                    'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                                },
                              },
                              {
                                description:
                                  'The target groups. For Network Load Balancers, you can specify a single target group.',
                              },
                            ],
                          },
                          TargetGroupStickinessConfig: {
                            allOf: [
                              {
                                type: 'object',
                                properties: {
                                  Enabled: {
                                    allOf: [
                                      { $ref: '#/components/schemas/TargetGroupStickinessEnabled' },
                                      {
                                        description:
                                          'Indicates whether target group stickiness is enabled.',
                                      },
                                    ],
                                  },
                                  DurationSeconds: {
                                    allOf: [
                                      {
                                        $ref: '#/components/schemas/TargetGroupStickinessDurationSeconds',
                                      },
                                      {
                                        description:
                                          'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                                      },
                                    ],
                                  },
                                },
                                description:
                                  'Information about the target group stickiness for a rule.',
                              },
                              { description: 'The target group stickiness for the rule.' },
                            ],
                          },
                        },
                        description: 'Information about a forward action.',
                      },
                      {
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      },
                    ],
                  },
                },
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              },
            },
          },
        }),
      AlpnPolicy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlpnPolicyValueSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlpnPolicy',
            in: 'query',
            required: false,
            description:
              '<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AlpnPolicyValue' } },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to assign to the listener.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('CreateListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateListenerOutputSchema } },
    },
    480: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    481: {
      description: 'TooManyListenersException',
      content: { 'text/xml': { schema: TooManyListenersExceptionSchema } },
    },
    482: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    483: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    484: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    485: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    486: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    487: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    488: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
    489: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    492: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    493: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    494: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    495: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    496: {
      description: 'ALPNPolicyNotSupportedException',
      content: { 'text/xml': { schema: ALPNPolicyNotSupportedExceptionSchema } },
    },
    497: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postActionCreateListenerRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateListener',
  description:
    '<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>',
  operationId: 'POST_CreateListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateListenerOutputSchema } },
    },
    480: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    481: {
      description: 'TooManyListenersException',
      content: { 'text/xml': { schema: TooManyListenersExceptionSchema } },
    },
    482: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    483: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    484: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    485: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    486: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    487: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    488: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
    489: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    492: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    493: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    494: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    495: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    496: {
      description: 'ALPNPolicyNotSupportedException',
      content: { 'text/xml': { schema: ALPNPolicyNotSupportedExceptionSchema } },
    },
    497: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getActionCreateLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateLoadBalancer',
  description:
    '<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>',
  operationId: 'GET_CreateLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Name: z
        .string()
        .openapi({
          param: {
            name: 'Name',
            in: 'query',
            required: true,
            description:
              '<p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</p>',
            schema: { type: 'string' },
          },
        }),
      Subnets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Subnets',
            in: 'query',
            required: false,
            description:
              '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetId' } },
          },
        }),
      SubnetMappings: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetMappingSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SubnetMappings',
            in: 'query',
            required: false,
            description:
              '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetMapping' } },
          },
        }),
      SecurityGroups: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SecurityGroupIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroups',
            in: 'query',
            required: false,
            description:
              '[Application Load Balancers] The IDs of the security groups for the load balancer.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SecurityGroupId' } },
          },
        }),
      Scheme: z
        .enum(['internet-facing', 'internal'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Scheme',
            in: 'query',
            required: false,
            description:
              '<p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p> <p>You cannot specify a scheme for a Gateway Load Balancer.</p>',
            schema: { type: 'string', enum: ['internet-facing', 'internal'] },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to assign to the load balancer.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Type: z
        .enum(['application', 'network', 'gateway'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Type',
            in: 'query',
            required: false,
            description: 'The type of load balancer. The default is <code>application</code>.',
            schema: { type: 'string', enum: ['application', 'network', 'gateway'] },
          },
        }),
      IpAddressType: z
        .enum(['ipv4', 'dualstack'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpAddressType',
            in: 'query',
            required: false,
            description:
              'The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). ',
            schema: { type: 'string', enum: ['ipv4', 'dualstack'] },
          },
        }),
      CustomerOwnedIpv4Pool: z
        .string()
        .regex(/^(ipv4pool-coip-)[a-zA-Z0-9]+$/)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'CustomerOwnedIpv4Pool',
            in: 'query',
            required: false,
            description:
              '[Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).',
            schema: { type: 'string', pattern: '^(ipv4pool-coip-)[a-zA-Z0-9]+$', maxLength: 256 },
          },
        }),
      Action: z
        .literal('CreateLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerOutputSchema } },
    },
    480: {
      description: 'DuplicateLoadBalancerNameException',
      content: { 'text/xml': { schema: DuplicateLoadBalancerNameExceptionSchema } },
    },
    481: {
      description: 'TooManyLoadBalancersException',
      content: { 'text/xml': { schema: TooManyLoadBalancersExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    483: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    485: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
    486: {
      description: 'InvalidSchemeException',
      content: { 'text/xml': { schema: InvalidSchemeExceptionSchema } },
    },
    487: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    488: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    489: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
    490: {
      description: 'AllocationIdNotFoundException',
      content: { 'text/xml': { schema: AllocationIdNotFoundExceptionSchema } },
    },
    491: {
      description: 'AvailabilityZoneNotSupportedException',
      content: { 'text/xml': { schema: AvailabilityZoneNotSupportedExceptionSchema } },
    },
    492: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postActionCreateLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateLoadBalancer',
  description:
    '<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>',
  operationId: 'POST_CreateLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateLoadBalancerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateLoadBalancerOutputSchema } },
    },
    480: {
      description: 'DuplicateLoadBalancerNameException',
      content: { 'text/xml': { schema: DuplicateLoadBalancerNameExceptionSchema } },
    },
    481: {
      description: 'TooManyLoadBalancersException',
      content: { 'text/xml': { schema: TooManyLoadBalancersExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    483: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    485: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
    486: {
      description: 'InvalidSchemeException',
      content: { 'text/xml': { schema: InvalidSchemeExceptionSchema } },
    },
    487: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    488: {
      description: 'DuplicateTagKeysException',
      content: { 'text/xml': { schema: DuplicateTagKeysExceptionSchema } },
    },
    489: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
    490: {
      description: 'AllocationIdNotFoundException',
      content: { 'text/xml': { schema: AllocationIdNotFoundExceptionSchema } },
    },
    491: {
      description: 'AvailabilityZoneNotSupportedException',
      content: { 'text/xml': { schema: AvailabilityZoneNotSupportedExceptionSchema } },
    },
    492: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const getActionCreateRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateRule',
  description:
    '<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>',
  operationId: 'GET_CreateRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Conditions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RuleConditionSchema),
        )
        .openapi({
          param: {
            name: 'Conditions',
            in: 'query',
            required: true,
            description: 'The conditions.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/RuleCondition' } },
          },
        }),
      Priority: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50000),
        )
        .openapi({
          param: {
            name: 'Priority',
            in: 'query',
            required: true,
            description:
              "The rule priority. A listener can't have multiple rules with the same priority.",
            schema: { type: 'integer', minimum: 1, maximum: 50000 },
          },
        }),
      Actions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Type: ActionTypeEnumSchema.and(
                  z.any().openapi({ description: 'The type of action.' }),
                ),
                TargetGroupArn: TargetGroupArnSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                    }),
                ).exactOptional(),
                AuthenticateOidcConfig: z
                  .object({
                    Issuer: AuthenticateOidcActionIssuerSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    TokenEndpoint: AuthenticateOidcActionTokenEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    ClientId: AuthenticateOidcActionClientIdSchema.and(
                      z.any().openapi({ description: 'The OAuth 2.0 client identifier.' }),
                    ),
                    ClientSecret: AuthenticateOidcActionClientSecretSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                        }),
                    ).exactOptional(),
                    SessionCookieName: AuthenticateOidcActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateOidcActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateOidcActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateOidcActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateOidcActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                    UseExistingClientSecret: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        AuthenticateOidcActionUseExistingClientSecretSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                          }),
                      )
                      .exactOptional(),
                  })
                  .openapi({
                    required: [
                      'Issuer',
                      'AuthorizationEndpoint',
                      'TokenEndpoint',
                      'UserInfoEndpoint',
                      'ClientId',
                    ],
                    description:
                      'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      }),
                  )
                  .exactOptional(),
                AuthenticateCognitoConfig: z
                  .object({
                    UserPoolArn: AuthenticateCognitoActionUserPoolArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                        }),
                    ),
                    UserPoolClientId: AuthenticateCognitoActionUserPoolClientIdSchema.and(
                      z
                        .any()
                        .openapi({ description: 'The ID of the Amazon Cognito user pool client.' }),
                    ),
                    UserPoolDomain: AuthenticateCognitoActionUserPoolDomainSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                        }),
                    ),
                    SessionCookieName: AuthenticateCognitoActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateCognitoActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateCognitoActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateCognitoActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                  })
                  .openapi({
                    required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                    description:
                      'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      }),
                  )
                  .exactOptional(),
                Order: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    ActionOrderSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      }),
                  )
                  .exactOptional(),
                RedirectConfig: RedirectActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                    }),
                ).exactOptional(),
                FixedResponseConfig: FixedResponseActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                    }),
                ).exactOptional(),
                ForwardConfig: z
                  .object({
                    TargetGroups: z
                      .array(
                        z
                          .object({
                            TargetGroupArn: TargetGroupArnSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The Amazon Resource Name (ARN) of the target group.',
                                }),
                            ).exactOptional(),
                            Weight: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                TargetGroupWeightSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({ description: 'The weight. The range is 0 to 999.' }),
                              )
                              .exactOptional(),
                          })
                          .openapi({
                            description:
                              'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                            required: [],
                          }),
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The target groups. For Network Load Balancers, you can specify a single target group.',
                          }),
                      )
                      .exactOptional(),
                    TargetGroupStickinessConfig: z
                      .object({
                        Enabled: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            TargetGroupStickinessEnabledSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'Indicates whether target group stickiness is enabled.',
                              }),
                          )
                          .exactOptional(),
                        DurationSeconds: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            TargetGroupStickinessDurationSecondsSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({
                        description: 'Information about the target group stickiness for a rule.',
                        required: [],
                      })
                      .and(
                        z
                          .any()
                          .openapi({ description: 'The target group stickiness for the rule.' }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ description: 'Information about a forward action.', required: [] })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['Type'],
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              }),
          ),
        )
        .openapi({
          param: {
            name: 'Actions',
            in: 'query',
            required: true,
            description: 'The actions.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Type'],
                properties: {
                  Type: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionTypeEnum' },
                      { description: 'The type of action.' },
                    ],
                  },
                  TargetGroupArn: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetGroupArn' },
                      {
                        description:
                          'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                      },
                    ],
                  },
                  AuthenticateOidcConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: [
                          'Issuer',
                          'AuthorizationEndpoint',
                          'TokenEndpoint',
                          'UserInfoEndpoint',
                          'ClientId',
                        ],
                        properties: {
                          Issuer: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionIssuer' },
                              {
                                description:
                                  'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          AuthorizationEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthorizationEndpoint',
                              },
                              {
                                description:
                                  'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          TokenEndpoint: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionTokenEndpoint' },
                              {
                                description:
                                  'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          UserInfoEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUserInfoEndpoint',
                              },
                              {
                                description:
                                  'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          ClientId: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientId' },
                              { description: 'The OAuth 2.0 client identifier.' },
                            ],
                          },
                          ClientSecret: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientSecret' },
                              {
                                description:
                                  'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionSessionTimeout' },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                          UseExistingClientSecret: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUseExistingClientSecret',
                              },
                              {
                                description:
                                  'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      },
                    ],
                  },
                  AuthenticateCognitoConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                        properties: {
                          UserPoolArn: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolArn' },
                              {
                                description:
                                  'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          UserPoolClientId: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolClientId',
                              },
                              { description: 'The ID of the Amazon Cognito user pool client.' },
                            ],
                          },
                          UserPoolDomain: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolDomain',
                              },
                              {
                                description:
                                  'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionTimeout',
                              },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      },
                    ],
                  },
                  Order: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionOrder' },
                      {
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      },
                    ],
                  },
                  RedirectConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/RedirectActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                      },
                    ],
                  },
                  FixedResponseConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/FixedResponseActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                      },
                    ],
                  },
                  ForwardConfig: {
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          TargetGroups: {
                            allOf: [
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    TargetGroupArn: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupArn' },
                                        {
                                          description:
                                            'The Amazon Resource Name (ARN) of the target group.',
                                        },
                                      ],
                                    },
                                    Weight: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupWeight' },
                                        { description: 'The weight. The range is 0 to 999.' },
                                      ],
                                    },
                                  },
                                  description:
                                    'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                                },
                              },
                              {
                                description:
                                  'The target groups. For Network Load Balancers, you can specify a single target group.',
                              },
                            ],
                          },
                          TargetGroupStickinessConfig: {
                            allOf: [
                              {
                                type: 'object',
                                properties: {
                                  Enabled: {
                                    allOf: [
                                      { $ref: '#/components/schemas/TargetGroupStickinessEnabled' },
                                      {
                                        description:
                                          'Indicates whether target group stickiness is enabled.',
                                      },
                                    ],
                                  },
                                  DurationSeconds: {
                                    allOf: [
                                      {
                                        $ref: '#/components/schemas/TargetGroupStickinessDurationSeconds',
                                      },
                                      {
                                        description:
                                          'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                                      },
                                    ],
                                  },
                                },
                                description:
                                  'Information about the target group stickiness for a rule.',
                              },
                              { description: 'The target group stickiness for the rule.' },
                            ],
                          },
                        },
                        description: 'Information about a forward action.',
                      },
                      {
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      },
                    ],
                  },
                },
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'The tags to assign to the rule.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('CreateRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateRuleOutputSchema } } },
    480: {
      description: 'PriorityInUseException',
      content: { 'text/xml': { schema: PriorityInUseExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetGroupsException',
      content: { 'text/xml': { schema: TooManyTargetGroupsExceptionSchema } },
    },
    482: {
      description: 'TooManyRulesException',
      content: { 'text/xml': { schema: TooManyRulesExceptionSchema } },
    },
    483: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    484: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    485: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    486: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    488: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    489: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    492: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    493: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    494: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postActionCreateRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateRule',
  description:
    '<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>',
  operationId: 'POST_CreateRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateRuleInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateRuleOutputSchema } } },
    480: {
      description: 'PriorityInUseException',
      content: { 'text/xml': { schema: PriorityInUseExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetGroupsException',
      content: { 'text/xml': { schema: TooManyTargetGroupsExceptionSchema } },
    },
    482: {
      description: 'TooManyRulesException',
      content: { 'text/xml': { schema: TooManyRulesExceptionSchema } },
    },
    483: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    484: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    485: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    486: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    488: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    489: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    492: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    493: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    494: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getActionCreateTargetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateTargetGroup',
  description:
    '<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>',
  operationId: 'GET_CreateTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['HttpCode', ['Matcher']],
          ['GrpcCode', ['Matcher']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          Name: z
            .string()
            .openapi({
              param: {
                name: 'Name',
                in: 'query',
                required: true,
                description:
                  '<p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>',
                schema: { type: 'string' },
              },
            }),
          Protocol: z
            .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
            .exactOptional()
            .openapi({
              param: {
                name: 'Protocol',
                in: 'query',
                required: false,
                description:
                  'The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.',
                schema: {
                  type: 'string',
                  enum: ['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'],
                },
              },
            }),
          ProtocolVersion: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ProtocolVersion',
                in: 'query',
                required: false,
                description:
                  '[HTTP/HTTPS protocol] The protocol version. Specify <code>GRPC</code> to send requests to targets using gRPC. Specify <code>HTTP2</code> to send requests to targets using HTTP/2. The default is <code>HTTP1</code>, which sends requests to targets using HTTP/1.1.',
                schema: { type: 'string' },
              },
            }),
          Port: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(1).max(65535),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Port',
                in: 'query',
                required: false,
                description:
                  'The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.',
                schema: { type: 'integer', minimum: 1, maximum: 65535 },
              },
            }),
          VpcId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'VpcId',
                in: 'query',
                required: false,
                description:
                  'The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.',
                schema: { type: 'string' },
              },
            }),
          HealthCheckProtocol: z
            .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckProtocol',
                in: 'query',
                required: false,
                description:
                  'The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.',
                schema: {
                  type: 'string',
                  enum: ['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'],
                },
              },
            }),
          HealthCheckPort: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckPort',
                in: 'query',
                required: false,
                description:
                  'The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.',
                schema: { type: 'string' },
              },
            }),
          HealthCheckEnabled: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckEnabled',
                in: 'query',
                required: false,
                description:
                  'Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code>, <code>ip</code>, or <code>alb</code>, health checks are always enabled and cannot be disabled.',
                schema: { type: 'boolean' },
              },
            }),
          HealthCheckPath: z
            .string()
            .min(1)
            .max(1024)
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckPath',
                in: 'query',
                required: false,
                description:
                  '<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>',
                schema: { type: 'string', minLength: 1, maxLength: 1024 },
              },
            }),
          HealthCheckIntervalSeconds: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(5).max(300),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckIntervalSeconds',
                in: 'query',
                required: false,
                description:
                  'The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.',
                schema: { type: 'integer', minimum: 5, maximum: 300 },
              },
            }),
          HealthCheckTimeoutSeconds: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(120),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckTimeoutSeconds',
                in: 'query',
                required: false,
                description:
                  'The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is <code>lambda</code>, the default is 30 seconds.',
                schema: { type: 'integer', minimum: 2, maximum: 120 },
              },
            }),
          HealthyThresholdCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(10),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthyThresholdCount',
                in: 'query',
                required: false,
                description:
                  'The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is <code>lambda</code>, the default is 5.',
                schema: { type: 'integer', minimum: 2, maximum: 10 },
              },
            }),
          UnhealthyThresholdCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(10),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'UnhealthyThresholdCount',
                in: 'query',
                required: false,
                description:
                  'The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is <code>lambda</code>, the default is 5.',
                schema: { type: 'integer', minimum: 2, maximum: 10 },
              },
            }),
          Matcher: z
            .object({
              HttpCode: HttpCodeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Gateway Load Balancers, this must be "200–399".</p> <p>Note that when using shorthand syntax, some values such as commas need to be escaped.</p>',
                  }),
              ).exactOptional(),
              GrpcCode: GrpcCodeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Matcher',
                in: 'query',
                required: false,
                description:
                  '[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.',
                schema: {
                  type: 'object',
                  properties: {
                    HttpCode: {
                      allOf: [
                        { $ref: '#/components/schemas/HttpCode' },
                        {
                          description:
                            '<p>For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Gateway Load Balancers, this must be "200–399".</p> <p>Note that when using shorthand syntax, some values such as commas need to be escaped.</p>',
                        },
                      ],
                    },
                    GrpcCode: {
                      allOf: [
                        { $ref: '#/components/schemas/GrpcCode' },
                        {
                          description:
                            'You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.',
                        },
                      ],
                    },
                  },
                  description:
                    'The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. ',
                },
              },
              description:
                'The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. ',
              required: [],
            }),
          TargetType: z
            .enum(['instance', 'ip', 'lambda', 'alb'])
            .exactOptional()
            .openapi({
              param: {
                name: 'TargetType',
                in: 'query',
                required: false,
                description:
                  "<p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Register targets by instance ID. This is the default value.</p> </li> <li> <p> <code>ip</code> - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - Register a single Lambda function as a target.</p> </li> <li> <p> <code>alb</code> - Register a single Application Load Balancer as a target.</p> </li> </ul>",
                schema: { type: 'string', enum: ['instance', 'ip', 'lambda', 'alb'] },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(TagSchema).min(1),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description: 'The tags to assign to the target group.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' }, minItems: 1 },
              },
            }),
          IpAddressType: z
            .enum(['ipv4', 'ipv6'])
            .exactOptional()
            .openapi({
              param: {
                name: 'IpAddressType',
                in: 'query',
                required: false,
                description:
                  'The type of IP address used for this target group. The possible values are <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.',
                schema: { type: 'string', enum: ['ipv4', 'ipv6'] },
              },
            }),
          Action: z
            .literal('CreateTargetGroup')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateTargetGroup'] },
              },
            }),
          Version: z
            .literal('2015-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2015-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTargetGroupOutputSchema } },
    },
    480: {
      description: 'DuplicateTargetGroupNameException',
      content: { 'text/xml': { schema: DuplicateTargetGroupNameExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetGroupsException',
      content: { 'text/xml': { schema: TooManyTargetGroupsExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postActionCreateTargetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateTargetGroup',
  description:
    '<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>',
  operationId: 'POST_CreateTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('CreateTargetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateTargetGroup'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateTargetGroupInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateTargetGroupOutputSchema } },
    },
    480: {
      description: 'DuplicateTargetGroupNameException',
      content: { 'text/xml': { schema: DuplicateTargetGroupNameExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetGroupsException',
      content: { 'text/xml': { schema: TooManyTargetGroupsExceptionSchema } },
    },
    482: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getActionDeleteListenerRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteListener',
  description:
    '<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>',
  operationId: 'GET_DeleteListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteListenerOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postActionDeleteListenerRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteListener',
  description:
    '<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>',
  operationId: 'POST_DeleteListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteListenerOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getActionDeleteLoadBalancerRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteLoadBalancer',
  description:
    "<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>",
  operationId: 'GET_DeleteLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postActionDeleteLoadBalancerRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteLoadBalancer',
  description:
    "<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>",
  operationId: 'POST_DeleteLoadBalancer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteLoadBalancer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteLoadBalancer'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteLoadBalancerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteLoadBalancerOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getActionDeleteRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteRule',
  description: "<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>",
  operationId: 'GET_DeleteRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      RuleArn: z
        .string()
        .openapi({
          param: {
            name: 'RuleArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the rule.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DeleteRuleOutputSchema } } },
    480: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postActionDeleteRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteRule',
  description: "<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>",
  operationId: 'POST_DeleteRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteRuleInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DeleteRuleOutputSchema } } },
    480: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const getActionDeleteTargetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteTargetGroup',
  description:
    '<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>',
  operationId: 'GET_DeleteTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteTargetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTargetGroup'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTargetGroupOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postActionDeleteTargetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteTargetGroup',
  description:
    '<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>',
  operationId: 'POST_DeleteTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeleteTargetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteTargetGroup'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteTargetGroupInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteTargetGroupOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'text/xml': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getActionDeregisterTargetsRoute = createRoute({
  method: 'get',
  path: '/#Action=DeregisterTargets',
  description:
    'Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.',
  operationId: 'GET_DeregisterTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Targets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: TargetIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                    }),
                ),
                Port: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    PortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      }),
                  )
                  .exactOptional(),
                AvailabilityZone: ZoneNameSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                    }),
                ).exactOptional(),
              })
              .openapi({ required: ['Id'], description: 'Information about a target.' }),
          ),
        )
        .openapi({
          param: {
            name: 'Targets',
            in: 'query',
            required: true,
            description:
              'The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Id'],
                properties: {
                  Id: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetId' },
                      {
                        description:
                          'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                      },
                    ],
                  },
                  Port: {
                    allOf: [
                      { $ref: '#/components/schemas/Port' },
                      {
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      },
                    ],
                  },
                  AvailabilityZone: {
                    allOf: [
                      { $ref: '#/components/schemas/ZoneName' },
                      {
                        description:
                          '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                      },
                    ],
                  },
                },
                description: 'Information about a target.',
              },
            },
          },
        }),
      Action: z
        .literal('DeregisterTargets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeregisterTargets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeregisterTargetsOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
  },
})

export const postActionDeregisterTargetsRoute = createRoute({
  method: 'post',
  path: '/#Action=DeregisterTargets',
  description:
    'Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.',
  operationId: 'POST_DeregisterTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DeregisterTargets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeregisterTargets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeregisterTargetsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeregisterTargetsOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
  },
})

export const getActionDescribeAccountLimitsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAccountLimits',
  description:
    '<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>',
  operationId: 'GET_DescribeAccountLimits',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeAccountLimits')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountLimits'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountLimitsOutputSchema } },
    },
  },
})

export const postActionDescribeAccountLimitsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAccountLimits',
  description:
    '<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>',
  operationId: 'POST_DescribeAccountLimits',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeAccountLimits')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountLimits'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeAccountLimitsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountLimitsOutputSchema } },
    },
  },
})

export const getActionDescribeListenerCertificatesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeListenerCertificates',
  description:
    '<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'GET_DescribeListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Names (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeListenerCertificatesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeListenerCertificates',
  description:
    '<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'POST_DescribeListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeListenerCertificatesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeListenersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeListeners',
  description:
    'Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.',
  operationId: 'GET_DescribeListeners',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      ListenerArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ListenerArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ListenerArns',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Names (ARN) of the listeners.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ListenerArn' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeListeners'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeListenersOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const postActionDescribeListenersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeListeners',
  description:
    'Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.',
  operationId: 'POST_DescribeListeners',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('DescribeListeners')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeListeners'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeListenersInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeListenersOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancerAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancerAttributes',
  description:
    '<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>',
  operationId: 'GET_DescribeLoadBalancerAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancerAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancerAttributes',
  description:
    '<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>',
  operationId: 'POST_DescribeLoadBalancerAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeLoadBalancerAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeLoadBalancersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeLoadBalancers',
  description: 'Describes the specified load balancers or all of your load balancers.',
  operationId: 'GET_DescribeLoadBalancers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LoadBalancerArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerArns',
            in: 'query',
            required: false,
            description:
              'The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/LoadBalancerArn' } },
          },
        }),
      Names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LoadBalancerNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Names',
            in: 'query',
            required: false,
            description: 'The names of the load balancers.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/LoadBalancerName' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeLoadBalancers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancers'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancersOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeLoadBalancersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeLoadBalancers',
  description: 'Describes the specified load balancers or all of your load balancers.',
  operationId: 'POST_DescribeLoadBalancers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('DescribeLoadBalancers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeLoadBalancers'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeLoadBalancersInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeLoadBalancersOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeRulesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeRules',
  description:
    'Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.',
  operationId: 'GET_DescribeRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      RuleArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RuleArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'RuleArns',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Names (ARN) of the rules.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/RuleArn' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeRules'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeRulesOutputSchema } } },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const postActionDescribeRulesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeRules',
  description:
    'Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.',
  operationId: 'POST_DescribeRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeRules')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeRules'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeRulesInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeRulesOutputSchema } } },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
  },
})

export const getActionDescribeSSLPoliciesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeSSLPolicies',
  description:
    '<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'GET_DescribeSSLPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SslPolicyNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Names',
            in: 'query',
            required: false,
            description: 'The names of the policies.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SslPolicyName' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      LoadBalancerType: z
        .enum(['application', 'network', 'gateway'])
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerType',
            in: 'query',
            required: false,
            description:
              ' The type of load balancer. The default lists the SSL policies for all load balancers.',
            schema: { type: 'string', enum: ['application', 'network', 'gateway'] },
          },
        }),
      Action: z
        .literal('DescribeSSLPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSSLPolicies'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSSLPoliciesOutputSchema } },
    },
    480: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeSSLPoliciesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeSSLPolicies',
  description:
    '<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
  operationId: 'POST_DescribeSSLPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeSSLPolicies')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSSLPolicies'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeSSLPoliciesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSSLPoliciesOutputSchema } },
    },
    480: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeTags',
  description:
    'Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.',
  operationId: 'GET_DescribeTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ResourceArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceArnSchema),
        )
        .openapi({
          param: {
            name: 'ResourceArns',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ResourceArn' } },
          },
        }),
      Action: z
        .literal('DescribeTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeTagsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeTags',
  description:
    'Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.',
  operationId: 'POST_DescribeTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeTagsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeTargetGroupAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeTargetGroupAttributes',
  description:
    '<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>',
  operationId: 'GET_DescribeTargetGroupAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeTargetGroupAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetGroupAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetGroupAttributesOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeTargetGroupAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeTargetGroupAttributes',
  description:
    '<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>',
  operationId: 'POST_DescribeTargetGroupAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeTargetGroupAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetGroupAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeTargetGroupAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetGroupAttributesOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeTargetGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeTargetGroups',
  description:
    'Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.',
  operationId: 'GET_DescribeTargetGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      TargetGroupArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TargetGroupArnSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'TargetGroupArns',
            in: 'query',
            required: false,
            description: 'The Amazon Resource Names (ARN) of the target groups.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TargetGroupArn' } },
          },
        }),
      Names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TargetGroupNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Names',
            in: 'query',
            required: false,
            description: 'The names of the target groups.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TargetGroupName' } },
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(400),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 400 },
          },
        }),
      Action: z
        .literal('DescribeTargetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetGroups'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetGroupsOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
  },
})

export const postActionDescribeTargetGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeTargetGroups',
  description:
    'Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.',
  operationId: 'POST_DescribeTargetGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Action: z
        .literal('DescribeTargetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetGroups'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeTargetGroupsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetGroupsOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
  },
})

export const getActionDescribeTargetHealthRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeTargetHealth',
  description: 'Describes the health of the specified targets or all of your targets.',
  operationId: 'GET_DescribeTargetHealth',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Targets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: TargetIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                    }),
                ),
                Port: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    PortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      }),
                  )
                  .exactOptional(),
                AvailabilityZone: ZoneNameSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                    }),
                ).exactOptional(),
              })
              .openapi({ required: ['Id'], description: 'Information about a target.' }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Targets',
            in: 'query',
            required: false,
            description: 'The targets.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Id'],
                properties: {
                  Id: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetId' },
                      {
                        description:
                          'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                      },
                    ],
                  },
                  Port: {
                    allOf: [
                      { $ref: '#/components/schemas/Port' },
                      {
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      },
                    ],
                  },
                  AvailabilityZone: {
                    allOf: [
                      { $ref: '#/components/schemas/ZoneName' },
                      {
                        description:
                          '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                      },
                    ],
                  },
                },
                description: 'Information about a target.',
              },
            },
          },
        }),
      Action: z
        .literal('DescribeTargetHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetHealth'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetHealthOutputSchema } },
    },
    480: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'HealthUnavailableException',
      content: { 'text/xml': { schema: HealthUnavailableExceptionSchema } },
    },
  },
})

export const postActionDescribeTargetHealthRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeTargetHealth',
  description: 'Describes the health of the specified targets or all of your targets.',
  operationId: 'POST_DescribeTargetHealth',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('DescribeTargetHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeTargetHealth'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeTargetHealthInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeTargetHealthOutputSchema } },
    },
    480: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'HealthUnavailableException',
      content: { 'text/xml': { schema: HealthUnavailableExceptionSchema } },
    },
  },
})

export const getActionModifyListenerRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyListener',
  description:
    '<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>',
  operationId: 'GET_ModifyListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(65535),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Port',
            in: 'query',
            required: false,
            description:
              'The port for connections from clients to the load balancer. You cannot specify a port for a Gateway Load Balancer.',
            schema: { type: 'integer', minimum: 1, maximum: 65535 },
          },
        }),
      Protocol: z
        .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Protocol',
            in: 'query',
            required: false,
            description:
              'The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols. You can’t change the protocol to UDP or TCP_UDP if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.',
            schema: {
              type: 'string',
              enum: ['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'],
            },
          },
        }),
      SslPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SslPolicy',
            in: 'query',
            required: false,
            description:
              '<p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
            schema: { type: 'string' },
          },
        }),
      Certificates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                CertificateArn: CertificateArnSchema.and(
                  z
                    .any()
                    .openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
                ).exactOptional(),
                IsDefault: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    DefaultSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Information about an SSL server certificate.',
                required: [],
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Certificates',
            in: 'query',
            required: false,
            description:
              '[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  CertificateArn: {
                    allOf: [
                      { $ref: '#/components/schemas/CertificateArn' },
                      { description: 'The Amazon Resource Name (ARN) of the certificate.' },
                    ],
                  },
                  IsDefault: {
                    allOf: [
                      { $ref: '#/components/schemas/Default' },
                      {
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      },
                    ],
                  },
                },
                description: 'Information about an SSL server certificate.',
              },
            },
          },
        }),
      DefaultActions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Type: ActionTypeEnumSchema.and(
                  z.any().openapi({ description: 'The type of action.' }),
                ),
                TargetGroupArn: TargetGroupArnSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                    }),
                ).exactOptional(),
                AuthenticateOidcConfig: z
                  .object({
                    Issuer: AuthenticateOidcActionIssuerSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    TokenEndpoint: AuthenticateOidcActionTokenEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    ClientId: AuthenticateOidcActionClientIdSchema.and(
                      z.any().openapi({ description: 'The OAuth 2.0 client identifier.' }),
                    ),
                    ClientSecret: AuthenticateOidcActionClientSecretSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                        }),
                    ).exactOptional(),
                    SessionCookieName: AuthenticateOidcActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateOidcActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateOidcActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateOidcActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateOidcActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                    UseExistingClientSecret: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        AuthenticateOidcActionUseExistingClientSecretSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                          }),
                      )
                      .exactOptional(),
                  })
                  .openapi({
                    required: [
                      'Issuer',
                      'AuthorizationEndpoint',
                      'TokenEndpoint',
                      'UserInfoEndpoint',
                      'ClientId',
                    ],
                    description:
                      'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      }),
                  )
                  .exactOptional(),
                AuthenticateCognitoConfig: z
                  .object({
                    UserPoolArn: AuthenticateCognitoActionUserPoolArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                        }),
                    ),
                    UserPoolClientId: AuthenticateCognitoActionUserPoolClientIdSchema.and(
                      z
                        .any()
                        .openapi({ description: 'The ID of the Amazon Cognito user pool client.' }),
                    ),
                    UserPoolDomain: AuthenticateCognitoActionUserPoolDomainSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                        }),
                    ),
                    SessionCookieName: AuthenticateCognitoActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateCognitoActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateCognitoActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateCognitoActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                  })
                  .openapi({
                    required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                    description:
                      'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      }),
                  )
                  .exactOptional(),
                Order: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    ActionOrderSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      }),
                  )
                  .exactOptional(),
                RedirectConfig: RedirectActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                    }),
                ).exactOptional(),
                FixedResponseConfig: FixedResponseActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                    }),
                ).exactOptional(),
                ForwardConfig: z
                  .object({
                    TargetGroups: z
                      .array(
                        z
                          .object({
                            TargetGroupArn: TargetGroupArnSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The Amazon Resource Name (ARN) of the target group.',
                                }),
                            ).exactOptional(),
                            Weight: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                TargetGroupWeightSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({ description: 'The weight. The range is 0 to 999.' }),
                              )
                              .exactOptional(),
                          })
                          .openapi({
                            description:
                              'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                            required: [],
                          }),
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The target groups. For Network Load Balancers, you can specify a single target group.',
                          }),
                      )
                      .exactOptional(),
                    TargetGroupStickinessConfig: z
                      .object({
                        Enabled: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            TargetGroupStickinessEnabledSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'Indicates whether target group stickiness is enabled.',
                              }),
                          )
                          .exactOptional(),
                        DurationSeconds: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            TargetGroupStickinessDurationSecondsSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({
                        description: 'Information about the target group stickiness for a rule.',
                        required: [],
                      })
                      .and(
                        z
                          .any()
                          .openapi({ description: 'The target group stickiness for the rule.' }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ description: 'Information about a forward action.', required: [] })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['Type'],
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'DefaultActions',
            in: 'query',
            required: false,
            description: 'The actions for the default rule.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Type'],
                properties: {
                  Type: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionTypeEnum' },
                      { description: 'The type of action.' },
                    ],
                  },
                  TargetGroupArn: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetGroupArn' },
                      {
                        description:
                          'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                      },
                    ],
                  },
                  AuthenticateOidcConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: [
                          'Issuer',
                          'AuthorizationEndpoint',
                          'TokenEndpoint',
                          'UserInfoEndpoint',
                          'ClientId',
                        ],
                        properties: {
                          Issuer: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionIssuer' },
                              {
                                description:
                                  'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          AuthorizationEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthorizationEndpoint',
                              },
                              {
                                description:
                                  'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          TokenEndpoint: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionTokenEndpoint' },
                              {
                                description:
                                  'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          UserInfoEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUserInfoEndpoint',
                              },
                              {
                                description:
                                  'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          ClientId: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientId' },
                              { description: 'The OAuth 2.0 client identifier.' },
                            ],
                          },
                          ClientSecret: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientSecret' },
                              {
                                description:
                                  'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionSessionTimeout' },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                          UseExistingClientSecret: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUseExistingClientSecret',
                              },
                              {
                                description:
                                  'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      },
                    ],
                  },
                  AuthenticateCognitoConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                        properties: {
                          UserPoolArn: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolArn' },
                              {
                                description:
                                  'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          UserPoolClientId: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolClientId',
                              },
                              { description: 'The ID of the Amazon Cognito user pool client.' },
                            ],
                          },
                          UserPoolDomain: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolDomain',
                              },
                              {
                                description:
                                  'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionTimeout',
                              },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      },
                    ],
                  },
                  Order: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionOrder' },
                      {
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      },
                    ],
                  },
                  RedirectConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/RedirectActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                      },
                    ],
                  },
                  FixedResponseConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/FixedResponseActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                      },
                    ],
                  },
                  ForwardConfig: {
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          TargetGroups: {
                            allOf: [
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    TargetGroupArn: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupArn' },
                                        {
                                          description:
                                            'The Amazon Resource Name (ARN) of the target group.',
                                        },
                                      ],
                                    },
                                    Weight: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupWeight' },
                                        { description: 'The weight. The range is 0 to 999.' },
                                      ],
                                    },
                                  },
                                  description:
                                    'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                                },
                              },
                              {
                                description:
                                  'The target groups. For Network Load Balancers, you can specify a single target group.',
                              },
                            ],
                          },
                          TargetGroupStickinessConfig: {
                            allOf: [
                              {
                                type: 'object',
                                properties: {
                                  Enabled: {
                                    allOf: [
                                      { $ref: '#/components/schemas/TargetGroupStickinessEnabled' },
                                      {
                                        description:
                                          'Indicates whether target group stickiness is enabled.',
                                      },
                                    ],
                                  },
                                  DurationSeconds: {
                                    allOf: [
                                      {
                                        $ref: '#/components/schemas/TargetGroupStickinessDurationSeconds',
                                      },
                                      {
                                        description:
                                          'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                                      },
                                    ],
                                  },
                                },
                                description:
                                  'Information about the target group stickiness for a rule.',
                              },
                              { description: 'The target group stickiness for the rule.' },
                            ],
                          },
                        },
                        description: 'Information about a forward action.',
                      },
                      {
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      },
                    ],
                  },
                },
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              },
            },
          },
        }),
      AlpnPolicy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AlpnPolicyValueSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AlpnPolicy',
            in: 'query',
            required: false,
            description:
              '<p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/AlpnPolicyValue' } },
          },
        }),
      Action: z
        .literal('ModifyListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyListenerOutputSchema } },
    },
    480: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    481: {
      description: 'TooManyListenersException',
      content: { 'text/xml': { schema: TooManyListenersExceptionSchema } },
    },
    482: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    483: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    484: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    485: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    486: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    487: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
    488: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    489: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    492: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    493: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    494: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    495: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    496: {
      description: 'ALPNPolicyNotSupportedException',
      content: { 'text/xml': { schema: ALPNPolicyNotSupportedExceptionSchema } },
    },
  },
})

export const postActionModifyListenerRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyListener',
  description:
    '<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>',
  operationId: 'POST_ModifyListener',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ModifyListener')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyListener'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyListenerInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyListenerOutputSchema } },
    },
    480: {
      description: 'DuplicateListenerException',
      content: { 'text/xml': { schema: DuplicateListenerExceptionSchema } },
    },
    481: {
      description: 'TooManyListenersException',
      content: { 'text/xml': { schema: TooManyListenersExceptionSchema } },
    },
    482: {
      description: 'TooManyCertificatesException',
      content: { 'text/xml': { schema: TooManyCertificatesExceptionSchema } },
    },
    483: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    484: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    485: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    486: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    487: {
      description: 'SSLPolicyNotFoundException',
      content: { 'text/xml': { schema: SSLPolicyNotFoundExceptionSchema } },
    },
    488: {
      description: 'CertificateNotFoundException',
      content: { 'text/xml': { schema: CertificateNotFoundExceptionSchema } },
    },
    489: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    490: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    491: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    492: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    493: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    494: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    495: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
    496: {
      description: 'ALPNPolicyNotSupportedException',
      content: { 'text/xml': { schema: ALPNPolicyNotSupportedExceptionSchema } },
    },
  },
})

export const getActionModifyLoadBalancerAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyLoadBalancerAttributes',
  description:
    "<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>",
  operationId: 'GET_ModifyLoadBalancerAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Attributes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LoadBalancerAttributeSchema).max(20),
        )
        .openapi({
          param: {
            name: 'Attributes',
            in: 'query',
            required: true,
            description: 'The load balancer attributes.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/LoadBalancerAttribute' },
              maxItems: 20,
            },
          },
        }),
      Action: z
        .literal('ModifyLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionModifyLoadBalancerAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyLoadBalancerAttributes',
  description:
    "<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>",
  operationId: 'POST_ModifyLoadBalancerAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ModifyLoadBalancerAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyLoadBalancerAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyLoadBalancerAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyLoadBalancerAttributesOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionModifyRuleRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyRule',
  description:
    '<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>',
  operationId: 'GET_ModifyRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      RuleArn: z
        .string()
        .openapi({
          param: {
            name: 'RuleArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the rule.',
            schema: { type: 'string' },
          },
        }),
      Conditions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RuleConditionSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Conditions',
            in: 'query',
            required: false,
            description: 'The conditions.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/RuleCondition' } },
          },
        }),
      Actions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Type: ActionTypeEnumSchema.and(
                  z.any().openapi({ description: 'The type of action.' }),
                ),
                TargetGroupArn: TargetGroupArnSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                    }),
                ).exactOptional(),
                AuthenticateOidcConfig: z
                  .object({
                    Issuer: AuthenticateOidcActionIssuerSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    TokenEndpoint: AuthenticateOidcActionTokenEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpointSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                        }),
                    ),
                    ClientId: AuthenticateOidcActionClientIdSchema.and(
                      z.any().openapi({ description: 'The OAuth 2.0 client identifier.' }),
                    ),
                    ClientSecret: AuthenticateOidcActionClientSecretSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                        }),
                    ).exactOptional(),
                    SessionCookieName: AuthenticateOidcActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateOidcActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateOidcActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateOidcActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateOidcActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                    UseExistingClientSecret: z
                      .preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        AuthenticateOidcActionUseExistingClientSecretSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                          }),
                      )
                      .exactOptional(),
                  })
                  .openapi({
                    required: [
                      'Issuer',
                      'AuthorizationEndpoint',
                      'TokenEndpoint',
                      'UserInfoEndpoint',
                      'ClientId',
                    ],
                    description:
                      'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      }),
                  )
                  .exactOptional(),
                AuthenticateCognitoConfig: z
                  .object({
                    UserPoolArn: AuthenticateCognitoActionUserPoolArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                        }),
                    ),
                    UserPoolClientId: AuthenticateCognitoActionUserPoolClientIdSchema.and(
                      z
                        .any()
                        .openapi({ description: 'The ID of the Amazon Cognito user pool client.' }),
                    ),
                    UserPoolDomain: AuthenticateCognitoActionUserPoolDomainSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                        }),
                    ),
                    SessionCookieName: AuthenticateCognitoActionSessionCookieNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                        }),
                    ).exactOptional(),
                    Scope: AuthenticateCognitoActionScopeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                        }),
                    ).exactOptional(),
                    SessionTimeout: z
                      .preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        AuthenticateCognitoActionSessionTimeoutSchema,
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                          }),
                      )
                      .exactOptional(),
                    AuthenticationRequestExtraParams:
                      AuthenticateCognitoActionAuthenticationRequestExtraParamsSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                          }),
                      ).exactOptional(),
                    OnUnauthenticatedRequest:
                      AuthenticateCognitoActionConditionalBehaviorEnumSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                          }),
                      ).exactOptional(),
                  })
                  .openapi({
                    required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                    description:
                      'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                  })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      }),
                  )
                  .exactOptional(),
                Order: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    ActionOrderSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      }),
                  )
                  .exactOptional(),
                RedirectConfig: RedirectActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                    }),
                ).exactOptional(),
                FixedResponseConfig: FixedResponseActionConfigSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                    }),
                ).exactOptional(),
                ForwardConfig: z
                  .object({
                    TargetGroups: z
                      .array(
                        z
                          .object({
                            TargetGroupArn: TargetGroupArnSchema.and(
                              z
                                .any()
                                .openapi({
                                  description:
                                    'The Amazon Resource Name (ARN) of the target group.',
                                }),
                            ).exactOptional(),
                            Weight: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                TargetGroupWeightSchema,
                              )
                              .and(
                                z
                                  .any()
                                  .openapi({ description: 'The weight. The range is 0 to 999.' }),
                              )
                              .exactOptional(),
                          })
                          .openapi({
                            description:
                              'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                            required: [],
                          }),
                      )
                      .and(
                        z
                          .any()
                          .openapi({
                            description:
                              'The target groups. For Network Load Balancers, you can specify a single target group.',
                          }),
                      )
                      .exactOptional(),
                    TargetGroupStickinessConfig: z
                      .object({
                        Enabled: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            TargetGroupStickinessEnabledSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'Indicates whether target group stickiness is enabled.',
                              }),
                          )
                          .exactOptional(),
                        DurationSeconds: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            TargetGroupStickinessDurationSecondsSchema,
                          )
                          .and(
                            z
                              .any()
                              .openapi({
                                description:
                                  'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                              }),
                          )
                          .exactOptional(),
                      })
                      .openapi({
                        description: 'Information about the target group stickiness for a rule.',
                        required: [],
                      })
                      .and(
                        z
                          .any()
                          .openapi({ description: 'The target group stickiness for the rule.' }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ description: 'Information about a forward action.', required: [] })
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                required: ['Type'],
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Actions',
            in: 'query',
            required: false,
            description: 'The actions.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Type'],
                properties: {
                  Type: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionTypeEnum' },
                      { description: 'The type of action.' },
                    ],
                  },
                  TargetGroupArn: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetGroupArn' },
                      {
                        description:
                          'The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead.',
                      },
                    ],
                  },
                  AuthenticateOidcConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: [
                          'Issuer',
                          'AuthorizationEndpoint',
                          'TokenEndpoint',
                          'UserInfoEndpoint',
                          'ClientId',
                        ],
                        properties: {
                          Issuer: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionIssuer' },
                              {
                                description:
                                  'The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          AuthorizationEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthorizationEndpoint',
                              },
                              {
                                description:
                                  'The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          TokenEndpoint: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionTokenEndpoint' },
                              {
                                description:
                                  'The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          UserInfoEndpoint: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUserInfoEndpoint',
                              },
                              {
                                description:
                                  'The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.',
                              },
                            ],
                          },
                          ClientId: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientId' },
                              { description: 'The OAuth 2.0 client identifier.' },
                            ],
                          },
                          ClientSecret: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionClientSecret' },
                              {
                                description:
                                  'The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateOidcActionSessionTimeout' },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                          UseExistingClientSecret: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateOidcActionUseExistingClientSecret',
                              },
                              {
                                description:
                                  'Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.',
                      },
                    ],
                  },
                  AuthenticateCognitoConfig: {
                    allOf: [
                      {
                        type: 'object',
                        required: ['UserPoolArn', 'UserPoolClientId', 'UserPoolDomain'],
                        properties: {
                          UserPoolArn: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolArn' },
                              {
                                description:
                                  'The Amazon Resource Name (ARN) of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          UserPoolClientId: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolClientId',
                              },
                              { description: 'The ID of the Amazon Cognito user pool client.' },
                            ],
                          },
                          UserPoolDomain: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionUserPoolDomain',
                              },
                              {
                                description:
                                  'The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.',
                              },
                            ],
                          },
                          SessionCookieName: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionCookieName',
                              },
                              {
                                description:
                                  'The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.',
                              },
                            ],
                          },
                          Scope: {
                            allOf: [
                              { $ref: '#/components/schemas/AuthenticateCognitoActionScope' },
                              {
                                description:
                                  '<p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p> <p>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</p>',
                              },
                            ],
                          },
                          SessionTimeout: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionSessionTimeout',
                              },
                              {
                                description:
                                  'The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).',
                              },
                            ],
                          },
                          AuthenticationRequestExtraParams: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionAuthenticationRequestExtraParams',
                              },
                              {
                                description:
                                  'The query parameters (up to 10) to include in the redirect request to the authorization endpoint.',
                              },
                            ],
                          },
                          OnUnauthenticatedRequest: {
                            allOf: [
                              {
                                $ref: '#/components/schemas/AuthenticateCognitoActionConditionalBehaviorEnum',
                              },
                              {
                                description:
                                  '<p>The behavior if the user is not authenticated. The following are possible values:</p> <ul> <li> <p>deny<code/> - Return an HTTP 401 Unauthorized error.</p> </li> <li> <p>allow<code/> - Allow the request to be forwarded to the target.</p> </li> <li> <p>authenticate<code/> - Redirect the request to the IdP authorization endpoint. This is the default value.</p> </li> </ul>',
                              },
                            ],
                          },
                        },
                        description:
                          'Request parameters to use when integrating with Amazon Cognito to authenticate users.',
                      },
                      {
                        description:
                          '[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.',
                      },
                    ],
                  },
                  Order: {
                    allOf: [
                      { $ref: '#/components/schemas/ActionOrder' },
                      {
                        description:
                          'The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.',
                      },
                    ],
                  },
                  RedirectConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/RedirectActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.',
                      },
                    ],
                  },
                  FixedResponseConfig: {
                    allOf: [
                      { $ref: '#/components/schemas/FixedResponseActionConfig' },
                      {
                        description:
                          '[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.',
                      },
                    ],
                  },
                  ForwardConfig: {
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          TargetGroups: {
                            allOf: [
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    TargetGroupArn: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupArn' },
                                        {
                                          description:
                                            'The Amazon Resource Name (ARN) of the target group.',
                                        },
                                      ],
                                    },
                                    Weight: {
                                      allOf: [
                                        { $ref: '#/components/schemas/TargetGroupWeight' },
                                        { description: 'The weight. The range is 0 to 999.' },
                                      ],
                                    },
                                  },
                                  description:
                                    'Information about how traffic will be distributed between multiple target groups in a forward rule.',
                                },
                              },
                              {
                                description:
                                  'The target groups. For Network Load Balancers, you can specify a single target group.',
                              },
                            ],
                          },
                          TargetGroupStickinessConfig: {
                            allOf: [
                              {
                                type: 'object',
                                properties: {
                                  Enabled: {
                                    allOf: [
                                      { $ref: '#/components/schemas/TargetGroupStickinessEnabled' },
                                      {
                                        description:
                                          'Indicates whether target group stickiness is enabled.',
                                      },
                                    ],
                                  },
                                  DurationSeconds: {
                                    allOf: [
                                      {
                                        $ref: '#/components/schemas/TargetGroupStickinessDurationSeconds',
                                      },
                                      {
                                        description:
                                          'The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).',
                                      },
                                    ],
                                  },
                                },
                                description:
                                  'Information about the target group stickiness for a rule.',
                              },
                              { description: 'The target group stickiness for the rule.' },
                            ],
                          },
                        },
                        description: 'Information about a forward action.',
                      },
                      {
                        description:
                          'Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.',
                      },
                    ],
                  },
                },
                description:
                  '<p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>',
              },
            },
          },
        }),
      Action: z
        .literal('ModifyRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ModifyRuleOutputSchema } } },
    480: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    481: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    482: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
    484: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    485: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    486: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    487: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    488: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    489: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    490: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
  },
})

export const postActionModifyRuleRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyRule',
  description:
    '<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>',
  operationId: 'POST_ModifyRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ModifyRule')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyRule'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyRuleInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ModifyRuleOutputSchema } } },
    480: {
      description: 'TargetGroupAssociationLimitException',
      content: { 'text/xml': { schema: TargetGroupAssociationLimitExceptionSchema } },
    },
    481: {
      description: 'IncompatibleProtocolsException',
      content: { 'text/xml': { schema: IncompatibleProtocolsExceptionSchema } },
    },
    482: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    483: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
    484: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
    485: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    486: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    487: {
      description: 'UnsupportedProtocolException',
      content: { 'text/xml': { schema: UnsupportedProtocolExceptionSchema } },
    },
    488: {
      description: 'TooManyActionsException',
      content: { 'text/xml': { schema: TooManyActionsExceptionSchema } },
    },
    489: {
      description: 'InvalidLoadBalancerActionException',
      content: { 'text/xml': { schema: InvalidLoadBalancerActionExceptionSchema } },
    },
    490: {
      description: 'TooManyUniqueTargetGroupsPerLoadBalancerException',
      content: { 'text/xml': { schema: TooManyUniqueTargetGroupsPerLoadBalancerExceptionSchema } },
    },
  },
})

export const getActionModifyTargetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyTargetGroup',
  description:
    'Modifies the health checks used when evaluating the health state of the targets in the specified target group.',
  operationId: 'GET_ModifyTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['HttpCode', ['Matcher']],
          ['GrpcCode', ['Matcher']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          TargetGroupArn: z
            .string()
            .openapi({
              param: {
                name: 'TargetGroupArn',
                in: 'query',
                required: true,
                description: 'The Amazon Resource Name (ARN) of the target group.',
                schema: { type: 'string' },
              },
            }),
          HealthCheckProtocol: z
            .enum(['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'])
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckProtocol',
                in: 'query',
                required: false,
                description:
                  'The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.',
                schema: {
                  type: 'string',
                  enum: ['HTTP', 'HTTPS', 'TCP', 'TLS', 'UDP', 'TCP_UDP', 'GENEVE'],
                },
              },
            }),
          HealthCheckPort: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckPort',
                in: 'query',
                required: false,
                description:
                  'The port the load balancer uses when performing health checks on targets.',
                schema: { type: 'string' },
              },
            }),
          HealthCheckPath: z
            .string()
            .min(1)
            .max(1024)
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckPath',
                in: 'query',
                required: false,
                description:
                  '<p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>',
                schema: { type: 'string', minLength: 1, maxLength: 1024 },
              },
            }),
          HealthCheckEnabled: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckEnabled',
                in: 'query',
                required: false,
                description: 'Indicates whether health checks are enabled.',
                schema: { type: 'boolean' },
              },
            }),
          HealthCheckIntervalSeconds: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(5).max(300),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckIntervalSeconds',
                in: 'query',
                required: false,
                description:
                  'The approximate amount of time, in seconds, between health checks of an individual target.',
                schema: { type: 'integer', minimum: 5, maximum: 300 },
              },
            }),
          HealthCheckTimeoutSeconds: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(120),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthCheckTimeoutSeconds',
                in: 'query',
                required: false,
                description:
                  '[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.',
                schema: { type: 'integer', minimum: 2, maximum: 120 },
              },
            }),
          HealthyThresholdCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(10),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'HealthyThresholdCount',
                in: 'query',
                required: false,
                description:
                  'The number of consecutive health checks successes required before considering an unhealthy target healthy.',
                schema: { type: 'integer', minimum: 2, maximum: 10 },
              },
            }),
          UnhealthyThresholdCount: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(2).max(10),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'UnhealthyThresholdCount',
                in: 'query',
                required: false,
                description:
                  'The number of consecutive health check failures required before considering the target unhealthy.',
                schema: { type: 'integer', minimum: 2, maximum: 10 },
              },
            }),
          Matcher: z
            .object({
              HttpCode: HttpCodeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Gateway Load Balancers, this must be "200–399".</p> <p>Note that when using shorthand syntax, some values such as commas need to be escaped.</p>',
                  }),
              ).exactOptional(),
              GrpcCode: GrpcCodeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Matcher',
                in: 'query',
                required: false,
                description:
                  '[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.',
                schema: {
                  type: 'object',
                  properties: {
                    HttpCode: {
                      allOf: [
                        { $ref: '#/components/schemas/HttpCode' },
                        {
                          description:
                            '<p>For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p> <p>For Gateway Load Balancers, this must be "200–399".</p> <p>Note that when using shorthand syntax, some values such as commas need to be escaped.</p>',
                        },
                      ],
                    },
                    GrpcCode: {
                      allOf: [
                        { $ref: '#/components/schemas/GrpcCode' },
                        {
                          description:
                            'You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.',
                        },
                      ],
                    },
                  },
                  description:
                    'The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. ',
                },
              },
              description:
                'The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. ',
              required: [],
            }),
          Action: z
            .literal('ModifyTargetGroup')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['ModifyTargetGroup'] },
              },
            }),
          Version: z
            .literal('2015-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2015-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyTargetGroupOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionModifyTargetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyTargetGroup',
  description:
    'Modifies the health checks used when evaluating the health state of the targets in the specified target group.',
  operationId: 'POST_ModifyTargetGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ModifyTargetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyTargetGroup'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyTargetGroupInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyTargetGroupOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionModifyTargetGroupAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyTargetGroupAttributes',
  description: 'Modifies the specified attributes of the specified target group.',
  operationId: 'GET_ModifyTargetGroupAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Attributes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TargetGroupAttributeSchema),
        )
        .openapi({
          param: {
            name: 'Attributes',
            in: 'query',
            required: true,
            description: 'The attributes.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TargetGroupAttribute' } },
          },
        }),
      Action: z
        .literal('ModifyTargetGroupAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyTargetGroupAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyTargetGroupAttributesOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const postActionModifyTargetGroupAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyTargetGroupAttributes',
  description: 'Modifies the specified attributes of the specified target group.',
  operationId: 'POST_ModifyTargetGroupAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('ModifyTargetGroupAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyTargetGroupAttributes'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyTargetGroupAttributesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyTargetGroupAttributesOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
  },
})

export const getActionRegisterTargetsRoute = createRoute({
  method: 'get',
  path: '/#Action=RegisterTargets',
  description:
    '<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>',
  operationId: 'GET_RegisterTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      TargetGroupArn: z
        .string()
        .openapi({
          param: {
            name: 'TargetGroupArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the target group.',
            schema: { type: 'string' },
          },
        }),
      Targets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Id: TargetIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                    }),
                ),
                Port: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    PortSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      }),
                  )
                  .exactOptional(),
                AvailabilityZone: ZoneNameSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                    }),
                ).exactOptional(),
              })
              .openapi({ required: ['Id'], description: 'Information about a target.' }),
          ),
        )
        .openapi({
          param: {
            name: 'Targets',
            in: 'query',
            required: true,
            description: 'The targets.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                required: ['Id'],
                properties: {
                  Id: {
                    allOf: [
                      { $ref: '#/components/schemas/TargetId' },
                      {
                        description:
                          'The ID of the target. If the target type of the target group is <code>instance</code>, specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type is <code>alb</code>, specify the ARN of the Application Load Balancer target. ',
                      },
                    ],
                  },
                  Port: {
                    allOf: [
                      { $ref: '#/components/schemas/Port' },
                      {
                        description:
                          'The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.',
                      },
                    ],
                  },
                  AvailabilityZone: {
                    allOf: [
                      { $ref: '#/components/schemas/ZoneName' },
                      {
                        description:
                          '<p>An Availability Zone or <code>all</code>. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.</p> <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as <code>all</code>.</p> <p>This parameter is not supported if the target type of the target group is <code>instance</code> or <code>alb</code>.</p> <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.</p> <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.</p> <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>',
                      },
                    ],
                  },
                },
                description: 'Information about a target.',
              },
            },
          },
        }),
      Action: z
        .literal('RegisterTargets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RegisterTargets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RegisterTargetsOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    482: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
    483: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
  },
})

export const postActionRegisterTargetsRoute = createRoute({
  method: 'post',
  path: '/#Action=RegisterTargets',
  description:
    '<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>',
  operationId: 'POST_RegisterTargets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('RegisterTargets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RegisterTargets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RegisterTargetsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RegisterTargetsOutputSchema } },
    },
    480: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTargetsException',
      content: { 'text/xml': { schema: TooManyTargetsExceptionSchema } },
    },
    482: {
      description: 'InvalidTargetException',
      content: { 'text/xml': { schema: InvalidTargetExceptionSchema } },
    },
    483: {
      description: 'TooManyRegistrationsForTargetIdException',
      content: { 'text/xml': { schema: TooManyRegistrationsForTargetIdExceptionSchema } },
    },
  },
})

export const getActionRemoveListenerCertificatesRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveListenerCertificates',
  description:
    'Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.',
  operationId: 'GET_RemoveListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ListenerArn: z
        .string()
        .openapi({
          param: {
            name: 'ListenerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the listener.',
            schema: { type: 'string' },
          },
        }),
      Certificates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                CertificateArn: CertificateArnSchema.and(
                  z
                    .any()
                    .openapi({ description: 'The Amazon Resource Name (ARN) of the certificate.' }),
                ).exactOptional(),
                IsDefault: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    DefaultSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Information about an SSL server certificate.',
                required: [],
              }),
          ),
        )
        .openapi({
          param: {
            name: 'Certificates',
            in: 'query',
            required: true,
            description:
              'The certificate to remove. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  CertificateArn: {
                    allOf: [
                      { $ref: '#/components/schemas/CertificateArn' },
                      { description: 'The Amazon Resource Name (ARN) of the certificate.' },
                    ],
                  },
                  IsDefault: {
                    allOf: [
                      { $ref: '#/components/schemas/Default' },
                      {
                        description:
                          'Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.',
                      },
                    ],
                  },
                },
                description: 'Information about an SSL server certificate.',
              },
            },
          },
        }),
      Action: z
        .literal('RemoveListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postActionRemoveListenerCertificatesRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveListenerCertificates',
  description:
    'Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.',
  operationId: 'POST_RemoveListenerCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('RemoveListenerCertificates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveListenerCertificates'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveListenerCertificatesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RemoveListenerCertificatesOutputSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const getActionRemoveTagsRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveTags',
  description:
    'Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.',
  operationId: 'GET_RemoveTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      ResourceArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ResourceArnSchema),
        )
        .openapi({
          param: {
            name: 'ResourceArns',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ResourceArn' } },
          },
        }),
      TagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'TagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys for the tags to remove.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
      Action: z
        .literal('RemoveTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: RemoveTagsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postActionRemoveTagsRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveTags',
  description:
    'Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.',
  operationId: 'POST_RemoveTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('RemoveTags')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveTags'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveTagsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: RemoveTagsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'TargetGroupNotFoundException',
      content: { 'text/xml': { schema: TargetGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'text/xml': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getActionSetIpAddressTypeRoute = createRoute({
  method: 'get',
  path: '/#Action=SetIpAddressType',
  description: 'Sets the type of IP addresses used by the subnets of the specified load balancer.',
  operationId: 'GET_SetIpAddressType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      IpAddressType: z
        .enum(['ipv4', 'dualstack'])
        .openapi({
          param: {
            name: 'IpAddressType',
            in: 'query',
            required: true,
            description:
              'The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.',
            schema: { type: 'string', enum: ['ipv4', 'dualstack'] },
          },
        }),
      Action: z
        .literal('SetIpAddressType')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIpAddressType'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIpAddressTypeOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
  },
})

export const postActionSetIpAddressTypeRoute = createRoute({
  method: 'post',
  path: '/#Action=SetIpAddressType',
  description: 'Sets the type of IP addresses used by the subnets of the specified load balancer.',
  operationId: 'POST_SetIpAddressType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SetIpAddressType')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetIpAddressType'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetIpAddressTypeInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetIpAddressTypeOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
  },
})

export const getActionSetRulePrioritiesRoute = createRoute({
  method: 'get',
  path: '/#Action=SetRulePriorities',
  description:
    '<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>',
  operationId: 'GET_SetRulePriorities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      RulePriorities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                RuleArn: RuleArnSchema.and(
                  z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the rule.' }),
                ).exactOptional(),
                Priority: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    RulePrioritySchema,
                  )
                  .and(z.any().openapi({ description: 'The rule priority.' }))
                  .exactOptional(),
              })
              .openapi({
                description: 'Information about the priorities for the rules for a listener.',
                required: [],
              }),
          ),
        )
        .openapi({
          param: {
            name: 'RulePriorities',
            in: 'query',
            required: true,
            description: 'The rule priorities.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  RuleArn: {
                    allOf: [
                      { $ref: '#/components/schemas/RuleArn' },
                      { description: 'The Amazon Resource Name (ARN) of the rule.' },
                    ],
                  },
                  Priority: {
                    allOf: [
                      { $ref: '#/components/schemas/RulePriority' },
                      { description: 'The rule priority.' },
                    ],
                  },
                },
                description: 'Information about the priorities for the rules for a listener.',
              },
            },
          },
        }),
      Action: z
        .literal('SetRulePriorities')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetRulePriorities'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetRulePrioritiesOutputSchema } },
    },
    480: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    481: {
      description: 'PriorityInUseException',
      content: { 'text/xml': { schema: PriorityInUseExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postActionSetRulePrioritiesRoute = createRoute({
  method: 'post',
  path: '/#Action=SetRulePriorities',
  description:
    '<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>',
  operationId: 'POST_SetRulePriorities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SetRulePriorities')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetRulePriorities'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetRulePrioritiesInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetRulePrioritiesOutputSchema } },
    },
    480: {
      description: 'RuleNotFoundException',
      content: { 'text/xml': { schema: RuleNotFoundExceptionSchema } },
    },
    481: {
      description: 'PriorityInUseException',
      content: { 'text/xml': { schema: PriorityInUseExceptionSchema } },
    },
    482: {
      description: 'OperationNotPermittedException',
      content: { 'text/xml': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const getActionSetSecurityGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=SetSecurityGroups',
  description:
    "<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>",
  operationId: 'GET_SetSecurityGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      SecurityGroups: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SecurityGroupIdSchema),
        )
        .openapi({
          param: {
            name: 'SecurityGroups',
            in: 'query',
            required: true,
            description: 'The IDs of the security groups.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SecurityGroupId' } },
          },
        }),
      Action: z
        .literal('SetSecurityGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSecurityGroups'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetSecurityGroupsOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
  },
})

export const postActionSetSecurityGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=SetSecurityGroups',
  description:
    "<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>",
  operationId: 'POST_SetSecurityGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SetSecurityGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSecurityGroups'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetSecurityGroupsInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: SetSecurityGroupsOutputSchema } },
    },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidSecurityGroupException',
      content: { 'text/xml': { schema: InvalidSecurityGroupExceptionSchema } },
    },
  },
})

export const getActionSetSubnetsRoute = createRoute({
  method: 'get',
  path: '/#Action=SetSubnets',
  description:
    '<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>',
  operationId: 'GET_SetSubnets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      LoadBalancerArn: z
        .string()
        .openapi({
          param: {
            name: 'LoadBalancerArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the load balancer.',
            schema: { type: 'string' },
          },
        }),
      Subnets: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Subnets',
            in: 'query',
            required: false,
            description:
              '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetId' } },
          },
        }),
      SubnetMappings: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SubnetMappingSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SubnetMappings',
            in: 'query',
            required: false,
            description:
              '<p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SubnetMapping' } },
          },
        }),
      IpAddressType: z
        .enum(['ipv4', 'dualstack'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpAddressType',
            in: 'query',
            required: false,
            description:
              '[Network Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener. .',
            schema: { type: 'string', enum: ['ipv4', 'dualstack'] },
          },
        }),
      Action: z
        .literal('SetSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSubnets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SetSubnetsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    484: {
      description: 'AllocationIdNotFoundException',
      content: { 'text/xml': { schema: AllocationIdNotFoundExceptionSchema } },
    },
    485: {
      description: 'AvailabilityZoneNotSupportedException',
      content: { 'text/xml': { schema: AvailabilityZoneNotSupportedExceptionSchema } },
    },
  },
})

export const postActionSetSubnetsRoute = createRoute({
  method: 'post',
  path: '/#Action=SetSubnets',
  description:
    '<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>',
  operationId: 'POST_SetSubnets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      Action: z
        .literal('SetSubnets')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SetSubnets'] },
          },
        }),
      Version: z
        .literal('2015-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SetSubnetsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: SetSubnetsOutputSchema } } },
    480: {
      description: 'LoadBalancerNotFoundException',
      content: { 'text/xml': { schema: LoadBalancerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidConfigurationRequestException',
      content: { 'text/xml': { schema: InvalidConfigurationRequestExceptionSchema } },
    },
    482: {
      description: 'SubnetNotFoundException',
      content: { 'text/xml': { schema: SubnetNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidSubnetException',
      content: { 'text/xml': { schema: InvalidSubnetExceptionSchema } },
    },
    484: {
      description: 'AllocationIdNotFoundException',
      content: { 'text/xml': { schema: AllocationIdNotFoundExceptionSchema } },
    },
    485: {
      description: 'AvailabilityZoneNotSupportedException',
      content: { 'text/xml': { schema: AvailabilityZoneNotSupportedExceptionSchema } },
    },
  },
})
