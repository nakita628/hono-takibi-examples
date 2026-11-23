import { createRoute, z } from '@hono/zod-openapi'

const ResourceNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('ResourceName')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:aws.*/)
  .min(1)
  .max(256)
  .openapi('ResourceArn')

const PrioritySchema = z.int().min(1).max(65535).openapi('Priority')

const StatelessRuleGroupReferenceSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the stateless rule group.',
    }),
    Priority: PrioritySchema.openapi({
      description:
        'An integer setting that indicates the order in which to run the stateless rule groups in a single <a>FirewallPolicy</a>. Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.',
    }),
  })
  .openapi({
    required: ['ResourceArn', 'Priority'],
    description:
      'Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. ',
  })
  .openapi('StatelessRuleGroupReference')

const StatelessRuleGroupReferencesSchema = z
  .array(StatelessRuleGroupReferenceSchema)
  .openapi('StatelessRuleGroupReferences')

const CollectionMemberStringSchema = z.string().openapi('CollectionMemberString')

const StatelessActionsSchema = z.array(CollectionMemberStringSchema).openapi('StatelessActions')

const ActionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/)
  .min(1)
  .max(128)
  .openapi('ActionName')

const DimensionValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_ ]+$/)
  .min(1)
  .max(128)
  .openapi('DimensionValue')

const DimensionSchema = z
  .object({
    Value: DimensionValueSchema.openapi({
      description: 'The value to use in the custom metric dimension.',
    }),
  })
  .openapi({
    required: ['Value'],
    description:
      '<p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that\'s part of the identity of a metric. </p> <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>',
  })
  .openapi('Dimension')

const DimensionsSchema = z.array(DimensionSchema).length(1).openapi('Dimensions')

const PublishMetricActionSchema = z
  .object({ Dimensions: DimensionsSchema.openapi({ description: '<p/>' }) })
  .openapi({
    required: ['Dimensions'],
    description:
      'Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.',
  })
  .openapi('PublishMetricAction')

const ActionDefinitionSchema = z
  .object({
    PublishMetricAction: PublishMetricActionSchema.exactOptional().openapi({
      description:
        '<p>Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.</p> <p>You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it. </p>',
    }),
  })
  .openapi({
    description:
      'A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.',
    required: [],
  })
  .openapi('ActionDefinition')

const CustomActionSchema = z
  .object({
    ActionName: ActionNameSchema.openapi({
      description:
        "The descriptive name of the custom action. You can't change the name of a custom action after you create it.",
    }),
    ActionDefinition: ActionDefinitionSchema.openapi({
      description: 'The custom action associated with the action name.',
    }),
  })
  .openapi({
    required: ['ActionName', 'ActionDefinition'],
    description:
      "<p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul>",
  })
  .openapi('CustomAction')

const CustomActionsSchema = z.array(CustomActionSchema).openapi('CustomActions')

const OverrideActionSchema = z.literal('DROP_TO_ALERT').openapi('OverrideAction')

const StatefulRuleGroupOverrideSchema = z
  .object({
    Action: OverrideActionSchema.exactOptional().openapi({
      description:
        'The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.',
    }),
  })
  .openapi({
    description:
      'The setting that allows the policy owner to change the behavior of the rule group within a policy. ',
    required: [],
  })
  .openapi('StatefulRuleGroupOverride')

const StatefulRuleGroupReferenceSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the stateful rule group.',
    }),
    Priority: PrioritySchema.exactOptional().openapi({
      description:
        "<p>An integer setting that indicates the order in which to run the stateful rule groups in a single <a>FirewallPolicy</a>. This setting only applies to firewall policies that specify the <code>STRICT_ORDER</code> rule order in the stateful engine options settings.</p> <p>Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.</p> <p>You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on. </p>",
    }),
    Override: StatefulRuleGroupOverrideSchema.exactOptional().openapi({
      description:
        'The action that allows the policy owner to override the behavior of the rule group within a policy.',
    }),
  })
  .openapi({
    required: ['ResourceArn'],
    description:
      'Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. ',
  })
  .openapi('StatefulRuleGroupReference')

const StatefulRuleGroupReferencesSchema = z
  .array(StatefulRuleGroupReferenceSchema)
  .openapi('StatefulRuleGroupReferences')

const StatefulActionsSchema = z.array(CollectionMemberStringSchema).openapi('StatefulActions')

const RuleOrderSchema = z.enum(['DEFAULT_ACTION_ORDER', 'STRICT_ORDER']).openapi('RuleOrder')

const StreamExceptionPolicySchema = z.enum(['DROP', 'CONTINUE']).openapi('StreamExceptionPolicy')

const StatefulEngineOptionsSchema = z
  .object({
    RuleOrder: RuleOrderSchema.exactOptional().openapi({
      description:
        'Indicates how to manage the order of stateful rule evaluation for the policy. <code>DEFAULT_ACTION_ORDER</code> is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>. ',
    }),
    StreamExceptionPolicy: StreamExceptionPolicySchema.exactOptional().openapi({
      description:
        "<p>Configures how Network Firewall processes traffic when a network connection breaks midstream. Network connections can break due to disruptions in external networks or within the firewall itself.</p> <ul> <li> <p> <code>DROP</code> - Network Firewall fails closed and drops all subsequent traffic going to the firewall. This is the default behavior.</p> </li> <li> <p> <code>CONTINUE</code> - Network Firewall continues to apply rules to the subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on this context. For example, if you have a stateful rule to <code>drop http</code> traffic, Network Firewall won't match the traffic for this rule because the service won't have the context from session initialization defining the application layer protocol as HTTP. However, this behavior is rule dependent—a TCP-layer rule using a <code>flow:stateless</code> rule would still match, as would the <code>aws:drop_strict</code> default action.</p> </li> </ul>",
    }),
  })
  .openapi({
    description:
      'Configuration settings for the handling of the stateful rule groups in a firewall policy. ',
    required: [],
  })
  .openapi('StatefulEngineOptions')

const FirewallPolicySchema = z
  .object({
    StatelessRuleGroupReferences: StatelessRuleGroupReferencesSchema.exactOptional().openapi({
      description:
        'References to the stateless rule groups that are used in the policy. These define the matching criteria in stateless rules. ',
    }),
    StatelessDefaultActions: StatelessActionsSchema.openapi({
      description:
        '<p>The actions to take on a packet if it doesn\'t match any of the stateless rules in the policy. If you want non-matching packets to be forwarded for stateful inspection, specify <code>aws:forward_to_sfe</code>. </p> <p>You must specify one of the standard actions: <code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>. In addition, you can specify custom actions that are compatible with your standard section choice.</p> <p>For example, you could specify <code>["aws:pass"]</code> or you could specify <code>["aws:pass", “customActionName”]</code>. For information about compatibility, see the custom action descriptions under <a>CustomAction</a>.</p>',
    }),
    StatelessFragmentDefaultActions: StatelessActionsSchema.openapi({
      description:
        '<p>The actions to take on a fragmented UDP packet if it doesn\'t match any of the stateless rules in the policy. Network Firewall only manages UDP packet fragments and silently drops packet fragments for other protocols. If you want non-matching fragmented UDP packets to be forwarded for stateful inspection, specify <code>aws:forward_to_sfe</code>. </p> <p>You must specify one of the standard actions: <code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>. In addition, you can specify custom actions that are compatible with your standard section choice.</p> <p>For example, you could specify <code>["aws:pass"]</code> or you could specify <code>["aws:pass", “customActionName”]</code>. For information about compatibility, see the custom action descriptions under <a>CustomAction</a>.</p>',
    }),
    StatelessCustomActions: CustomActionsSchema.exactOptional().openapi({
      description:
        "The custom action definitions that are available for use in the firewall policy's <code>StatelessDefaultActions</code> setting. You name each custom action that you define, and then you can use it by name in your default actions specifications.",
    }),
    StatefulRuleGroupReferences: StatefulRuleGroupReferencesSchema.exactOptional().openapi({
      description:
        'References to the stateful rule groups that are used in the policy. These define the inspection criteria in stateful rules. ',
    }),
    StatefulDefaultActions: StatefulActionsSchema.exactOptional().openapi({
      description:
        '<p>The default actions to take on a packet that doesn\'t match any stateful rules. The stateful default action is optional, and is only valid when using the strict rule order.</p> <p>Valid values of the stateful default action:</p> <ul> <li> <p>aws:drop_strict</p> </li> <li> <p>aws:drop_established</p> </li> <li> <p>aws:alert_strict</p> </li> <li> <p>aws:alert_established</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html#suricata-strict-rule-evaluation-order.html">Strict evaluation order</a> in the <i>Network Firewall Developer Guide</i>. </p>',
    }),
    StatefulEngineOptions: StatefulEngineOptionsSchema.exactOptional().openapi({
      description:
        'Additional options governing how Network Firewall handles stateful rules. The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.',
    }),
    TLSInspectionConfigurationArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the TLS inspection configuration.',
    }),
  })
  .openapi({
    required: ['StatelessDefaultActions', 'StatelessFragmentDefaultActions'],
    description:
      '<p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>',
  })
  .openapi('FirewallPolicy')

const DescriptionSchema = z.string().regex(/^.*$/).max(512).openapi('Description')

const TagKeySchema = z.string().regex(/^.*$/).min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().regex(/^.*$/).min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.openapi({
      description:
        'The part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.',
    }),
    Value: TagValueSchema.openapi({
      description:
        'The part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.',
    }),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(200).openapi('TagList')

const BooleanSchema = z.boolean().openapi('Boolean')

const KeyIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('KeyId')

const EncryptionTypeSchema = z.enum(['CUSTOMER_KMS', 'AWS_OWNED_KMS_KEY']).openapi('EncryptionType')

const EncryptionConfigurationSchema = z
  .object({
    KeyId: KeyIdSchema.exactOptional().openapi({
      description:
        "The ID of the Amazon Web Services Key Management Service (KMS) customer managed key. You can use any of the key identifiers that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id\">Key ID</a> in the <i>Amazon Web Services KMS Developer Guide</i>.",
    }),
    Type: EncryptionTypeSchema.openapi({
      description:
        'The type of Amazon Web Services KMS key to use for encryption of your Network Firewall resources.',
    }),
  })
  .openapi({
    required: ['Type'],
    description:
      'A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>.',
  })
  .openapi('EncryptionConfiguration')

type CreateFirewallPolicyRequestType = {
  FirewallPolicyName: z.infer<typeof ResourceNameSchema> & unknown
  FirewallPolicy: z.infer<typeof FirewallPolicySchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  Tags?: z.infer<typeof TagListSchema> & unknown
  DryRun?: z.infer<typeof BooleanSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema> & unknown
}

const VariableDefinitionSchema = z.string().regex(/^.*$/).min(1).openapi('VariableDefinition')

const VariableDefinitionListSchema = z
  .array(VariableDefinitionSchema)
  .openapi('VariableDefinitionList')

const IPSetSchema = z
  .object({
    Definition: VariableDefinitionListSchema.openapi({
      description: 'The list of IP addresses and address ranges, in CIDR notation. ',
    }),
  })
  .openapi({
    required: ['Definition'],
    description:
      'A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>. ',
  })
  .openapi('IPSet')

const IPSetsSchema = z.record(z.string(), IPSetSchema).openapi('IPSets')

const PortSetSchema = z
  .object({
    Definition: VariableDefinitionListSchema.exactOptional().openapi({
      description: 'The set of port ranges. ',
    }),
  })
  .openapi({
    description: 'A set of port ranges for use in the rules in a rule group. ',
    required: [],
  })
  .openapi('PortSet')

const PortSetsSchema = z.record(z.string(), PortSetSchema).openapi('PortSets')

const RuleVariablesSchema = z
  .object({
    IPSets: IPSetsSchema.exactOptional().openapi({
      description: 'A list of IP addresses and address ranges, in CIDR notation. ',
    }),
    PortSets: PortSetsSchema.exactOptional().openapi({ description: 'A list of port ranges. ' }),
  })
  .openapi({
    description:
      'Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. ',
    required: [],
  })
  .openapi('RuleVariables')

const IPSetReferenceSchema = z
  .object({
    ReferenceArn: ResourceArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the resource that you are referencing in your rule group.',
    }),
  })
  .openapi({
    description:
      '<p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule\'s content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p>',
    required: [],
  })
  .openapi('IPSetReference')

const IPSetReferenceMapSchema = z
  .record(z.string(), IPSetReferenceSchema)
  .openapi('IPSetReferenceMap')

const ReferenceSetsSchema = z
  .object({
    IPSetReferences: IPSetReferenceMapSchema.exactOptional().openapi({
      description: 'The list of IP set references.',
    }),
  })
  .openapi({ description: 'Contains a set of IP set references.', required: [] })
  .openapi('ReferenceSets')

const RulesStringSchema = z.string().min(0).max(2000000).openapi('RulesString')

const RuleTargetsSchema = z.array(CollectionMemberStringSchema).openapi('RuleTargets')

const TargetTypeSchema = z.enum(['TLS_SNI', 'HTTP_HOST']).openapi('TargetType')

const TargetTypesSchema = z.array(TargetTypeSchema).openapi('TargetTypes')

const GeneratedRulesTypeSchema = z.enum(['ALLOWLIST', 'DENYLIST']).openapi('GeneratedRulesType')

const RulesSourceListSchema = z
  .object({
    Targets: RuleTargetsSchema.openapi({
      description:
        "<p>The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:</p> <ul> <li> <p>Explicit names. For example, <code>abc.example.com</code> matches only the domain <code>abc.example.com</code>.</p> </li> <li> <p>Names that use a domain wildcard, which you indicate with an initial '<code>.</code>'. For example,<code>.example.com</code> matches <code>example.com</code> and matches all subdomains of <code>example.com</code>, such as <code>abc.example.com</code> and <code>www.example.com</code>. </p> </li> </ul>",
    }),
    TargetTypes: TargetTypesSchema.openapi({
      description:
        'The protocols you want to inspect. Specify <code>TLS_SNI</code> for <code>HTTPS</code>. Specify <code>HTTP_HOST</code> for <code>HTTP</code>. You can specify either or both. ',
    }),
    GeneratedRulesType: GeneratedRulesTypeSchema.openapi({
      description: 'Whether you want to allow or deny access to the domains in your target list.',
    }),
  })
  .openapi({
    required: ['Targets', 'TargetTypes', 'GeneratedRulesType'],
    description:
      '<p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p>',
  })
  .openapi('RulesSourceList')

const StatefulActionSchema = z.enum(['PASS', 'DROP', 'ALERT', 'REJECT']).openapi('StatefulAction')

const StatefulRuleProtocolSchema = z
  .enum([
    'IP',
    'TCP',
    'UDP',
    'ICMP',
    'HTTP',
    'FTP',
    'TLS',
    'SMB',
    'DNS',
    'DCERPC',
    'SSH',
    'SMTP',
    'IMAP',
    'MSN',
    'KRB5',
    'IKEV2',
    'TFTP',
    'NTP',
    'DHCP',
  ])
  .openapi('StatefulRuleProtocol')

const SourceSchema = z.string().regex(/^.*$/).min(1).max(1024).openapi('Source')

const PortSchema = z.string().regex(/^.*$/).min(1).max(1024).openapi('Port')

const StatefulRuleDirectionSchema = z.enum(['FORWARD', 'ANY']).openapi('StatefulRuleDirection')

const DestinationSchema = z.string().regex(/^.*$/).min(1).max(1024).openapi('Destination')

const HeaderSchema = z
  .object({
    Protocol: StatefulRuleProtocolSchema.openapi({
      description:
        'The protocol to inspect for. To specify all, you can use <code>IP</code>, because all traffic on Amazon Web Services and on the internet is IP.',
    }),
    Source: SourceSchema.openapi({
      description:
        '<p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>. </p> <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p> <p>Examples: </p> <ul> <li> <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>',
    }),
    SourcePort: PortSchema.openapi({
      description:
        'The source port to inspect for. You can specify an individual port, for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>. To match with any port, specify <code>ANY</code>. ',
    }),
    Direction: StatefulRuleDirectionSchema.openapi({
      description:
        'The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination. ',
    }),
    Destination: DestinationSchema.openapi({
      description:
        '<p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>. </p> <p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p> <p>Examples: </p> <ul> <li> <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>',
    }),
    DestinationPort: PortSchema.openapi({
      description:
        'The destination port to inspect for. You can specify an individual port, for example <code>1994</code> and you can specify a port range, for example <code>1990:1994</code>. To match with any port, specify <code>ANY</code>. ',
    }),
  })
  .openapi({
    required: ['Protocol', 'Source', 'SourcePort', 'Direction', 'Destination', 'DestinationPort'],
    description:
      'The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. ',
  })
  .openapi('Header')

const KeywordSchema = z.string().regex(/.*/).min(1).max(128).openapi('Keyword')

const SettingSchema = z.string().regex(/.*/).min(1).max(8192).openapi('Setting')

const SettingsSchema = z.array(SettingSchema).openapi('Settings')

const RuleOptionSchema = z
  .object({
    Keyword: KeywordSchema.openapi({ description: '<p/>' }),
    Settings: SettingsSchema.exactOptional().openapi({ description: '<p/>' }),
  })
  .openapi({
    required: ['Keyword'],
    description:
      'Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.',
  })
  .openapi('RuleOption')

const RuleOptionsSchema = z.array(RuleOptionSchema).openapi('RuleOptions')

const StatefulRuleSchema = z
  .object({
    Action: StatefulActionSchema.openapi({
      description:
        "<p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow. </p> <p>The actions for a stateful rule are defined as follows: </p> <ul> <li> <p> <b>PASS</b> - Permits the packets to go to the intended destination.</p> </li> <li> <p> <b>DROP</b> - Blocks the packets from going to the intended destination and sends an alert log message, if alert logging is configured in the <a>Firewall</a> <a>LoggingConfiguration</a>. </p> </li> <li> <p> <b>ALERT</b> - Permits the packets to go to the intended destination and sends an alert log message, if alert logging is configured in the <a>Firewall</a> <a>LoggingConfiguration</a>. </p> <p>You can use this action to test a rule that you intend to use to drop traffic. You can enable the rule with <code>ALERT</code> action, verify in the logs that the rule is filtering as you want, then change the action to <code>DROP</code>.</p> </li> <li> <p> <b>REJECT</b> - Drops TCP traffic that matches the conditions of the stateful rule, and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and a <code>RST</code> bit contained in the TCP header flags. Also sends an alert log mesage if alert logging is configured in the <a>Firewall</a> <a>LoggingConfiguration</a>.</p> <p> <code>REJECT</code> isn't currently available for use with IMAP and FTP protocols.</p> </li> </ul>",
    }),
    Header: HeaderSchema.openapi({
      description:
        'The stateful inspection criteria for this rule, used to inspect traffic flows. ',
    }),
    RuleOptions: RuleOptionsSchema.openapi({
      description:
        'Additional options for the rule. These are the Suricata <code>RuleOptions</code> settings.',
    }),
  })
  .openapi({
    required: ['Action', 'Header', 'RuleOptions'],
    description:
      'A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.iorules/intro.html#">Rules Format</a>. ',
  })
  .openapi('StatefulRule')

const StatefulRulesSchema = z.array(StatefulRuleSchema).openapi('StatefulRules')

const AddressDefinitionSchema = z
  .string()
  .regex(/^([a-fA-F\d:\.]+($|\/\d{1,3}))$/)
  .min(1)
  .max(255)
  .openapi('AddressDefinition')

const AddressSchema = z
  .object({
    AddressDefinition: AddressDefinitionSchema.openapi({
      description:
        '<p>Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6. </p> <p>Examples: </p> <ul> <li> <p>To configure Network Firewall to inspect for the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify <code>192.0.2.0/24</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p> </li> <li> <p>To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p> </li> </ul> <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>',
    }),
  })
  .openapi({
    required: ['AddressDefinition'],
    description:
      'A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.',
  })
  .openapi('Address')

const AddressesSchema = z.array(AddressSchema).openapi('Addresses')

const PortRangeBoundSchema = z.int().min(0).max(65535).openapi('PortRangeBound')

const PortRangeSchema = z
  .object({
    FromPort: PortRangeBoundSchema.openapi({
      description:
        'The lower limit of the port range. This must be less than or equal to the <code>ToPort</code> specification. ',
    }),
    ToPort: PortRangeBoundSchema.openapi({
      description:
        'The upper limit of the port range. This must be greater than or equal to the <code>FromPort</code> specification. ',
    }),
  })
  .openapi({
    required: ['FromPort', 'ToPort'],
    description:
      'A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. ',
  })
  .openapi('PortRange')

const PortRangesSchema = z.array(PortRangeSchema).openapi('PortRanges')

const ProtocolNumberSchema = z.int().min(0).max(255).openapi('ProtocolNumber')

const ProtocolNumbersSchema = z.array(ProtocolNumberSchema).openapi('ProtocolNumbers')

const TCPFlagSchema = z
  .enum(['FIN', 'SYN', 'RST', 'PSH', 'ACK', 'URG', 'ECE', 'CWR'])
  .openapi('TCPFlag')

const FlagsSchema = z.array(TCPFlagSchema).openapi('Flags')

const TCPFlagFieldSchema = z
  .object({
    Flags: FlagsSchema.openapi({
      description:
        '<p>Used in conjunction with the <code>Masks</code> setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the <code>Masks</code> setting.</p> <p>For the flags that are specified in the masks setting, the following must be true for the packet to match: </p> <ul> <li> <p>The ones that are set in this flags setting must be set in the packet. </p> </li> <li> <p>The ones that are not set in this flags setting must also not be set in the packet. </p> </li> </ul>',
    }),
    Masks: FlagsSchema.exactOptional().openapi({
      description:
        'The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.',
    }),
  })
  .openapi({
    required: ['Flags'],
    description:
      'TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.',
  })
  .openapi('TCPFlagField')

const TCPFlagsSchema = z.array(TCPFlagFieldSchema).openapi('TCPFlags')

const MatchAttributesSchema = z
  .object({
    Sources: AddressesSchema.exactOptional().openapi({
      description:
        'The source IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any source address. ',
    }),
    Destinations: AddressesSchema.exactOptional().openapi({
      description:
        'The destination IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any destination address. ',
    }),
    SourcePorts: PortRangesSchema.exactOptional().openapi({
      description:
        '<p>The source ports to inspect for. If not specified, this matches with any source port. This setting is only used for protocols 6 (TCP) and 17 (UDP). </p> <p>You can specify individual ports, for example <code>1994</code> and you can specify port ranges, for example <code>1990:1994</code>. </p>',
    }),
    DestinationPorts: PortRangesSchema.exactOptional().openapi({
      description:
        '<p>The destination ports to inspect for. If not specified, this matches with any destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP). </p> <p>You can specify individual ports, for example <code>1994</code> and you can specify port ranges, for example <code>1990:1994</code>. </p>',
    }),
    Protocols: ProtocolNumbersSchema.exactOptional().openapi({
      description:
        "The protocols to inspect for, specified using each protocol's assigned internet protocol number (IANA). If not specified, this matches with any protocol. ",
    }),
    TCPFlags: TCPFlagsSchema.exactOptional().openapi({
      description:
        'The TCP flags and masks to inspect for. If not specified, this matches with any settings. This setting is only used for protocol 6 (TCP).',
    }),
  })
  .openapi({
    description:
      'Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. ',
    required: [],
  })
  .openapi('MatchAttributes')

const RuleDefinitionSchema = z
  .object({
    MatchAttributes: MatchAttributesSchema.openapi({
      description:
        'Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. ',
    }),
    Actions: StatelessActionsSchema.openapi({
      description:
        "<p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action and you can add custom actions. </p> <note> <p>Network Firewall only forwards a packet for stateful rule inspection if you specify <code>aws:forward_to_sfe</code> for a rule that the packet matches, or if the packet doesn't match any stateless rule and you specify <code>aws:forward_to_sfe</code> for the <code>StatelessDefaultActions</code> setting for the <a>FirewallPolicy</a>.</p> </note> <p>For every rule, you must specify exactly one of the following standard actions. </p> <ul> <li> <p> <b>aws:pass</b> - Discontinues all inspection of the packet and permits it to go to its intended destination.</p> </li> <li> <p> <b>aws:drop</b> - Discontinues all inspection of the packet and blocks it from going to its intended destination.</p> </li> <li> <p> <b>aws:forward_to_sfe</b> - Discontinues stateless inspection of the packet and forwards it to the stateful rule engine for inspection. </p> </li> </ul> <p>Additionally, you can specify a custom action. To do this, you define a custom action by name and type, then provide the name you've assigned to the action in this <code>Actions</code> setting. For information about the options, see <a>CustomAction</a>. </p> <p>To provide more than one action in this setting, separate the settings with a comma. For example, if you have a custom <code>PublishMetrics</code> action that you've named <code>MyMetricsAction</code>, then you could specify the standard action <code>aws:pass</code> and the custom action with <code>[“aws:pass”, “MyMetricsAction”]</code>. </p>",
    }),
  })
  .openapi({
    required: ['MatchAttributes', 'Actions'],
    description:
      "The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.",
  })
  .openapi('RuleDefinition')

const StatelessRuleSchema = z
  .object({
    RuleDefinition: RuleDefinitionSchema.openapi({
      description:
        'Defines the stateless 5-tuple packet inspection criteria and the action to take on a packet that matches the criteria. ',
    }),
    Priority: PrioritySchema.openapi({
      description:
        "<p>Indicates the order in which to run this rule relative to all of the rules that are defined for a stateless rule group. Network Firewall evaluates the rules in a rule group starting with the lowest priority setting. You must ensure that the priority settings are unique for the rule group. </p> <p>Each stateless rule group uses exactly one <code>StatelessRulesAndCustomActions</code> object, and each <code>StatelessRulesAndCustomActions</code> contains exactly one <code>StatelessRules</code> object. To ensure unique priority settings for your rule groups, set unique priorities for the stateless rules that you define inside any single <code>StatelessRules</code> object.</p> <p>You can change the priority settings of your rules at any time. To make it easier to insert rules later, number them so there's a wide range in between, for example use 100, 200, and so on. </p>",
    }),
  })
  .openapi({
    required: ['RuleDefinition', 'Priority'],
    description: 'A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.',
  })
  .openapi('StatelessRule')

const StatelessRulesSchema = z.array(StatelessRuleSchema).openapi('StatelessRules')

type StatelessRulesAndCustomActionsType = {
  StatelessRules: z.infer<typeof StatelessRulesSchema> & unknown
  CustomActions?: z.infer<typeof CustomActionsSchema> & unknown
}

const StatelessRulesAndCustomActionsSchema: z.ZodType<StatelessRulesAndCustomActionsType> = z
  .object({
    StatelessRules: StatelessRulesSchema.openapi({
      description: 'Defines the set of stateless rules for use in a stateless rule group. ',
    }),
    CustomActions: CustomActionsSchema.exactOptional().openapi({
      description:
        'Defines an array of individual custom action definitions that are available for use by the stateless rules in this <code>StatelessRulesAndCustomActions</code> specification. You name each custom action that you define, and then you can use it by name in your <a>StatelessRule</a> <a>RuleDefinition</a> <code>Actions</code> specification.',
    }),
  })
  .openapi({
    required: ['StatelessRules'],
    description:
      'Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. ',
  })
  .openapi('StatelessRulesAndCustomActions')

type RulesSourceType = {
  RulesString?: z.infer<typeof RulesStringSchema> & unknown
  RulesSourceList?: z.infer<typeof RulesSourceListSchema> & unknown
  StatefulRules?: z.infer<typeof StatefulRulesSchema> & unknown
  StatelessRulesAndCustomActions?: z.infer<typeof StatelessRulesAndCustomActionsSchema> & unknown
}

const RulesSourceSchema: z.ZodType<RulesSourceType> = z
  .object({
    RulesString: RulesStringSchema.exactOptional().openapi({
      description:
        "<p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules. Suricata is an open-source network IPS that includes a standard rule-based language for network traffic inspection.</p> <p>These rules contain the inspection criteria and the action to take for traffic that matches the criteria, so this type of rule group doesn't have a separate action setting.</p>",
    }),
    RulesSourceList: RulesSourceListSchema.exactOptional().openapi({
      description: 'Stateful inspection criteria for a domain list rule group. ',
    }),
    StatefulRules: StatefulRulesSchema.exactOptional().openapi({
      description:
        'An array of individual stateful rules inspection criteria to be used together in a stateful rule group. Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.iorules/intro.html#">Rules Format</a>. ',
    }),
    StatelessRulesAndCustomActions: StatelessRulesAndCustomActionsSchema.exactOptional().openapi({
      description: 'Stateless inspection criteria to be used in a stateless rule group. ',
    }),
  })
  .openapi({
    description:
      'The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. ',
    required: [],
  })
  .openapi('RulesSource')

const StatefulRuleOptionsSchema = z
  .object({
    RuleOrder: RuleOrderSchema.exactOptional().openapi({
      description:
        'Indicates how to manage the order of the rule evaluation for the rule group. <code>DEFAULT_ACTION_ORDER</code> is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>. ',
    }),
  })
  .openapi({
    description:
      'Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.',
    required: [],
  })
  .openapi('StatefulRuleOptions')

type RuleGroupType = {
  RuleVariables?: z.infer<typeof RuleVariablesSchema> & unknown
  ReferenceSets?: z.infer<typeof ReferenceSetsSchema> & unknown
  RulesSource: z.infer<typeof RulesSourceSchema> & unknown
  StatefulRuleOptions?: z.infer<typeof StatefulRuleOptionsSchema> & unknown
}

const RuleGroupSchema: z.ZodType<RuleGroupType> = z
  .object({
    RuleVariables: RuleVariablesSchema.exactOptional().openapi({
      description:
        'Settings that are available for use in the rules in the rule group. You can only use these for stateful rule groups. ',
    }),
    ReferenceSets: ReferenceSetsSchema.exactOptional().openapi({
      description: "The list of a rule group's reference sets.",
    }),
    RulesSource: RulesSourceSchema.openapi({
      description: 'The stateful rules or stateless rules for the rule group. ',
    }),
    StatefulRuleOptions: StatefulRuleOptionsSchema.exactOptional().openapi({
      description:
        'Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful rule group must have stateful rule options settings that are compatible with these settings.',
    }),
  })
  .openapi({
    required: ['RulesSource'],
    description:
      '<p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>',
  })
  .openapi('RuleGroup')

const RuleGroupTypeSchema = z.enum(['STATELESS', 'STATEFUL']).openapi('RuleGroupType')

const RuleCapacitySchema = z.int().openapi('RuleCapacity')

const UpdateTokenSchema = z
  .string()
  .regex(/^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$/)
  .min(1)
  .max(1024)
  .openapi('UpdateToken')

const SourceMetadataSchema = z
  .object({
    SourceArn: ResourceArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the rule group that your own rule group is copied from.',
    }),
    SourceUpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        'The update token of the Amazon Web Services managed rule group that your own rule group is copied from. To determine the update token for the managed rule group, call <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html#networkfirewall-DescribeRuleGroup-response-UpdateToken">DescribeRuleGroup</a>.',
    }),
  })
  .openapi({
    description:
      'High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>.',
    required: [],
  })
  .openapi('SourceMetadata')

type CreateRuleGroupRequestType = {
  RuleGroupName: z.infer<typeof ResourceNameSchema> & unknown
  RuleGroup?: z.infer<typeof RuleGroupSchema> & unknown
  Rules?: z.infer<typeof RulesStringSchema> & unknown
  Type: z.infer<typeof RuleGroupTypeSchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  Capacity: z.infer<typeof RuleCapacitySchema> & unknown
  Tags?: z.infer<typeof TagListSchema> & unknown
  DryRun?: z.infer<typeof BooleanSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema> & unknown
  SourceMetadata?: z.infer<typeof SourceMetadataSchema> & unknown
}

const ServerCertificateSchema = z
  .object({
    ResourceArn: ResourceArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the Certificate Manager SSL/TLS server certificate.',
    }),
  })
  .openapi({
    description:
      'Any Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that\'s associated with a <a>ServerCertificateConfiguration</a> used in a <a>TLSInspectionConfiguration</a>. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate </a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>.',
    required: [],
  })
  .openapi('ServerCertificate')

const ServerCertificatesSchema = z.array(ServerCertificateSchema).openapi('ServerCertificates')

const ServerCertificateScopeSchema = z
  .object({
    Sources: AddressesSchema.exactOptional().openapi({
      description:
        'The source IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any source address.',
    }),
    Destinations: AddressesSchema.exactOptional().openapi({
      description:
        'The destination IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any destination address.',
    }),
    SourcePorts: PortRangesSchema.exactOptional().openapi({
      description:
        '<p>The source ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any source port.</p> <p>You can specify individual ports, for example <code>1994</code>, and you can specify port ranges, such as <code>1990:1994</code>.</p>',
    }),
    DestinationPorts: PortRangesSchema.exactOptional().openapi({
      description:
        '<p>The destination ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any destination port.</p> <p>You can specify individual ports, for example <code>1994</code>, and you can specify port ranges, such as <code>1990:1994</code>.</p>',
    }),
    Protocols: ProtocolNumbersSchema.exactOptional().openapi({
      description:
        "The protocols to decrypt for inspection, specified using each protocol's assigned internet protocol number (IANA). Network Firewall currently supports only TCP.",
    }),
  })
  .openapi({
    description:
      'Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.',
    required: [],
  })
  .openapi('ServerCertificateScope')

const ServerCertificateScopesSchema = z
  .array(ServerCertificateScopeSchema)
  .openapi('ServerCertificateScopes')

const ServerCertificateConfigurationSchema = z
  .object({
    ServerCertificates: ServerCertificatesSchema.exactOptional().openapi({
      description:
        "The list of a server certificate configuration's Certificate Manager SSL/TLS certificates.",
    }),
    Scopes: ServerCertificateScopesSchema.exactOptional().openapi({
      description: "A list of a server certificate configuration's scopes.",
    }),
  })
  .openapi({
    description:
      '<p>Configures the associated Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificates and scope settings Network Firewall uses to decrypt traffic in a <a>TLSInspectionConfiguration</a>. For information about working with SSL/TLS certificates for TLS inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html"> Requirements for using SSL/TLS server certficiates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> <note> <p>If a server certificate that\'s associated with your <a>TLSInspectionConfiguration</a> is revoked, deleted, or expired it can result in client-side TLS errors.</p> </note>',
    required: [],
  })
  .openapi('ServerCertificateConfiguration')

const ServerCertificateConfigurationsSchema = z
  .array(ServerCertificateConfigurationSchema)
  .openapi('ServerCertificateConfigurations')

const TLSInspectionConfigurationSchema = z
  .object({
    ServerCertificateConfigurations: ServerCertificateConfigurationsSchema.exactOptional().openapi({
      description:
        'Lists the server certificate configurations that are associated with the TLS configuration.',
    }),
  })
  .openapi({
    description:
      '<p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('TLSInspectionConfiguration')

type CreateTLSInspectionConfigurationRequestType = {
  TLSInspectionConfigurationName: z.infer<typeof ResourceNameSchema> & unknown
  TLSInspectionConfiguration: z.infer<typeof TLSInspectionConfigurationSchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  Tags?: z.infer<typeof TagListSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema>
}

const ResourceIdSchema = z
  .string()
  .regex(/^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$/)
  .length(36)
  .openapi('ResourceId')

const ResourceStatusSchema = z.enum(['ACTIVE', 'DELETING']).openapi('ResourceStatus')

const NumberOfAssociationsSchema = z.int().openapi('NumberOfAssociations')

const LastUpdateTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdateTime')

const FirewallPolicyResponseSchema = z
  .object({
    FirewallPolicyName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.",
    }),
    FirewallPolicyArn: ResourceArnSchema.openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of the firewall policy.</p> <note> <p>If this response is for a create request that had <code>DryRun</code> set to <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid resource.</p> </note>",
    }),
    FirewallPolicyId: ResourceIdSchema.openapi({
      description: 'The unique identifier for the firewall policy. ',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall policy.',
    }),
    FirewallPolicyStatus: ResourceStatusSchema.exactOptional().openapi({
      description:
        "The current status of the firewall policy. You can retrieve this for a firewall policy by calling <a>DescribeFirewallPolicy</a> and providing the firewall policy's name or ARN.",
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    ConsumedStatelessRuleCapacity: RuleCapacitySchema.exactOptional().openapi({
      description:
        "The number of capacity units currently consumed by the policy's stateless rules.",
    }),
    ConsumedStatefulRuleCapacity: RuleCapacitySchema.exactOptional().openapi({
      description:
        "The number of capacity units currently consumed by the policy's stateful rules.",
    }),
    NumberOfAssociations: NumberOfAssociationsSchema.exactOptional().openapi({
      description: 'The number of firewalls that are associated with this firewall policy.',
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall policy.',
    }),
    LastModifiedTime: LastUpdateTimeSchema.exactOptional().openapi({
      description: 'The last time that the firewall policy was changed.',
    }),
  })
  .openapi({
    required: ['FirewallPolicyName', 'FirewallPolicyArn', 'FirewallPolicyId'],
    description:
      'The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. ',
  })
  .openapi('FirewallPolicyResponse')

type DescribeFirewallPolicyResponseType = {
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
  FirewallPolicyResponse: z.infer<typeof FirewallPolicyResponseSchema> & unknown
  FirewallPolicy?: z.infer<typeof FirewallPolicySchema> & unknown
}

const RuleGroupResponseSchema = z
  .object({
    RuleGroupArn: ResourceArnSchema.openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of the rule group.</p> <note> <p>If this response is for a create request that had <code>DryRun</code> set to <code>TRUE</code>, then this ARN is a placeholder that isn't attached to a valid resource.</p> </note>",
    }),
    RuleGroupName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the rule group. You can't change the name of a rule group after you create it.",
    }),
    RuleGroupId: ResourceIdSchema.openapi({
      description: 'The unique identifier for the rule group. ',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the rule group. ',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        'Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. ',
    }),
    Capacity: RuleCapacitySchema.exactOptional().openapi({
      description:
        '<p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. </p> <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>',
    }),
    RuleGroupStatus: ResourceStatusSchema.exactOptional().openapi({
      description: 'Detailed information about the current status of a rule group. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    ConsumedCapacity: RuleCapacitySchema.exactOptional().openapi({
      description: 'The number of capacity units currently consumed by the rule group rules. ',
    }),
    NumberOfAssociations: NumberOfAssociationsSchema.exactOptional().openapi({
      description: 'The number of firewall policies that use this rule group.',
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains the Amazon Web Services KMS encryption configuration settings for your rule group.',
    }),
    SourceMetadata: SourceMetadataSchema.exactOptional().openapi({
      description:
        'A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to track the version updates made to the originating rule group.',
    }),
    SnsTopic: ResourceArnSchema.exactOptional().openapi({
      description:
        'The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that\'s used to record changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide.</a>.',
    }),
    LastModifiedTime: LastUpdateTimeSchema.exactOptional().openapi({
      description: 'The last time that the rule group was changed.',
    }),
  })
  .openapi({
    required: ['RuleGroupArn', 'RuleGroupName', 'RuleGroupId'],
    description:
      'The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
  })
  .openapi('RuleGroupResponse')

type DescribeRuleGroupResponseType = {
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
  RuleGroup?: z.infer<typeof RuleGroupSchema> & unknown
  RuleGroupResponse: z.infer<typeof RuleGroupResponseSchema> & unknown
}

const StatusReasonSchema = z
  .string()
  .regex(/^[a-zA-Z0-9- ]+$/)
  .min(1)
  .max(256)
  .openapi('StatusReason')

const TlsCertificateDataSchema = z
  .object({
    CertificateArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the certificate.',
    }),
    CertificateSerial: CollectionMemberStringSchema.exactOptional().openapi({
      description: 'The serial number of the certificate.',
    }),
    Status: CollectionMemberStringSchema.exactOptional().openapi({
      description: 'The status of the certificate.',
    }),
    StatusMessage: StatusReasonSchema.exactOptional().openapi({
      description:
        'Contains details about the certificate status, including information about certificate errors.',
    }),
  })
  .openapi({
    description: 'Contains metadata about an Certificate Manager certificate.',
    required: [],
  })
  .openapi('TlsCertificateData')

const CertificatesSchema = z.array(TlsCertificateDataSchema).openapi('Certificates')

const TLSInspectionConfigurationResponseSchema = z
  .object({
    TLSInspectionConfigurationArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the TLS inspection configuration.',
    }),
    TLSInspectionConfigurationName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.",
    }),
    TLSInspectionConfigurationId: ResourceIdSchema.openapi({
      description:
        'A unique identifier for the TLS inspection configuration. This ID is returned in the responses to create and list commands. You provide it to operations such as update and delete.',
    }),
    TLSInspectionConfigurationStatus: ResourceStatusSchema.exactOptional().openapi({
      description:
        'Detailed information about the current status of a <a>TLSInspectionConfiguration</a>. You can retrieve this for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a> and providing the TLS inspection configuration name and ARN.',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the TLS inspection configuration. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    LastModifiedTime: LastUpdateTimeSchema.exactOptional().openapi({
      description: 'The last time that the TLS inspection configuration was changed.',
    }),
    NumberOfAssociations: NumberOfAssociationsSchema.exactOptional().openapi({
      description: 'The number of firewall policies that use this TLS inspection configuration.',
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.',
    }),
    Certificates: CertificatesSchema.exactOptional().openapi({
      description: 'A list of the certificates associated with the TLS inspection configuration.',
    }),
  })
  .openapi({
    required: [
      'TLSInspectionConfigurationArn',
      'TLSInspectionConfigurationName',
      'TLSInspectionConfigurationId',
    ],
    description:
      'The high-level properties of a TLS inspection configuration. This, along with the <code>TLSInspectionConfiguration</code>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <code>DescribeTLSInspectionConfiguration</code>.',
  })
  .openapi('TLSInspectionConfigurationResponse')

type DescribeTLSInspectionConfigurationResponseType = {
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
  TLSInspectionConfiguration?: z.infer<typeof TLSInspectionConfigurationSchema> & unknown
  TLSInspectionConfigurationResponse: z.infer<typeof TLSInspectionConfigurationResponseSchema> &
    unknown
}

type UpdateFirewallPolicyRequestType = {
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
  FirewallPolicyArn?: z.infer<typeof ResourceArnSchema> & unknown
  FirewallPolicyName?: z.infer<typeof ResourceNameSchema> & unknown
  FirewallPolicy: z.infer<typeof FirewallPolicySchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  DryRun?: z.infer<typeof BooleanSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema> & unknown
}

type UpdateRuleGroupRequestType = {
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
  RuleGroupArn?: z.infer<typeof ResourceArnSchema> & unknown
  RuleGroupName?: z.infer<typeof ResourceNameSchema> & unknown
  RuleGroup?: z.infer<typeof RuleGroupSchema> & unknown
  Rules?: z.infer<typeof RulesStringSchema> & unknown
  Type?: z.infer<typeof RuleGroupTypeSchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  DryRun?: z.infer<typeof BooleanSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema> & unknown
  SourceMetadata?: z.infer<typeof SourceMetadataSchema> & unknown
}

type UpdateTLSInspectionConfigurationRequestType = {
  TLSInspectionConfigurationArn?: z.infer<typeof ResourceArnSchema> & unknown
  TLSInspectionConfigurationName?: z.infer<typeof ResourceNameSchema> & unknown
  TLSInspectionConfiguration: z.infer<typeof TLSInspectionConfigurationSchema> & unknown
  Description?: z.infer<typeof DescriptionSchema> & unknown
  EncryptionConfiguration?: z.infer<typeof EncryptionConfigurationSchema> & unknown
  UpdateToken: z.infer<typeof UpdateTokenSchema> & unknown
}

const AssociateFirewallPolicyResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    FirewallPolicyArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall policy.',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateFirewallPolicyResponse')

const AssociateFirewallPolicyRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallPolicyArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall policy.',
    }),
  })
  .openapi({ required: ['FirewallPolicyArn'], title: 'AssociateFirewallPolicyRequest' })
  .openapi('AssociateFirewallPolicyRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InvalidTokenExceptionSchema = z.any().openapi('InvalidTokenException')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const IPAddressTypeSchema = z.enum(['DUALSTACK', 'IPV4', 'IPV6']).openapi('IPAddressType')

const SubnetMappingSchema = z
  .object({
    SubnetId: CollectionMemberStringSchema.openapi({
      description: 'The unique identifier for the subnet. ',
    }),
    IPAddressType: IPAddressTypeSchema.exactOptional().openapi({
      description:
        "The subnet's IP address type. You can't change the IP address type after you create the subnet.",
    }),
  })
  .openapi({
    required: ['SubnetId'],
    description:
      "The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.",
  })
  .openapi('SubnetMapping')

const SubnetMappingsSchema = z.array(SubnetMappingSchema).openapi('SubnetMappings')

const AssociateSubnetsResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    SubnetMappings: SubnetMappingsSchema.exactOptional().openapi({
      description: 'The IDs of the subnets that are associated with the firewall. ',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateSubnetsResponse')

const AssociateSubnetsRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    SubnetMappings: SubnetMappingsSchema.openapi({
      description: 'The IDs of the subnets that you want to associate with the firewall. ',
    }),
  })
  .openapi({ required: ['SubnetMappings'], title: 'AssociateSubnetsRequest' })
  .openapi('AssociateSubnetsRequest')

const InsufficientCapacityExceptionSchema = z.any().openapi('InsufficientCapacityException')

const VpcIdSchema = z
  .string()
  .regex(/^vpc-[0-9a-f]+$/)
  .min(1)
  .max(128)
  .openapi('VpcId')

const FirewallSchema = z
  .object({
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallPolicyArn: ResourceArnSchema.openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall policy.</p> <p>The relationship of firewall to firewall policy is many to one. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>',
    }),
    VpcId: VpcIdSchema.openapi({
      description: 'The unique identifier of the VPC where the firewall is in use. ',
    }),
    SubnetMappings: SubnetMappingsSchema.openapi({
      description:
        'The public subnets that Network Firewall is using for the firewall. Each subnet must belong to a different Availability Zone. ',
    }),
    DeleteProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.',
    }),
    SubnetChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
    FirewallPolicyChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall.',
    }),
    FirewallId: ResourceIdSchema.openapi({
      description: 'The unique identifier for the firewall. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: '<p/>' }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains the Amazon Web Services KMS encryption configuration settings for your firewall.',
    }),
  })
  .openapi({
    required: ['FirewallPolicyArn', 'VpcId', 'SubnetMappings', 'FirewallId'],
    description:
      "<p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>",
  })
  .openapi('Firewall')

const FirewallStatusValueSchema = z
  .enum(['PROVISIONING', 'DELETING', 'READY'])
  .openapi('FirewallStatusValue')

const ConfigurationSyncStateSchema = z
  .enum(['PENDING', 'IN_SYNC', 'CAPACITY_CONSTRAINED'])
  .openapi('ConfigurationSyncState')

const AzSubnetSchema = z
  .string()
  .regex(/^subnet-[0-9a-f]+$/)
  .min(1)
  .max(128)
  .openapi('AzSubnet')

const EndpointIdSchema = z.string().openapi('EndpointId')

const AttachmentStatusSchema = z
  .enum(['CREATING', 'DELETING', 'SCALING', 'READY'])
  .openapi('AttachmentStatus')

const StatusMessageSchema = z.string().openapi('StatusMessage')

const AttachmentSchema = z
  .object({
    SubnetId: AzSubnetSchema.exactOptional().openapi({
      description:
        "The unique identifier of the subnet that you've specified to be used for a firewall endpoint. ",
    }),
    EndpointId: EndpointIdSchema.exactOptional().openapi({
      description:
        'The identifier of the firewall endpoint that Network Firewall has instantiated in the subnet. You use this to identify the firewall endpoint in the VPC route tables, when you redirect the VPC traffic through the endpoint. ',
    }),
    Status: AttachmentStatusSchema.exactOptional().openapi({
      description:
        "The current status of the firewall endpoint in the subnet. This value reflects both the instantiation of the endpoint in the VPC subnet and the sync states that are reported in the <code>Config</code> settings. When this value is <code>READY</code>, the endpoint is available and configured properly to handle network traffic. When the endpoint isn't available for traffic, this value will reflect its state, for example <code>CREATING</code> or <code>DELETING</code>.",
    }),
    StatusMessage: StatusMessageSchema.exactOptional().openapi({
      description:
        'If Network Firewall fails to create or delete the firewall endpoint in the subnet, it populates this with the reason for the failure and how to resolve it. Depending on the error, it can take as many as 15 minutes to populate this field. For more information about the errors and solutions available for this field, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-troubleshooting-endpoint-failures.html">Troubleshooting firewall endpoint failures</a> in the <i>Network Firewall Developer Guide</i>.',
    }),
  })
  .openapi({
    description:
      "The configuration and status for a single subnet that you've specified for use by the Network Firewall firewall. This is part of the <a>FirewallStatus</a>.",
    required: [],
  })
  .openapi('Attachment')

const PerObjectSyncStatusSchema = z
  .enum(['PENDING', 'IN_SYNC', 'CAPACITY_CONSTRAINED'])
  .openapi('PerObjectSyncStatus')

const PerObjectStatusSchema = z
  .object({
    SyncStatus: PerObjectSyncStatusSchema.exactOptional().openapi({
      description:
        'Indicates whether this object is in sync with the version indicated in the update token.',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        'The current version of the object that is either in sync or pending synchronization. ',
    }),
  })
  .openapi({
    description:
      'Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.',
    required: [],
  })
  .openapi('PerObjectStatus')

const SyncStateConfigSchema = z.record(z.string(), PerObjectStatusSchema).openapi('SyncStateConfig')

const SyncStateSchema = z
  .object({
    Attachment: AttachmentSchema.exactOptional().openapi({
      description:
        "The attachment status of the firewall's association with a single VPC subnet. For each configured subnet, Network Firewall creates the attachment by instantiating the firewall endpoint in the subnet so that it's ready to take traffic. This is part of the <a>FirewallStatus</a>.",
    }),
    Config: SyncStateConfigSchema.exactOptional().openapi({
      description:
        'The configuration status of the firewall endpoint in a single VPC subnet. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of the <a>FirewallStatus</a>.',
    }),
  })
  .openapi({
    description:
      '<p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p>',
    required: [],
  })
  .openapi('SyncState')

const SyncStatesSchema = z.record(z.string(), SyncStateSchema).openapi('SyncStates')

const CIDRCountSchema = z.int().min(0).max(1000000).openapi('CIDRCount')

const IPSetMetadataSchema = z
  .object({
    ResolvedCIDRCount: CIDRCountSchema.exactOptional().openapi({
      description:
        'Describes the total number of CIDR blocks currently in use by the IP set references in a firewall. To determine how many CIDR blocks are available for you to use in a firewall, you can call <code>AvailableCIDRCount</code>.',
    }),
  })
  .openapi({ description: 'General information about the IP set.', required: [] })
  .openapi('IPSetMetadata')

const IPSetMetadataMapSchema = z.record(z.string(), IPSetMetadataSchema).openapi('IPSetMetadataMap')

const CIDRSummarySchema = z
  .object({
    AvailableCIDRCount: CIDRCountSchema.exactOptional().openapi({
      description:
        'The number of CIDR blocks available for use by the IP set references in a firewall.',
    }),
    UtilizedCIDRCount: CIDRCountSchema.exactOptional().openapi({
      description: 'The number of CIDR blocks used by the IP set references in a firewall.',
    }),
    IPSetReferences: IPSetMetadataMapSchema.exactOptional().openapi({
      description: 'The list of the IP set references used by a firewall.',
    }),
  })
  .openapi({
    description:
      'Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.',
    required: [],
  })
  .openapi('CIDRSummary')

const CapacityUsageSummarySchema = z
  .object({
    CIDRs: CIDRSummarySchema.exactOptional().openapi({
      description:
        'Describes the capacity usage of the CIDR blocks used by the IP set references in a firewall.',
    }),
  })
  .openapi({
    description:
      'The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall.',
    required: [],
  })
  .openapi('CapacityUsageSummary')

const FirewallStatusSchema = z
  .object({
    Status: FirewallStatusValueSchema.openapi({
      description:
        "The readiness of the configured firewall to handle network traffic across all of the Availability Zones where you've configured it. This setting is <code>READY</code> only when the <code>ConfigurationSyncStateSummary</code> value is <code>IN_SYNC</code> and the <code>Attachment</code> <code>Status</code> values for all of the configured subnets are <code>READY</code>. ",
    }),
    ConfigurationSyncStateSummary: ConfigurationSyncStateSchema.openapi({
      description:
        "<p>The configuration sync state for the firewall. This summarizes the sync states reported in the <code>Config</code> settings for all of the Availability Zones where you have configured the firewall. </p> <p>When you create a firewall or update its configuration, for example by adding a rule group to its firewall policy, Network Firewall distributes the configuration changes to all zones where the firewall is in use. This summary indicates whether the configuration changes have been applied everywhere. </p> <p>This status must be <code>IN_SYNC</code> for the firewall to be ready for use, but it doesn't indicate that the firewall is ready. The <code>Status</code> setting indicates firewall readiness.</p>",
    }),
    SyncStates: SyncStatesSchema.exactOptional().openapi({
      description:
        "The subnets that you've configured for use by the Network Firewall firewall. This contains one array element per Availability Zone where you've configured a subnet. These objects provide details of the information that is summarized in the <code>ConfigurationSyncStateSummary</code> and <code>Status</code>, broken down by zone and configuration object. ",
    }),
    CapacityUsageSummary: CapacityUsageSummarySchema.exactOptional().openapi({
      description:
        "Describes the capacity usage of the resources contained in a firewall's reference sets. Network Firewall calclulates the capacity usage by taking an aggregated count of all of the resources used by all of the reference sets in a firewall.",
    }),
  })
  .openapi({
    required: ['Status', 'ConfigurationSyncStateSummary'],
    description:
      'Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.',
  })
  .openapi('FirewallStatus')

const CreateFirewallResponseSchema = z
  .object({
    Firewall: FirewallSchema.exactOptional().openapi({
      description:
        'The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. ',
    }),
    FirewallStatus: FirewallStatusSchema.exactOptional().openapi({
      description:
        'Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateFirewallResponse')

const CreateFirewallRequestSchema = z
  .object({
    FirewallName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    FirewallPolicyArn: ResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the <a>FirewallPolicy</a> that you want to use for the firewall.',
    }),
    VpcId: VpcIdSchema.openapi({
      description:
        "<p>The unique identifier of the VPC where Network Firewall should create the firewall. </p> <p>You can't change this setting after you create the firewall. </p>",
    }),
    SubnetMappings: SubnetMappingsSchema.openapi({
      description:
        'The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet. ',
    }),
    DeleteProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.',
    }),
    SubnetChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
    FirewallPolicyChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains settings for encryption of your firewall resources.',
    }),
  })
  .openapi({
    required: ['FirewallName', 'FirewallPolicyArn', 'VpcId', 'SubnetMappings'],
    title: 'CreateFirewallRequest',
  })
  .openapi('CreateFirewallRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateFirewallPolicyResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p> <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallPolicyResponse: FirewallPolicyResponseSchema.openapi({
      description:
        'The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'FirewallPolicyResponse'] })
  .openapi('CreateFirewallPolicyResponse')

const CreateFirewallPolicyRequestSchema: z.ZodType<CreateFirewallPolicyRequestType> = z
  .object({
    FirewallPolicyName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.",
    }),
    FirewallPolicy: FirewallPolicySchema.openapi({
      description: 'The rule groups and policy actions to use in the firewall policy.',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall policy.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    DryRun: BooleanSchema.exactOptional().openapi({
      description:
        "<p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p> <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. </p> <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains settings for encryption of your firewall policy resources.',
    }),
  })
  .openapi({
    required: ['FirewallPolicyName', 'FirewallPolicy'],
    title: 'CreateFirewallPolicyRequest',
  })
  .openapi('CreateFirewallPolicyRequest')

const CreateRuleGroupResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p> <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    RuleGroupResponse: RuleGroupResponseSchema.openapi({
      description:
        'The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'RuleGroupResponse'] })
  .openapi('CreateRuleGroupResponse')

const CreateRuleGroupRequestSchema: z.ZodType<CreateRuleGroupRequestType> = z
  .object({
    RuleGroupName: ResourceNameSchema.openapi({
      description:
        "The descriptive name of the rule group. You can't change the name of a rule group after you create it.",
    }),
    RuleGroup: RuleGroupSchema.exactOptional().openapi({
      description:
        '<p>An object that defines the rule group rules. </p> <note> <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p> </note>',
    }),
    Rules: RulesStringSchema.exactOptional().openapi({
      description:
        '<p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups. </p> <note> <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p> </note> <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>',
    }),
    Type: RuleGroupTypeSchema.openapi({
      description:
        'Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. ',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the rule group. ',
    }),
    Capacity: RuleCapacitySchema.openapi({
      description:
        '<p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. </p> <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p> <note> <p>You can\'t change or exceed this capacity when you update the rule group, so leave room for your rule group to grow. </p> </note> <p> <b>Capacity for a stateless rule group</b> </p> <p>For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group. </p> <p>To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule\'s match settings:</p> <ul> <li> <p>A match setting with no criteria specified has a value of 1. </p> </li> <li> <p>A match setting with <code>Any</code> specified has a value of 1. </p> </li> <li> <p>All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ["UDP"] and a source setting ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3. </p> </li> </ul> <p>A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification for each of the other match settings has a capacity requirement of 6. </p> <p> <b>Capacity for a stateful rule group</b> </p> <p>For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group. </p>',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The key:value pairs to associate with the resource.',
    }),
    DryRun: BooleanSchema.exactOptional().openapi({
      description:
        "<p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p> <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. </p> <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains settings for encryption of your rule group resources.',
    }),
    SourceMetadata: SourceMetadataSchema.exactOptional().openapi({
      description:
        'A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.',
    }),
  })
  .openapi({ required: ['RuleGroupName', 'Type', 'Capacity'], title: 'CreateRuleGroupRequest' })
  .openapi('CreateRuleGroupRequest')

const CreateTLSInspectionConfigurationResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p> <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponseSchema.openapi({
      description:
        'The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'TLSInspectionConfigurationResponse'] })
  .openapi('CreateTLSInspectionConfigurationResponse')

const CreateTLSInspectionConfigurationRequestSchema: z.ZodType<CreateTLSInspectionConfigurationRequestType> =
  z
    .object({
      TLSInspectionConfigurationName: ResourceNameSchema.openapi({
        description:
          "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.",
      }),
      TLSInspectionConfiguration: TLSInspectionConfigurationSchema.openapi({
        description:
          '<p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>',
      }),
      Description: DescriptionSchema.exactOptional().openapi({
        description: 'A description of the TLS inspection configuration. ',
      }),
      Tags: TagListSchema.exactOptional().openapi({
        description: 'The key:value pairs to associate with the resource.',
      }),
      EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional(),
    })
    .openapi({
      required: ['TLSInspectionConfigurationName', 'TLSInspectionConfiguration'],
      title: 'CreateTLSInspectionConfigurationRequest',
    })
    .openapi('CreateTLSInspectionConfigurationRequest')

const DeleteFirewallResponseSchema = z
  .object({
    Firewall: FirewallSchema.exactOptional(),
    FirewallStatus: FirewallStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFirewallResponse')

const DeleteFirewallRequestSchema = z
  .object({
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
  })
  .openapi({ title: 'DeleteFirewallRequest', required: [] })
  .openapi('DeleteFirewallRequest')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const DeleteFirewallPolicyResponseSchema = z
  .object({
    FirewallPolicyResponse: FirewallPolicyResponseSchema.openapi({
      description:
        'The object containing the definition of the <a>FirewallPolicyResponse</a> that you asked to delete. ',
    }),
  })
  .openapi({ required: ['FirewallPolicyResponse'] })
  .openapi('DeleteFirewallPolicyResponse')

const DeleteFirewallPolicyRequestSchema = z
  .object({
    FirewallPolicyName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallPolicyArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall policy.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
  })
  .openapi({ title: 'DeleteFirewallPolicyRequest', required: [] })
  .openapi('DeleteFirewallPolicyRequest')

const DeleteResourcePolicyResponseSchema = z.looseObject({}).openapi('DeleteResourcePolicyResponse')

const DeleteResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete. ',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const InvalidResourcePolicyExceptionSchema = z.any().openapi('InvalidResourcePolicyException')

const DeleteRuleGroupResponseSchema = z
  .object({
    RuleGroupResponse: RuleGroupResponseSchema.openapi({
      description:
        'The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
    }),
  })
  .openapi({ required: ['RuleGroupResponse'] })
  .openapi('DeleteRuleGroupResponse')

const DeleteRuleGroupRequestSchema = z
  .object({
    RuleGroupName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    RuleGroupArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the rule group.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. </p> <note> <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p> </note>',
    }),
  })
  .openapi({ title: 'DeleteRuleGroupRequest', required: [] })
  .openapi('DeleteRuleGroupRequest')

const DeleteTLSInspectionConfigurationResponseSchema = z
  .object({
    TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponseSchema.openapi({
      description:
        'The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. ',
    }),
  })
  .openapi({ required: ['TLSInspectionConfigurationResponse'] })
  .openapi('DeleteTLSInspectionConfigurationResponse')

const DeleteTLSInspectionConfigurationRequestSchema = z
  .object({
    TLSInspectionConfigurationArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    TLSInspectionConfigurationName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
  })
  .openapi({ title: 'DeleteTLSInspectionConfigurationRequest', required: [] })
  .openapi('DeleteTLSInspectionConfigurationRequest')

const DescribeFirewallResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    Firewall: FirewallSchema.exactOptional().openapi({
      description:
        'The configuration settings for the firewall. These settings include the firewall policy and the subnets in your VPC to use for the firewall endpoints. ',
    }),
    FirewallStatus: FirewallStatusSchema.exactOptional().openapi({
      description:
        'Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeFirewallResponse')

const DescribeFirewallRequestSchema = z
  .object({
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
  })
  .openapi({ title: 'DescribeFirewallRequest', required: [] })
  .openapi('DescribeFirewallRequest')

const DescribeFirewallPolicyResponseSchema: z.ZodType<DescribeFirewallPolicyResponseType> = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p> <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallPolicyResponse: FirewallPolicyResponseSchema.openapi({
      description:
        'The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. ',
    }),
    FirewallPolicy: FirewallPolicySchema.exactOptional().openapi({
      description: 'The policy for the specified firewall policy. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'FirewallPolicyResponse'] })
  .openapi('DescribeFirewallPolicyResponse')

const DescribeFirewallPolicyRequestSchema = z
  .object({
    FirewallPolicyName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallPolicyArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall policy.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
  })
  .openapi({ title: 'DescribeFirewallPolicyRequest', required: [] })
  .openapi('DescribeFirewallPolicyRequest')

const LogTypeSchema = z.enum(['ALERT', 'FLOW']).openapi('LogType')

const LogDestinationTypeSchema = z
  .enum(['S3', 'CloudWatchLogs', 'KinesisDataFirehose'])
  .openapi('LogDestinationType')

const HashMapValueSchema = z
  .string()
  .regex(/[\s\S]*$/)
  .min(1)
  .max(1024)
  .openapi('HashMapValue')

const LogDestinationMapSchema = z
  .record(z.string(), HashMapValueSchema)
  .openapi('LogDestinationMap')

const LogDestinationConfigSchema = z
  .object({
    LogType: LogTypeSchema.openapi({
      description:
        'The type of log to send. Alert logs report traffic that matches a <a>StatefulRule</a> with an action setting that sends an alert log message. Flow logs are standard network traffic flow logs. ',
    }),
    LogDestinationType: LogDestinationTypeSchema.openapi({
      description:
        'The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.',
    }),
    LogDestination: LogDestinationMapSchema.openapi({
      description:
        '<p>The named location for the logs, provided in a key:value mapping that is specific to the chosen destination type. </p> <ul> <li> <p>For an Amazon S3 bucket, provide the name of the bucket, with key <code>bucketName</code>, and optionally provide a prefix, with key <code>prefix</code>. The following example specifies an Amazon S3 bucket named <code>DOC-EXAMPLE-BUCKET</code> and the prefix <code>alerts</code>: </p> <p> <code>"LogDestination": { "bucketName": "DOC-EXAMPLE-BUCKET", "prefix": "alerts" }</code> </p> </li> <li> <p>For a CloudWatch log group, provide the name of the CloudWatch log group, with key <code>logGroup</code>. The following example specifies a log group named <code>alert-log-group</code>: </p> <p> <code>"LogDestination": { "logGroup": "alert-log-group" }</code> </p> </li> <li> <p>For a Kinesis Data Firehose delivery stream, provide the name of the delivery stream, with key <code>deliveryStream</code>. The following example specifies a delivery stream named <code>alert-delivery-stream</code>: </p> <p> <code>"LogDestination": { "deliveryStream": "alert-delivery-stream" }</code> </p> </li> </ul>',
    }),
  })
  .openapi({
    required: ['LogType', 'LogDestinationType', 'LogDestination'],
    description:
      '<p>Defines where Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>',
  })
  .openapi('LogDestinationConfig')

const LogDestinationConfigsSchema = z
  .array(LogDestinationConfigSchema)
  .openapi('LogDestinationConfigs')

const LoggingConfigurationSchema = z
  .object({
    LogDestinationConfigs: LogDestinationConfigsSchema.openapi({
      description:
        'Defines the logging destinations for the logs for a firewall. Network Firewall generates logs for stateful rule groups. ',
    }),
  })
  .openapi({
    required: ['LogDestinationConfigs'],
    description: 'Defines how Network Firewall performs logging for a <a>Firewall</a>. ',
  })
  .openapi('LoggingConfiguration')

const DescribeLoggingConfigurationResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    LoggingConfiguration: LoggingConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLoggingConfigurationResponse')

const DescribeLoggingConfigurationRequestSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
  })
  .openapi({ title: 'DescribeLoggingConfigurationRequest', required: [] })
  .openapi('DescribeLoggingConfigurationRequest')

const PolicyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(395000)
  .openapi('PolicyString')

const DescribeResourcePolicyResponseSchema = z
  .object({
    Policy: PolicyStringSchema.exactOptional().openapi({
      description: 'The IAM policy for the resource. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePolicyResponse')

const DescribeResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve. ',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'DescribeResourcePolicyRequest' })
  .openapi('DescribeResourcePolicyRequest')

const DescribeRuleGroupResponseSchema: z.ZodType<DescribeRuleGroupResponseType> = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p> <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    RuleGroup: RuleGroupSchema.exactOptional().openapi({
      description:
        '<p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>',
    }),
    RuleGroupResponse: RuleGroupResponseSchema.openapi({
      description:
        'The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'RuleGroupResponse'] })
  .openapi('DescribeRuleGroupResponse')

const DescribeRuleGroupRequestSchema = z
  .object({
    RuleGroupName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    RuleGroupArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the rule group.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. </p> <note> <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p> </note>',
    }),
  })
  .openapi({ title: 'DescribeRuleGroupRequest', required: [] })
  .openapi('DescribeRuleGroupRequest')

const DescribeRuleGroupMetadataResponseSchema = z
  .object({
    RuleGroupArn: ResourceArnSchema.openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    RuleGroupName: ResourceNameSchema.openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'Returns the metadata objects for the specified rule group. ',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. </p> <note> <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p> </note>',
    }),
    Capacity: RuleCapacitySchema.exactOptional().openapi({
      description:
        '<p>The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. </p> <p>You can retrieve the capacity that would be required for a rule group before you create the rule group by calling <a>CreateRuleGroup</a> with <code>DryRun</code> set to <code>TRUE</code>. </p>',
    }),
    StatefulRuleOptions: StatefulRuleOptionsSchema.exactOptional(),
    LastModifiedTime: LastUpdateTimeSchema.exactOptional().openapi({
      description: 'The last time that the rule group was changed.',
    }),
  })
  .openapi({ required: ['RuleGroupArn', 'RuleGroupName'] })
  .openapi('DescribeRuleGroupMetadataResponse')

const DescribeRuleGroupMetadataRequestSchema = z
  .object({
    RuleGroupName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    RuleGroupArn: ResourceArnSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. </p> <note> <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p> </note>',
    }),
  })
  .openapi({ title: 'DescribeRuleGroupMetadataRequest', required: [] })
  .openapi('DescribeRuleGroupMetadataRequest')

const DescribeTLSInspectionConfigurationResponseSchema: z.ZodType<DescribeTLSInspectionConfigurationResponseType> =
  z
    .object({
      UpdateToken: UpdateTokenSchema.openapi({
        description:
          "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p> <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
      }),
      TLSInspectionConfiguration: TLSInspectionConfigurationSchema.exactOptional().openapi({
        description:
          '<p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>',
      }),
      TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponseSchema.openapi({
        description:
          'The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. ',
      }),
    })
    .openapi({ required: ['UpdateToken', 'TLSInspectionConfigurationResponse'] })
    .openapi('DescribeTLSInspectionConfigurationResponse')

const DescribeTLSInspectionConfigurationRequestSchema = z
  .object({
    TLSInspectionConfigurationArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the TLS inspection configuration.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    TLSInspectionConfigurationName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
  })
  .openapi({ title: 'DescribeTLSInspectionConfigurationRequest', required: [] })
  .openapi('DescribeTLSInspectionConfigurationRequest')

const DisassociateSubnetsResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    SubnetMappings: SubnetMappingsSchema.exactOptional().openapi({
      description: 'The IDs of the subnets that are associated with the firewall. ',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateSubnetsResponse')

const AzSubnetsSchema = z.array(AzSubnetSchema).openapi('AzSubnets')

const DisassociateSubnetsRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    SubnetIds: AzSubnetsSchema.openapi({
      description: 'The unique identifiers for the subnets that you want to disassociate. ',
    }),
  })
  .openapi({ required: ['SubnetIds'], title: 'DisassociateSubnetsRequest' })
  .openapi('DisassociateSubnetsRequest')

const PaginationTokenSchema = z
  .string()
  .regex(/[0-9A-Za-z:\/+=]+$/)
  .min(1)
  .max(2048)
  .openapi('PaginationToken')

const FirewallPolicyMetadataSchema = z
  .object({
    Name: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.",
    }),
    Arn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall policy.',
    }),
  })
  .openapi({
    description:
      'High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. ',
    required: [],
  })
  .openapi('FirewallPolicyMetadata')

const FirewallPoliciesSchema = z.array(FirewallPolicyMetadataSchema).openapi('FirewallPolicies')

const ListFirewallPoliciesResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    FirewallPolicies: FirewallPoliciesSchema.exactOptional().openapi({
      description:
        'The metadata for the firewall policies. Depending on your setting for max results and the number of firewall policies that you have, this might not be the full list. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallPoliciesResponse')

const PaginationMaxResultsSchema = z.int().min(1).max(100).openapi('PaginationMaxResults')

const ListFirewallPoliciesRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    MaxResults: PaginationMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
    }),
  })
  .openapi({ title: 'ListFirewallPoliciesRequest', required: [] })
  .openapi('ListFirewallPoliciesRequest')

const FirewallMetadataSchema = z
  .object({
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
  })
  .openapi({
    description:
      'High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.',
    required: [],
  })
  .openapi('FirewallMetadata')

const FirewallsSchema = z.array(FirewallMetadataSchema).openapi('Firewalls')

const ListFirewallsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    Firewalls: FirewallsSchema.exactOptional().openapi({
      description:
        'The firewall metadata objects for the VPCs that you specified. Depending on your setting for max results and the number of firewalls you have, a single call might not be the full list. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallsResponse')

const VpcIdsSchema = z.array(VpcIdSchema).openapi('VpcIds')

const ListFirewallsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    VpcIds: VpcIdsSchema.exactOptional().openapi({
      description:
        'The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls for. Leave this blank to retrieve all firewalls that you have defined.',
    }),
    MaxResults: PaginationMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
    }),
  })
  .openapi({ title: 'ListFirewallsRequest', required: [] })
  .openapi('ListFirewallsRequest')

const RuleGroupMetadataSchema = z
  .object({
    Name: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the rule group. You can't change the name of a rule group after you create it.",
    }),
    Arn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the rule group.',
    }),
  })
  .openapi({
    description:
      'High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.',
    required: [],
  })
  .openapi('RuleGroupMetadata')

const RuleGroupsSchema = z.array(RuleGroupMetadataSchema).openapi('RuleGroups')

const ListRuleGroupsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    RuleGroups: RuleGroupsSchema.exactOptional().openapi({
      description:
        "The rule group metadata objects that you've defined. Depending on your setting for max results and the number of rule groups, this might not be the full list. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListRuleGroupsResponse')

const ResourceManagedStatusSchema = z.enum(['MANAGED', 'ACCOUNT']).openapi('ResourceManagedStatus')

const ResourceManagedTypeSchema = z
  .enum(['AWS_MANAGED_THREAT_SIGNATURES', 'AWS_MANAGED_DOMAIN_LISTS'])
  .openapi('ResourceManagedType')

const ListRuleGroupsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    MaxResults: PaginationMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
    }),
    Scope: ResourceManagedStatusSchema.exactOptional().openapi({
      description:
        'The scope of the request. The default setting of <code>ACCOUNT</code> or a setting of <code>NULL</code> returns all of the rule groups in your account. A setting of <code>MANAGED</code> returns all available managed rule groups.',
    }),
    ManagedType: ResourceManagedTypeSchema.exactOptional().openapi({
      description: 'Indicates the general category of the Amazon Web Services managed rule group.',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        'Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.',
    }),
  })
  .openapi({ title: 'ListRuleGroupsRequest', required: [] })
  .openapi('ListRuleGroupsRequest')

const TLSInspectionConfigurationMetadataSchema = z
  .object({
    Name: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.",
    }),
    Arn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the TLS inspection configuration.',
    }),
  })
  .openapi({
    description:
      'High-level information about a TLS inspection configuration, returned by <code>ListTLSInspectionConfigurations</code>. You can use the information provided in the metadata to retrieve and manage a TLS configuration.',
    required: [],
  })
  .openapi('TLSInspectionConfigurationMetadata')

const TLSInspectionConfigurationsSchema = z
  .array(TLSInspectionConfigurationMetadataSchema)
  .openapi('TLSInspectionConfigurations')

const ListTLSInspectionConfigurationsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    TLSInspectionConfigurations: TLSInspectionConfigurationsSchema.exactOptional().openapi({
      description:
        "The TLS inspection configuration metadata objects that you've defined. Depending on your setting for max results and the number of TLS inspection configurations, this might not be the full list.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTLSInspectionConfigurationsResponse')

const ListTLSInspectionConfigurationsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    MaxResults: PaginationMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
    }),
  })
  .openapi({ title: 'ListTLSInspectionConfigurationsRequest', required: [] })
  .openapi('ListTLSInspectionConfigurationsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags that are associated with the resource. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagsPaginationMaxResultsSchema = z.int().min(0).max(100).openapi('TagsPaginationMaxResults')

const ListTagsForResourceRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
    }),
    MaxResults: TagsPaginationMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
    }),
    ResourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource.',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutResourcePolicyResponseSchema = z.looseObject({}).openapi('PutResourcePolicyResponse')

const PutResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the account that you want to share rule groups and firewall policies with.',
    }),
    Policy: PolicyStringSchema.openapi({
      description:
        '<p>The IAM policy statement that lists the accounts that you want to share your rule group or firewall policy with and the operations that you want the accounts to be able to perform. </p> <p>For a rule group resource, you can specify the following operations in the Actions section of the statement:</p> <ul> <li> <p>network-firewall:CreateFirewallPolicy</p> </li> <li> <p>network-firewall:UpdateFirewallPolicy</p> </li> <li> <p>network-firewall:ListRuleGroups</p> </li> </ul> <p>For a firewall policy resource, you can specify the following operations in the Actions section of the statement:</p> <ul> <li> <p>network-firewall:CreateFirewall</p> </li> <li> <p>network-firewall:UpdateFirewall</p> </li> <li> <p>network-firewall:AssociateFirewallPolicy</p> </li> <li> <p>network-firewall:ListFirewallPolicies</p> </li> </ul> <p>In the Resource section of the statement, you specify the ARNs for the rule groups and firewall policies that you want to share with the account that you specified in <code>Arn</code>.</p>',
    }),
  })
  .openapi({ required: ['ResourceArn', 'Policy'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource.',
    }),
    Tags: TagListSchema.openapi({ description: '<p/>' }),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the resource.',
    }),
    TagKeys: TagKeyListSchema.openapi({ description: '<p/>' }),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateFirewallDeleteProtectionResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    DeleteProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallDeleteProtectionResponse')

const UpdateFirewallDeleteProtectionRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    DeleteProtection: BooleanSchema.openapi({
      description:
        'A flag indicating whether it is possible to delete the firewall. A setting of <code>TRUE</code> indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to <code>TRUE</code>.',
    }),
  })
  .openapi({ required: ['DeleteProtection'], title: 'UpdateFirewallDeleteProtectionRequest' })
  .openapi('UpdateFirewallDeleteProtectionRequest')

const ResourceOwnerCheckExceptionSchema = z.any().openapi('ResourceOwnerCheckException')

const UpdateFirewallDescriptionResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall.',
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallDescriptionResponse')

const UpdateFirewallDescriptionRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description:
        'The new description for the firewall. If you omit this setting, Network Firewall removes the description for the firewall.',
    }),
  })
  .openapi({ title: 'UpdateFirewallDescriptionRequest', required: [] })
  .openapi('UpdateFirewallDescriptionRequest')

const UpdateFirewallEncryptionConfigurationResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallEncryptionConfigurationResponse')

const UpdateFirewallEncryptionConfigurationRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateFirewallEncryptionConfigurationRequest', required: [] })
  .openapi('UpdateFirewallEncryptionConfigurationRequest')

const UpdateFirewallPolicyResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p> <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallPolicyResponse: FirewallPolicyResponseSchema.openapi({
      description:
        'The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'FirewallPolicyResponse'] })
  .openapi('UpdateFirewallPolicyResponse')

const UpdateFirewallPolicyRequestSchema: z.ZodType<UpdateFirewallPolicyRequestType> = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. </p> <p>To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallPolicyArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall policy.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallPolicyName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallPolicy: FirewallPolicySchema.openapi({
      description: 'The updated firewall policy to use for the firewall. ',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the firewall policy.',
    }),
    DryRun: BooleanSchema.exactOptional().openapi({
      description:
        "<p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p> <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. </p> <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains settings for encryption of your firewall policy resources.',
    }),
  })
  .openapi({ required: ['UpdateToken', 'FirewallPolicy'], title: 'UpdateFirewallPolicyRequest' })
  .openapi('UpdateFirewallPolicyRequest')

const UpdateFirewallPolicyChangeProtectionResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    FirewallPolicyChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallPolicyChangeProtectionResponse')

const UpdateFirewallPolicyChangeProtectionRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    FirewallPolicyChangeProtection: BooleanSchema.openapi({
      description:
        'A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
  })
  .openapi({
    required: ['FirewallPolicyChangeProtection'],
    title: 'UpdateFirewallPolicyChangeProtectionRequest',
  })
  .openapi('UpdateFirewallPolicyChangeProtectionRequest')

const UpdateLoggingConfigurationResponseSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    LoggingConfiguration: LoggingConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLoggingConfigurationResponse')

const UpdateLoggingConfigurationRequestSchema = z
  .object({
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    LoggingConfiguration: LoggingConfigurationSchema.exactOptional().openapi({
      description:
        'Defines how Network Firewall performs logging for a firewall. If you omit this setting, Network Firewall disables logging for the firewall.',
    }),
  })
  .openapi({ title: 'UpdateLoggingConfigurationRequest', required: [] })
  .openapi('UpdateLoggingConfigurationRequest')

const LogDestinationPermissionExceptionSchema = z.any().openapi('LogDestinationPermissionException')

const UpdateRuleGroupResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p> <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    RuleGroupResponse: RuleGroupResponseSchema.openapi({
      description:
        'The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'RuleGroupResponse'] })
  .openapi('UpdateRuleGroupResponse')

const UpdateRuleGroupRequestSchema: z.ZodType<UpdateRuleGroupRequestType> = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. </p> <p>To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    RuleGroupArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the rule group.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    RuleGroupName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the rule group. You can't change the name of a rule group after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    RuleGroup: RuleGroupSchema.exactOptional().openapi({
      description:
        '<p>An object that defines the rule group rules. </p> <note> <p>You must provide either this rule group setting or a <code>Rules</code> setting, but not both. </p> </note>',
    }),
    Rules: RulesStringSchema.exactOptional().openapi({
      description:
        '<p>A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups. </p> <note> <p>You must provide either this rules setting or a populated <code>RuleGroup</code> setting, but not both. </p> </note> <p>You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a <a>RuleGroup</a> object that Network Firewall has populated from your string. </p>',
    }),
    Type: RuleGroupTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules. </p> <note> <p>This setting is required for requests that do not include the <code>RuleGroupARN</code>.</p> </note>',
    }),
    Description: DescriptionSchema.exactOptional().openapi({
      description: 'A description of the rule group. ',
    }),
    DryRun: BooleanSchema.exactOptional().openapi({
      description:
        "<p>Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. </p> <p>If set to <code>TRUE</code>, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to <code>FALSE</code>, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. </p> <p>If set to <code>FALSE</code>, Network Firewall makes the requested changes to your resources. </p>",
    }),
    EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
      description:
        'A complex type that contains settings for encryption of your rule group resources.',
    }),
    SourceMetadata: SourceMetadataSchema.exactOptional().openapi({
      description:
        'A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.',
    }),
  })
  .openapi({ required: ['UpdateToken'], title: 'UpdateRuleGroupRequest' })
  .openapi('UpdateRuleGroupRequest')

const UpdateSubnetChangeProtectionResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the firewall.',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
    }),
    SubnetChangeProtection: BooleanSchema.exactOptional().openapi({
      description:
        'A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSubnetChangeProtectionResponse')

const UpdateSubnetChangeProtectionRequestSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.exactOptional().openapi({
      description:
        "<p>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. </p> <p>To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it.</p> <p>To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    FirewallArn: ResourceArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of the firewall.</p> <p>You must specify the ARN or the name, and you can specify both. </p>',
    }),
    FirewallName: ResourceNameSchema.exactOptional().openapi({
      description:
        "<p>The descriptive name of the firewall. You can't change the name of a firewall after you create it.</p> <p>You must specify the ARN or the name, and you can specify both. </p>",
    }),
    SubnetChangeProtection: BooleanSchema.openapi({
      description:
        'A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to <code>TRUE</code>.',
    }),
  })
  .openapi({ required: ['SubnetChangeProtection'], title: 'UpdateSubnetChangeProtectionRequest' })
  .openapi('UpdateSubnetChangeProtectionRequest')

const UpdateTLSInspectionConfigurationResponseSchema = z
  .object({
    UpdateToken: UpdateTokenSchema.openapi({
      description:
        "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p> <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
    }),
    TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponseSchema.openapi({
      description:
        'The high-level properties of a TLS inspection configuration. This, along with the <a>TLSInspectionConfiguration</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. ',
    }),
  })
  .openapi({ required: ['UpdateToken', 'TLSInspectionConfigurationResponse'] })
  .openapi('UpdateTLSInspectionConfigurationResponse')

const UpdateTLSInspectionConfigurationRequestSchema: z.ZodType<UpdateTLSInspectionConfigurationRequestType> =
  z
    .object({
      TLSInspectionConfigurationArn: ResourceArnSchema.exactOptional().openapi({
        description: 'The Amazon Resource Name (ARN) of the TLS inspection configuration.',
      }),
      TLSInspectionConfigurationName: ResourceNameSchema.exactOptional().openapi({
        description:
          "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.",
      }),
      TLSInspectionConfiguration: TLSInspectionConfigurationSchema.openapi({
        description:
          '<p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p>',
      }),
      Description: DescriptionSchema.exactOptional().openapi({
        description: 'A description of the TLS inspection configuration. ',
      }),
      EncryptionConfiguration: EncryptionConfigurationSchema.exactOptional().openapi({
        description:
          'A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration.',
      }),
      UpdateToken: UpdateTokenSchema.openapi({
        description:
          "<p>A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request. </p> <p>To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. </p>",
      }),
    })
    .openapi({
      required: ['TLSInspectionConfiguration', 'UpdateToken'],
      title: 'UpdateTLSInspectionConfigurationRequest',
    })
    .openapi('UpdateTLSInspectionConfigurationRequest')

const AvailabilityZoneSchema = z.string().openapi('AvailabilityZone')

const HashMapKeySchema = z
  .string()
  .regex(/^[0-9A-Za-z.\-_@\/]+$/)
  .min(3)
  .max(50)
  .openapi('HashMapKey')

const IPSetArnSchema = z.string().openapi('IPSetArn')

const IPSetReferenceNameSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9_]*$/)
  .min(1)
  .max(32)
  .openapi('IPSetReferenceName')

const RuleVariableNameSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9_]*$/)
  .min(1)
  .max(32)
  .openapi('RuleVariableName')

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

export const postXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy',
  description:
    '<p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>',
  operationId: 'AssociateFirewallPolicy',
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
        .literal('NetworkFirewall_20201112.AssociateFirewallPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.AssociateFirewallPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateFirewallPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateFirewallPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112AssociateSubnetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets',
  description:
    "<p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>",
  operationId: 'AssociateSubnets',
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
        .literal('NetworkFirewall_20201112.AssociateSubnets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.AssociateSubnets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateSubnetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateSubnetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    486: {
      description: 'InsufficientCapacityException',
      content: { 'application/json': { schema: InsufficientCapacityExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112CreateFirewallRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall',
  description:
    "<p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>",
  operationId: 'CreateFirewall',
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
        .literal('NetworkFirewall_20201112.CreateFirewall')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.CreateFirewall'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFirewallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFirewallResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InsufficientCapacityException',
      content: { 'application/json': { schema: InsufficientCapacityExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112CreateFirewallPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy',
  description:
    '<p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>',
  operationId: 'CreateFirewallPolicy',
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
        .literal('NetworkFirewall_20201112.CreateFirewallPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.CreateFirewallPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFirewallPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFirewallPolicyResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'InsufficientCapacityException',
      content: { 'application/json': { schema: InsufficientCapacityExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112CreateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup',
  description:
    '<p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>',
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
        .literal('NetworkFirewall_20201112.CreateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.CreateRuleGroup'] },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'InsufficientCapacityException',
      content: { 'application/json': { schema: InsufficientCapacityExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration',
    description:
      '<p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration\'s tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>',
    operationId: 'CreateTLSInspectionConfiguration',
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
          .literal('NetworkFirewall_20201112.CreateTLSInspectionConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.CreateTLSInspectionConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateTLSInspectionConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateTLSInspectionConfigurationResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      482: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112DeleteFirewallRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall',
  description:
    "<p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>",
  operationId: 'DeleteFirewall',
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
        .literal('NetworkFirewall_20201112.DeleteFirewall')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DeleteFirewall'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy',
  description: 'Deletes the specified <a>FirewallPolicy</a>. ',
  operationId: 'DeleteFirewallPolicy',
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
        .literal('NetworkFirewall_20201112.DeleteFirewallPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DeleteFirewallPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy',
  description: 'Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. ',
  operationId: 'DeleteResourcePolicy',
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
        .literal('NetworkFirewall_20201112.DeleteResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DeleteResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidResourcePolicyException',
      content: { 'application/json': { schema: InvalidResourcePolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DeleteRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup',
  description: 'Deletes the specified <a>RuleGroup</a>. ',
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
        .literal('NetworkFirewall_20201112.DeleteRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DeleteRuleGroup'] },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration',
    description: 'Deletes the specified <a>TLSInspectionConfiguration</a>.',
    operationId: 'DeleteTLSInspectionConfiguration',
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
          .literal('NetworkFirewall_20201112.DeleteTLSInspectionConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteTLSInspectionConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteTLSInspectionConfigurationResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InvalidOperationException',
        content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112DescribeFirewallRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall',
  description: 'Returns the data objects for the specified firewall. ',
  operationId: 'DescribeFirewall',
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
        .literal('NetworkFirewall_20201112.DescribeFirewall')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DescribeFirewall'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFirewallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFirewallResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy',
  description: 'Returns the data objects for the specified firewall policy. ',
  operationId: 'DescribeFirewallPolicy',
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
        .literal('NetworkFirewall_20201112.DescribeFirewallPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DescribeFirewallPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFirewallPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFirewallPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration',
  description: 'Returns the logging configuration for the specified firewall. ',
  operationId: 'DescribeLoggingConfiguration',
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
        .literal('NetworkFirewall_20201112.DescribeLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['NetworkFirewall_20201112.DescribeLoggingConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLoggingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy',
  description:
    'Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. ',
  operationId: 'DescribeResourcePolicy',
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
        .literal('NetworkFirewall_20201112.DescribeResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DescribeResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup',
  description: 'Returns the data objects for the specified rule group. ',
  operationId: 'DescribeRuleGroup',
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
        .literal('NetworkFirewall_20201112.DescribeRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DescribeRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRuleGroupResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata',
  description:
    'High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. ',
  operationId: 'DescribeRuleGroupMetadata',
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
        .literal('NetworkFirewall_20201112.DescribeRuleGroupMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['NetworkFirewall_20201112.DescribeRuleGroupMetadata'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRuleGroupMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRuleGroupMetadataResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration',
    description: 'Returns the data objects for the specified TLS inspection configuration.',
    operationId: 'DescribeTLSInspectionConfiguration',
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
          .literal('NetworkFirewall_20201112.DescribeTLSInspectionConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeTLSInspectionConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeTLSInspectionConfigurationResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112DisassociateSubnetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets',
  description:
    'Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. ',
  operationId: 'DisassociateSubnets',
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
        .literal('NetworkFirewall_20201112.DisassociateSubnets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.DisassociateSubnets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateSubnetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateSubnetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    485: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112ListFirewallPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies',
  description:
    'Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. ',
  operationId: 'ListFirewallPolicies',
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
        .literal('NetworkFirewall_20201112.ListFirewallPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.ListFirewallPolicies'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFirewallPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallPoliciesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112ListFirewallsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls',
  description:
    '<p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>',
  operationId: 'ListFirewalls',
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
        .literal('NetworkFirewall_20201112.ListFirewalls')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.ListFirewalls'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFirewallsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112ListRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups',
  description:
    'Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. ',
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
        .literal('NetworkFirewall_20201112.ListRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.ListRuleGroups'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations',
    description:
      'Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.',
    operationId: 'ListTLSInspectionConfigurations',
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
          .literal('NetworkFirewall_20201112.ListTLSInspectionConfigurations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.ListTLSInspectionConfigurations'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListTLSInspectionConfigurationsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTLSInspectionConfigurationsResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource',
  description:
    '<p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>',
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
        .literal('NetworkFirewall_20201112.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112PutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy',
  description:
    '<p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>',
  operationId: 'PutResourcePolicy',
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
        .literal('NetworkFirewall_20201112.PutResourcePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.PutResourcePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourcePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidResourcePolicyException',
      content: { 'application/json': { schema: InvalidResourcePolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.TagResource',
  description:
    '<p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>',
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
        .literal('NetworkFirewall_20201112.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.TagResource'] },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UntagResource',
  description:
    '<p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>',
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
        .literal('NetworkFirewall_20201112.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.UntagResource'] },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection',
    description:
      "Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. ",
    operationId: 'UpdateFirewallDeleteProtection',
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
          .literal('NetworkFirewall_20201112.UpdateFirewallDeleteProtection')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.UpdateFirewallDeleteProtection'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateFirewallDeleteProtectionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateFirewallDeleteProtectionResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
      485: {
        description: 'ResourceOwnerCheckException',
        content: { 'application/json': { schema: ResourceOwnerCheckExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription',
  description:
    "Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. ",
  operationId: 'UpdateFirewallDescription',
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
        .literal('NetworkFirewall_20201112.UpdateFirewallDescription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['NetworkFirewall_20201112.UpdateFirewallDescription'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallDescriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallDescriptionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration',
    description: 'A complex type that contains settings for encryption of your firewall resources.',
    operationId: 'UpdateFirewallEncryptionConfiguration',
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
          .literal('NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateFirewallEncryptionConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateFirewallEncryptionConfigurationResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
      485: {
        description: 'ResourceOwnerCheckException',
        content: { 'application/json': { schema: ResourceOwnerCheckExceptionSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy',
  description: 'Updates the properties of the specified firewall policy.',
  operationId: 'UpdateFirewallPolicy',
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
        .literal('NetworkFirewall_20201112.UpdateFirewallPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.UpdateFirewallPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection',
    description:
      "Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.",
    operationId: 'UpdateFirewallPolicyChangeProtection',
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
          .literal('NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateFirewallPolicyChangeProtectionRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateFirewallPolicyChangeProtectionResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
      485: {
        description: 'ResourceOwnerCheckException',
        content: { 'application/json': { schema: ResourceOwnerCheckExceptionSchema } },
      },
    },
  })

export const postXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration',
  description:
    "<p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>",
  operationId: 'UpdateLoggingConfiguration',
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
        .literal('NetworkFirewall_20201112.UpdateLoggingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['NetworkFirewall_20201112.UpdateLoggingConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLoggingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLoggingConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    485: {
      description: 'LogDestinationPermissionException',
      content: { 'application/json': { schema: LogDestinationPermissionExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup',
  description:
    '<p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>',
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
        .literal('NetworkFirewall_20201112.UpdateRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['NetworkFirewall_20201112.UpdateRuleGroup'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection',
  description: '<p/>',
  operationId: 'UpdateSubnetChangeProtection',
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
        .literal('NetworkFirewall_20201112.UpdateSubnetChangeProtection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['NetworkFirewall_20201112.UpdateSubnetChangeProtection'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSubnetChangeProtectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSubnetChangeProtectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InvalidTokenException',
      content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
    },
    485: {
      description: 'ResourceOwnerCheckException',
      content: { 'application/json': { schema: ResourceOwnerCheckExceptionSchema } },
    },
  },
})

export const postXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration',
    description:
      '<p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>',
    operationId: 'UpdateTLSInspectionConfiguration',
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
          .literal('NetworkFirewall_20201112.UpdateTLSInspectionConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateTLSInspectionConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateTLSInspectionConfigurationResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      483: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
      484: {
        description: 'InvalidTokenException',
        content: { 'application/json': { schema: InvalidTokenExceptionSchema } },
      },
    },
  })
