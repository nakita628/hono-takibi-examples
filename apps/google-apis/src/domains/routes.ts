import { createRoute, z } from '@hono/zod-openapi'

const AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const AuthorizationCodeSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Authorization Code in ASCII. It can be used to transfer the domain to or from another registrar.',
      }),
  })
  .openapi({ description: 'Defines an authorization code.', required: [] })
  .openapi('AuthorizationCode')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const PostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('PostalAddress')

const ContactSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Email address of the contact.' }),
    faxNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fax number of the contact in international format. For example, `"+1-800-555-0123"`.',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Phone number of the contact in international format. For example, `"+1-800-555-0123"`.',
      }),
    postalAddress: PostalAddressSchema.exactOptional().openapi({
      description: 'Required. Postal address of the contact.',
    }),
  })
  .openapi({
    description: 'Details required for a contact associated with a `Registration`.',
    required: [],
  })
  .openapi('Contact')

const ContactSettingsSchema = z
  .object({
    adminContact: ContactSchema.exactOptional().openapi({
      description: 'Required. The administrative contact for the `Registration`.',
    }),
    privacy: z
      .enum([
        'CONTACT_PRIVACY_UNSPECIFIED',
        'PUBLIC_CONTACT_DATA',
        'PRIVATE_CONTACT_DATA',
        'REDACTED_CONTACT_DATA',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Privacy setting for the contacts associated with the `Registration`.',
      }),
    registrantContact: ContactSchema.exactOptional().openapi({
      description:
        'Required. The registrant contact for the `Registration`. *Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.* *Warning: For new `Registration`s, the registrant receives an email confirmation that they must complete within 15 days to avoid domain suspension.*',
    }),
    technicalContact: ContactSchema.exactOptional().openapi({
      description: 'Required. The technical contact for the `Registration`.',
    }),
  })
  .openapi({
    description:
      "Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.",
    required: [],
  })
  .openapi('ContactSettings')

const ConfigureContactSettingsRequestSchema = z
  .object({
    contactNotices: z
      .array(z.enum(['CONTACT_NOTICE_UNSPECIFIED', 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT']))
      .exactOptional()
      .openapi({
        description:
          'The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `contact_settings`.',
      }),
    contactSettings: ContactSettingsSchema.exactOptional().openapi({
      description: 'Fields of the `ContactSettings` to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Validate the request without actually updating the contact settings.',
      }),
  })
  .openapi({ description: 'Request for the `ConfigureContactSettings` method.', required: [] })
  .openapi('ConfigureContactSettingsRequest')

const DsRecordSchema = z
  .object({
    algorithm: z
      .enum([
        'ALGORITHM_UNSPECIFIED',
        'RSAMD5',
        'DH',
        'DSA',
        'ECC',
        'RSASHA1',
        'DSANSEC3SHA1',
        'RSASHA1NSEC3SHA1',
        'RSASHA256',
        'RSASHA512',
        'ECCGOST',
        'ECDSAP256SHA256',
        'ECDSAP384SHA384',
        'ED25519',
        'ED448',
        'INDIRECT',
        'PRIVATEDNS',
        'PRIVATEOID',
      ])
      .exactOptional()
      .openapi({ description: 'The algorithm used to generate the referenced DNSKEY.' }),
    digest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digest generated from the referenced DNSKEY.' }),
    digestType: z
      .enum(['DIGEST_TYPE_UNSPECIFIED', 'SHA1', 'SHA256', 'GOST3411', 'SHA384'])
      .exactOptional()
      .openapi({
        description: 'The hash function used to generate the digest of the referenced DNSKEY.',
      }),
    keyTag: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The key tag of the record. Must be set in range 0 -- 65535.' }),
  })
  .openapi({
    description:
      "Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.",
    required: [],
  })
  .openapi('DsRecord')

const CustomDnsSchema = z
  .object({
    dsRecords: z
      .array(DsRecordSchema)
      .exactOptional()
      .openapi({
        description:
          "The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide the values to set here. If this field is empty, DNSSEC is disabled.",
      }),
    nameServers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format.',
      }),
  })
  .openapi({ description: 'Configuration for an arbitrary DNS provider.', required: [] })
  .openapi('CustomDns')

const GlueRecordSchema = z
  .object({
    hostName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Domain name of the host in Punycode format.' }),
    ipv4Addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. `198.51.100.1`). At least one of `ipv4_address` and `ipv6_address` must be set.',
      }),
    ipv6Addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of IPv6 addresses corresponding to this host in the standard hexadecimal format (e.g. `2001:db8::`). At least one of `ipv4_address` and `ipv6_address` must be set.',
      }),
  })
  .openapi({
    description:
      'Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.',
    required: [],
  })
  .openapi('GlueRecord')

const GoogleDomainsDnsSchema = z
  .object({
    dsRecords: z
      .array(DsRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of DS records published for this domain. The list is automatically populated when `ds_state` is `DS_RECORDS_PUBLISHED`, otherwise it remains empty.',
        readOnly: true,
      }),
    dsState: z
      .enum(['DS_STATE_UNSPECIFIED', 'DS_RECORDS_UNPUBLISHED', 'DS_RECORDS_PUBLISHED'])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC.',
      }),
    nameServers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. This field is automatically populated with the name servers assigned to the Google Domains DNS zone.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).",
    required: [],
  })
  .openapi('GoogleDomainsDns')

const DnsSettingsSchema = z
  .object({
    customDns: CustomDnsSchema.exactOptional().openapi({
      description: 'An arbitrary DNS provider identified by its name servers.',
    }),
    glueRecords: z
      .array(GlueRecordSchema)
      .exactOptional()
      .openapi({
        description: 'The list of glue records for this `Registration`. Commonly empty.',
      }),
    googleDomainsDns: GoogleDomainsDnsSchema.exactOptional().openapi({
      description: 'The free DNS zone provided by [Google Domains](https://domains.google/).',
    }),
  })
  .openapi({
    description:
      'Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.',
    required: [],
  })
  .openapi('DnsSettings')

const ConfigureDnsSettingsRequestSchema = z
  .object({
    dnsSettings: DnsSettingsSchema.exactOptional().openapi({
      description: 'Fields of the `DnsSettings` to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider\'s field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. //',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Validate the request without actually updating the DNS settings.' }),
  })
  .openapi({ description: 'Request for the `ConfigureDnsSettings` method.', required: [] })
  .openapi('ConfigureDnsSettingsRequest')

const ManagementSettingsSchema = z
  .object({
    renewalMethod: z
      .enum(['RENEWAL_METHOD_UNSPECIFIED', 'AUTOMATIC_RENEWAL', 'MANUAL_RENEWAL'])
      .exactOptional()
      .openapi({
        description: 'Output only. The renewal method for this `Registration`.',
        readOnly: true,
      }),
    transferLockState: z
      .enum(['TRANSFER_LOCK_STATE_UNSPECIFIED', 'UNLOCKED', 'LOCKED'])
      .exactOptional()
      .openapi({
        description: 'Controls whether the domain can be transferred to another registrar.',
      }),
  })
  .openapi({
    description: 'Defines renewal, billing, and transfer settings for a `Registration`.',
    required: [],
  })
  .openapi('ManagementSettings')

const ConfigureManagementSettingsRequestSchema = z
  .object({
    managementSettings: ManagementSettingsSchema.exactOptional().openapi({
      description: 'Fields of the `ManagementSettings` to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.',
      }),
  })
  .openapi({ description: 'Request for the `ConfigureManagementSettings` method.', required: [] })
  .openapi('ConfigureManagementSettingsRequest')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('Money')

const DomainSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain name. Unicode domain names are expressed in Punycode format.',
      }),
    resourceState: z
      .enum([
        'RESOURCE_STATE_UNSPECIFIED',
        'IMPORTABLE',
        'UNSUPPORTED',
        'SUSPENDED',
        'EXPIRED',
        'DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of this domain as a `Registration` resource.' }),
    yearlyPrice: MoneySchema.exactOptional().openapi({
      description:
        'Price to renew the domain for one year. Only set when `resource_state` is `IMPORTABLE`.',
    }),
  })
  .openapi({
    description: 'A domain that the calling user manages in Google Domains.',
    required: [],
  })
  .openapi('Domain')

const ExportRegistrationRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `ExportRegistration` method.' })
  .openapi('ExportRegistrationRequest')

const ImportDomainRequestSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The domain name. Unicode domain names must be expressed in Punycode format.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with the `Registration`.' }),
  })
  .openapi({ description: 'Request for the `ImportDomain` method.', required: [] })
  .openapi('ImportDomainRequest')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

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

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
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
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const RegistrationSchema = z
  .object({
    contactSettings: ContactSettingsSchema.exactOptional().openapi({
      description:
        'Required. Settings for contact information linked to the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureContactSettings` method.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of the `Registration` resource.',
        readOnly: true,
      }),
    dnsSettings: DnsSettingsSchema.exactOptional().openapi({
      description:
        'Settings controlling the DNS configuration of the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureDnsSettings` method.',
    }),
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The expiration timestamp of the `Registration`.',
        readOnly: true,
      }),
    issues: z
      .array(z.enum(['ISSUE_UNSPECIFIED', 'CONTACT_SUPPORT', 'UNVERIFIED_EMAIL']))
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of issues with the `Registration` that require attention.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with the `Registration`.' }),
    managementSettings: ManagementSettingsSchema.exactOptional().openapi({
      description:
        'Settings for management of the `Registration`, including renewal, billing, and transfer. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureManagementSettings` method.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.',
        readOnly: true,
      }),
    pendingContactSettings: ContactSettingsSchema.exactOptional().openapi({
      description:
        'Output only. Pending contact settings for the `Registration`. Updates to the `contact_settings` field that change its `registrant_contact` or `privacy` fields require email confirmation by the `registrant_contact` before taking effect. This field is set only if there are pending updates to the `contact_settings` that have not been confirmed. To confirm the changes, the `registrant_contact` must follow the instructions in the email they receive.',
      readOnly: true,
    }),
    registerFailureReason: z
      .enum([
        'REGISTER_FAILURE_REASON_UNSPECIFIED',
        'REGISTER_FAILURE_REASON_UNKNOWN',
        'DOMAIN_NOT_AVAILABLE',
        'INVALID_CONTACTS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'REGISTRATION_PENDING',
        'REGISTRATION_FAILED',
        'TRANSFER_PENDING',
        'TRANSFER_FAILED',
        'IMPORT_PENDING',
        'ACTIVE',
        'SUSPENDED',
        'EXPORTED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the `Registration`', readOnly: true }),
    supportedPrivacy: z
      .array(
        z.enum([
          'CONTACT_PRIVACY_UNSPECIFIED',
          'PUBLIC_CONTACT_DATA',
          'PRIVATE_CONTACT_DATA',
          'REDACTED_CONTACT_DATA',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports.',
        readOnly: true,
      }),
    transferFailureReason: z
      .enum([
        'TRANSFER_FAILURE_REASON_UNSPECIFIED',
        'TRANSFER_FAILURE_REASON_UNKNOWN',
        'EMAIL_CONFIRMATION_FAILURE',
        'DOMAIN_NOT_REGISTERED',
        'DOMAIN_HAS_TRANSFER_LOCK',
        'INVALID_AUTHORIZATION_CODE',
        'TRANSFER_CANCELLED',
        'TRANSFER_REJECTED',
        'INVALID_REGISTRANT_EMAIL_ADDRESS',
        'DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER',
        'TRANSFER_ALREADY_PENDING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.",
    required: [],
  })
  .openapi('Registration')

const ListRegistrationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.',
      }),
    registrations: z
      .array(RegistrationSchema)
      .exactOptional()
      .openapi({ description: 'A list of `Registration`s.' }),
  })
  .openapi({ description: 'Response for the `ListRegistrations` method.', required: [] })
  .openapi('ListRegistrationsResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version used to start the operation.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-defined resource path for the target of the operation.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({
    description: 'Represents the metadata of the long-running operation. Output only.',
    required: [],
  })
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const RegisterDomainRequestSchema = z
  .object({
    contactNotices: z
      .array(z.enum(['CONTACT_NOTICE_UNSPECIFIED', 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT']))
      .exactOptional()
      .openapi({
        description:
          'The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `registration.contact_settings`.',
      }),
    domainNotices: z
      .array(z.enum(['DOMAIN_NOTICE_UNSPECIFIED', 'HSTS_PRELOADED']))
      .exactOptional()
      .openapi({
        description:
          'The list of domain notices that you acknowledge. Call `RetrieveRegisterParameters` to see the notices that need acknowledgement.',
      }),
    registration: RegistrationSchema.exactOptional().openapi({
      description: 'Required. The complete `Registration` resource to be created.',
    }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation',
      }),
    yearlyPrice: MoneySchema.exactOptional().openapi({
      description:
        'Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from RetrieveRegisterParameters or SearchDomains calls.',
    }),
  })
  .openapi({ description: 'Request for the `RegisterDomain` method.', required: [] })
  .openapi('RegisterDomainRequest')

const RegisterParametersSchema = z
  .object({
    availability: z
      .enum(['AVAILABILITY_UNSPECIFIED', 'AVAILABLE', 'UNAVAILABLE', 'UNSUPPORTED', 'UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`.',
      }),
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain name. Unicode domain names are expressed in Punycode format.',
      }),
    domainNotices: z
      .array(z.enum(['DOMAIN_NOTICE_UNSPECIFIED', 'HSTS_PRELOADED']))
      .exactOptional()
      .openapi({ description: 'Notices about special properties of the domain.' }),
    supportedPrivacy: z
      .array(
        z.enum([
          'CONTACT_PRIVACY_UNSPECIFIED',
          'PUBLIC_CONTACT_DATA',
          'PRIVATE_CONTACT_DATA',
          'REDACTED_CONTACT_DATA',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Contact privacy options that the domain supports.' }),
    yearlyPrice: MoneySchema.exactOptional().openapi({
      description: 'Price to register or renew the domain for one year.',
    }),
  })
  .openapi({ description: 'Parameters required to register a new domain.', required: [] })
  .openapi('RegisterParameters')

const ResetAuthorizationCodeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `ResetAuthorizationCode` method.' })
  .openapi('ResetAuthorizationCodeRequest')

const RetrieveImportableDomainsResponseSchema = z
  .object({
    domains: z
      .array(DomainSchema)
      .exactOptional()
      .openapi({
        description: 'A list of domains that the calling user manages in Google Domains.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.',
      }),
  })
  .openapi({ description: 'Response for the `RetrieveImportableDomains` method.', required: [] })
  .openapi('RetrieveImportableDomainsResponse')

const RetrieveRegisterParametersResponseSchema = z
  .object({
    registerParameters: RegisterParametersSchema.exactOptional().openapi({
      description: 'Parameters to use when calling the `RegisterDomain` method.',
    }),
  })
  .openapi({ description: 'Response for the `RetrieveRegisterParameters` method.', required: [] })
  .openapi('RetrieveRegisterParametersResponse')

const TransferParametersSchema = z
  .object({
    currentRegistrar: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registrar that currently manages the domain.' }),
    currentRegistrarUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the registrar that currently manages the domain.' }),
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain name. Unicode domain names are expressed in Punycode format.',
      }),
    nameServers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The name servers that currently store the configuration of the domain.',
      }),
    supportedPrivacy: z
      .array(
        z.enum([
          'CONTACT_PRIVACY_UNSPECIFIED',
          'PUBLIC_CONTACT_DATA',
          'PRIVATE_CONTACT_DATA',
          'REDACTED_CONTACT_DATA',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Contact privacy options that the domain supports.' }),
    transferLockState: z
      .enum(['TRANSFER_LOCK_STATE_UNSPECIFIED', 'UNLOCKED', 'LOCKED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar.',
      }),
    yearlyPrice: MoneySchema.exactOptional().openapi({
      description: 'Price to transfer or renew the domain for one year.',
    }),
  })
  .openapi({
    description: 'Parameters required to transfer a domain from another registrar.',
    required: [],
  })
  .openapi('TransferParameters')

const RetrieveTransferParametersResponseSchema = z
  .object({
    transferParameters: TransferParametersSchema.exactOptional().openapi({
      description: 'Parameters to use when calling the `TransferDomain` method.',
    }),
  })
  .openapi({ description: 'Response for the `RetrieveTransferParameters` method.', required: [] })
  .openapi('RetrieveTransferParametersResponse')

const SearchDomainsResponseSchema = z
  .object({
    registerParameters: z
      .array(RegisterParametersSchema)
      .exactOptional()
      .openapi({ description: 'Results of the domain name search.' }),
  })
  .openapi({ description: 'Response for the `SearchDomains` method.', required: [] })
  .openapi('SearchDomainsResponse')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const TransferDomainRequestSchema = z
  .object({
    authorizationCode: AuthorizationCodeSchema.exactOptional().openapi({
      description:
        "The domain's transfer authorization code. You can obtain this from the domain's current registrar.",
    }),
    contactNotices: z
      .array(z.enum(['CONTACT_NOTICE_UNSPECIFIED', 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT']))
      .exactOptional()
      .openapi({
        description:
          'The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.',
      }),
    registration: RegistrationSchema.exactOptional().openapi({
      description:
        "Required. The complete `Registration` resource to be created. You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.",
    }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Validate the request without actually transferring the domain.' }),
    yearlyPrice: MoneySchema.exactOptional().openapi({
      description:
        'Required. Acknowledgement of the price to transfer or renew the domain for one year. Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.',
    }),
  })
  .openapi({ description: 'Request for the `TransferDomain` method.', required: [] })
  .openapi('TransferDomainRequest')

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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1LocationRegistrationsRetrieveImportableDomainsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{location}/registrations:retrieveImportableDomains',
  tags: ['projects'],
  description:
    'Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.',
  operationId: 'domains.projects.locations.registrations.retrieveImportableDomains',
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
            description: 'Maximum number of results to return.',
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
              'When set to the `next_page_token` from a prior response, provides the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RetrieveImportableDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1LocationRegistrationsRetrieveRegisterParametersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{location}/registrations:retrieveRegisterParameters',
  tags: ['projects'],
  description:
    'Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.',
  operationId: 'domains.projects.locations.registrations.retrieveRegisterParameters',
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
      domainName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The domain name. Unicode domain names must be expressed in Punycode format.',
            in: 'query',
            name: 'domainName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RetrieveRegisterParametersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1LocationRegistrationsRetrieveTransferParametersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{location}/registrations:retrieveTransferParameters',
  tags: ['projects'],
  description:
    'Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.',
  operationId: 'domains.projects.locations.registrations.retrieveTransferParameters',
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
      domainName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The domain name. Unicode domain names must be expressed in Punycode format.',
            in: 'query',
            name: 'domainName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RetrieveTransferParametersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1LocationRegistrationsSearchDomainsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{location}/registrations:searchDomains',
  tags: ['projects'],
  description:
    'Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.',
  operationId: 'domains.projects.locations.registrations.searchDomains',
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
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. String used to search for available domain names.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Gets the details of a `Registration` resource.',
  operationId: 'domains.projects.locations.registrations.get',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` to get, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegistrationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.",
  operationId: 'domains.projects.locations.registrations.delete',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` to delete, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`',
  operationId: 'domains.projects.locations.registrations.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'domains.projects.locations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
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
              'The maximum number of results to return. If not set, the service selects a default.',
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
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'domains.projects.locations.operations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameExportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:export',
  tags: ['projects'],
  description:
    "Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.",
  operationId: 'domains.projects.locations.registrations.export',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` to export, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportRegistrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentRegistrationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/registrations',
  tags: ['projects'],
  description: 'Lists the `Registration` resources in a project.',
  operationId: 'domains.projects.locations.registrations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter expression to restrict the `Registration`s returned. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, a boolean, or an enum value. The comparison operator should be one of =, !=, >, <, >=, <=, or : for prefix or wildcard matches. For example, to filter to a specific domain name, use an expression like `domainName="example.com"`. You can also check for the existence of a field; for example, to find domains using custom DNS settings, use an expression like `dnsSettings.customDns:*`. You can also create compound filters by combining expressions with the `AND` and `OR` operators. For example, to find domains that are suspended or have specific issues flagged, use an expression like `(state=SUSPENDED) OR (issue:*)`.',
            in: 'query',
            name: 'filter',
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
            description: 'Maximum number of results to return.',
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
              'When set to the `next_page_token` from a prior response, provides the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project and location from which to list `Registration`s, specified in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRegistrationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentRegistrationsImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/registrations:import',
  tags: ['projects'],
  description:
    'Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.',
  operationId: 'domains.projects.locations.registrations.import',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the Registration. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentRegistrationsRegisterRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/registrations:register',
  tags: ['projects'],
  description:
    'Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.',
  operationId: 'domains.projects.locations.registrations.register',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegisterDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentRegistrationsTransferRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/registrations:transfer',
  tags: ['projects'],
  description:
    "Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.",
  operationId: 'domains.projects.locations.registrations.transfer',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransferDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1RegistrationConfigureContactSettingsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{registration}:configureContactSettings',
  tags: ['projects'],
  description:
    "Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .",
  operationId: 'domains.projects.locations.registrations.configureContactSettings',
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
      registration: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'registration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigureContactSettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1RegistrationConfigureDnsSettingsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{registration}:configureDnsSettings',
  tags: ['projects'],
  description: "Updates a `Registration`'s DNS settings.",
  operationId: 'domains.projects.locations.registrations.configureDnsSettings',
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
      registration: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'registration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigureDnsSettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1RegistrationConfigureManagementSettingsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{registration}:configureManagementSettings',
  tags: ['projects'],
  description: "Updates a `Registration`'s management settings.",
  operationId: 'domains.projects.locations.registrations.configureManagementSettings',
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
      registration: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` whose management settings are being updated, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'registration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigureManagementSettingsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1RegistrationResetAuthorizationCodeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{registration}:resetAuthorizationCode',
  tags: ['projects'],
  description:
    'Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.',
  operationId: 'domains.projects.locations.registrations.resetAuthorizationCode',
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
      registration: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'registration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetAuthorizationCodeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuthorizationCodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1RegistrationRetrieveAuthorizationCodeRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{registration}:retrieveAuthorizationCode',
  tags: ['projects'],
  description:
    'Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.',
  operationId: 'domains.projects.locations.registrations.retrieveAuthorizationCode',
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
      registration: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/*/locations/*/registrations/*`.',
            in: 'path',
            name: 'registration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuthorizationCodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'domains.projects.locations.registrations.getIamPolicy',
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
      'options.requestedPolicyVersion': z
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
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'domains.projects.locations.registrations.setIamPolicy',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'domains.projects.locations.registrations.testIamPermissions',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
