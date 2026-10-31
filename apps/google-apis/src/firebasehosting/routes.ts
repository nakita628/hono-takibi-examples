import { createRoute, z } from '@hono/zod-openapi'

const CloudRunRewriteSchema = z
  .object({
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.',
      }),
    serviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. User-defined ID of the Cloud Run service.' }),
  })
  .openapi({
    description:
      'A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).',
    required: [],
  })
  .openapi('CloudRunRewrite')

type RewriteType = {
  dynamicLinks?: boolean
  function?: string
  functionRegion?: string
  glob?: string
  path?: string
  regex?: string
  run?: z.infer<typeof CloudRunRewriteSchema>
}

const ActingUserSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the user when the user performed the action.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A profile image URL for the user. May not be present if the user has changed their email address or deleted their account.',
      }),
  })
  .openapi({
    description:
      'Contains metadata about the user who performed an action, such as creating a release or finalizing a version.',
    required: [],
  })
  .openapi('ActingUser')

const CertDnsChallengeSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain name upon which the DNS challenge must be satisfied.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that must be present as a TXT record on the domain name to satisfy the challenge.',
      }),
  })
  .openapi({ description: 'Represents a DNS certificate challenge.', required: [] })
  .openapi('CertDnsChallenge')

const CertHttpChallengeSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL path on which to serve the specified token to satisfy the certificate challenge.',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to serve at the specified URL path to satisfy the certificate challenge.',
      }),
  })
  .openapi({ description: 'Represents an HTTP certificate challenge.', required: [] })
  .openapi('CertHttpChallenge')

const HeaderSchema = z
  .object({
    glob: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.',
      }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Required. The additional headers to add to the response.' }),
    regex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-supplied RE2 regular expression to match against the request URL path.',
      }),
  })
  .openapi({
    description:
      'A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.',
    required: [],
  })
  .openapi('Header')

const I18nConfigSchema = z
  .object({
    root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The user-supplied path where country and language specific content will be looked for within the public directory.',
      }),
  })
  .openapi({ description: 'If provided, i18n rewrites are enabled.', required: [] })
  .openapi('I18nConfig')

const RedirectSchema = z
  .object({
    glob: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture"',
      }),
    regex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-supplied RE2 regular expression to match against the request URL path.',
      }),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The status HTTP code to return in the response. It must be a valid 3xx status code.',
      }),
  })
  .openapi({
    description:
      'A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.',
    required: [],
  })
  .openapi('Redirect')

const RewriteSchema: z.ZodType<RewriteType> = z
  .lazy(() =>
    z
      .object({
        dynamicLinks: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'The request will be forwarded to Firebase Dynamic Links.' }),
        function: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The function to proxy requests to. Must match the exported function name exactly.',
          }),
        functionRegion: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1.',
          }),
        glob: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.',
          }),
        path: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL path to rewrite the request to.' }),
        regex: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The user-supplied RE2 regular expression to match against the request URL path.',
          }),
        run: CloudRunRewriteSchema.exactOptional().openapi({
          description: 'The request will be forwarded to Cloud Run.',
        }),
      })
      .openapi({
        description:
          'A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.',
        required: [],
      }),
  )
  .openapi('Rewrite')

const ServingConfigSchema = z
  .object({
    appAssociation: z
      .enum(['AUTO', 'NONE'])
      .exactOptional()
      .openapi({ description: 'How to handle well known App Association files.' }),
    cleanUrls: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines whether to drop the file extension from uploaded files.' }),
    headers: z
      .array(HeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.',
      }),
    i18n: I18nConfigSchema.exactOptional().openapi({
      description: 'Optional. Defines i18n rewrite behavior.',
    }),
    redirects: z
      .array(RedirectSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.',
      }),
    rewrites: z
      .array(RewriteSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.',
      }),
    trailingSlashBehavior: z
      .enum(['TRAILING_SLASH_BEHAVIOR_UNSPECIFIED', 'ADD', 'REMOVE'])
      .exactOptional()
      .openapi({ description: 'Defines how to handle a trailing slash in the URL path.' }),
  })
  .openapi({
    description:
      'The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).',
    required: [],
  })
  .openapi('ServingConfig')

const VersionSchema = z
  .object({
    config: ServingConfigSchema.exactOptional().openapi({
      description:
        'The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](https://firebase.google.com/docs/cli/#the_firebasejson_file) file.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time at which the version was created.' }),
    createUser: ActingUserSchema.exactOptional().openapi({
      description: 'Output only. Identifies the user who created the version.',
    }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time at which the version was `DELETED`.' }),
    deleteUser: ActingUserSchema.exactOptional().openapi({
      description: 'Output only. Identifies the user who `DELETED` the version.',
    }),
    fileCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.',
      }),
    finalizeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time at which the version was `FINALIZED`.' }),
    finalizeUser: ActingUserSchema.exactOptional().openapi({
      description: 'Output only. Identifies the user who `FINALIZED` the version.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The labels used for extra metadata and/or filtering.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).',
      }),
    status: z
      .enum([
        'VERSION_STATUS_UNSPECIFIED',
        'CREATED',
        'FINALIZED',
        'DELETED',
        'ABANDONED',
        'EXPIRED',
        'CLONING',
      ])
      .exactOptional()
      .openapi({
        description:
          'The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).',
      }),
    versionBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.',
      }),
  })
  .openapi({
    description:
      'A `Version` is a configuration and a collection of static files which determine how a site is displayed.',
    required: [],
  })
  .openapi('Version')

const ReleaseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deploy description when the release was created. The value can be up to 512 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create).',
      }),
    releaseTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time at which the version is set to be public.' }),
    releaseUser: ActingUserSchema.exactOptional().openapi({
      description: 'Output only. Identifies the user who created the release.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'DEPLOY', 'ROLLBACK', 'SITE_DISABLE'])
      .exactOptional()
      .openapi({
        description:
          'Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.',
      }),
    version: VersionSchema.exactOptional().openapi({
      description: 'Output only. The configuration and content that was released.',
    }),
  })
  .openapi({
    description:
      ' A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.',
    required: [],
  })
  .openapi('Release')

const ChannelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the channel was created.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field.",
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Text labels used for extra metadata and/or filtering.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID',
      }),
    release: ReleaseSchema.exactOptional().openapi({
      description: 'Output only. The current release for the channel, if any.',
      readOnly: true,
    }),
    retainedReleaseCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the channel was last updated.',
        readOnly: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The URL at which the content of this channel's current release can be viewed. This URL is a Firebase-provided subdomain of `web.app`. The content of this channel's current release can also be viewed at the Firebase-provided subdomain of `firebaseapp.com`. If this channel is the `live` channel for the Hosting site, then the content of this channel's current release can also be viewed at any connected custom domains.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.',
    required: [],
  })
  .openapi('Channel')

const PathFilterSchema = z
  .object({
    regexes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of RegEx values by which to filter.' }),
  })
  .openapi({ description: 'A representation of filter path.', required: [] })
  .openapi('PathFilter')

const CloneVersionRequestSchema = z
  .object({
    exclude: PathFilterSchema.exactOptional().openapi({
      description:
        'If provided, only paths that do not match any of the RegEx values in this list will be included in the new version.',
    }),
    finalize: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`.',
      }),
    include: PathFilterSchema.exactOptional().openapi({
      description:
        'If provided, only paths that match one or more RegEx values in this list will be included in the new version.',
    }),
    sourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID',
      }),
  })
  .openapi({ required: [] })
  .openapi('CloneVersionRequest')

const DomainRedirectSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The domain name to redirect to.' }),
    type: z
      .enum(['REDIRECT_TYPE_UNSPECIFIED', 'MOVED_PERMANENTLY'])
      .exactOptional()
      .openapi({ description: 'Required. The redirect status code.' }),
  })
  .openapi({
    description:
      'Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.',
    required: [],
  })
  .openapi('DomainRedirect')

const DomainProvisioningSchema = z
  .object({
    certChallengeDiscoveredTxt: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The TXT records (for the certificate challenge) that were found at the last DNS fetch.',
      }),
    certChallengeDns: CertDnsChallengeSchema.exactOptional().openapi({
      description: 'The DNS challenge for generating a certificate.',
    }),
    certChallengeHttp: CertHttpChallengeSchema.exactOptional().openapi({
      description: 'The HTTP challenge for generating a certificate.',
    }),
    certStatus: z
      .enum([
        'CERT_STATUS_UNSPECIFIED',
        'CERT_PENDING',
        'CERT_MISSING',
        'CERT_PROCESSING',
        'CERT_PROPAGATING',
        'CERT_ACTIVE',
        'CERT_ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          'The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.',
      }),
    discoveredIps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IPs found at the last DNS fetch.' }),
    dnsFetchTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the last DNS fetch occurred.' }),
    dnsStatus: z
      .enum([
        'DNS_STATUS_UNSPECIFIED',
        'DNS_PENDING',
        'DNS_MISSING',
        'DNS_PARTIAL_MATCH',
        'DNS_MATCH',
        'DNS_EXTRANEOUS_MATCH',
      ])
      .exactOptional()
      .openapi({ description: 'The DNS record match status as of the last DNS fetch.' }),
    expectedIps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of IPs to which the domain is expected to resolve.' }),
  })
  .openapi({
    description: 'The current certificate provisioning status information for a domain.',
    required: [],
  })
  .openapi('DomainProvisioning')

const DomainSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The domain name of the association.' }),
    domainRedirect: DomainRedirectSchema.exactOptional().openapi({
      description: 'If set, the domain should redirect with the provided parameters.',
    }),
    provisioning: DomainProvisioningSchema.exactOptional().openapi({
      description:
        'Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.',
    }),
    site: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The site name of the association.' }),
    status: z
      .enum([
        'DOMAIN_STATUS_UNSPECIFIED',
        'DOMAIN_CHANGE_PENDING',
        'DOMAIN_ACTIVE',
        'DOMAIN_VERIFICATION_REQUIRED',
        'DOMAIN_VERIFICATION_LOST',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Additional status of the domain association.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time at which the domain was last updated.' }),
  })
  .openapi({
    description: 'The intended behavior and status information of a domain.',
    required: [],
  })
  .openapi('Domain')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ListChannelsResponseSchema = z
  .object({
    channels: z
      .array(ChannelSchema)
      .exactOptional()
      .openapi({ description: 'The list of channels.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const ListDomainsResponseSchema = z
  .object({
    domains: z
      .array(DomainSchema)
      .exactOptional()
      .openapi({ description: 'The list of domains, if any exist.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token, if more results exist.' }),
  })
  .openapi({ description: 'The response to listing Domains.', required: [] })
  .openapi('ListDomainsResponse')

const ListReleasesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored.',
      }),
    releases: z
      .array(ReleaseSchema)
      .exactOptional()
      .openapi({
        description: 'The list of hashes of files that still need to be uploaded, if any exist.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListReleasesResponse')

const SiteSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.',
      }),
    defaultUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The default URL for the Hosting site.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. User-specified labels for the Hosting site.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).",
        readOnly: true,
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'DEFAULT_SITE', 'USER_SITE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A `Site` represents a Firebase Hosting site.', required: [] })
  .openapi('Site')

const ListSitesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored.',
      }),
    sites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({
        description: 'A list of Site objects associated with the specified Firebase project.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListSitesResponse')

const VersionFileSchema = z
  .object({
    hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA256 content hash of the file.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: "The URI at which the file's content should display." }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'EXPECTED', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.',
      }),
  })
  .openapi({ description: 'A static content file that is part of a version.', required: [] })
  .openapi('VersionFile')

const ListVersionFilesResponseSchema = z
  .object({
    files: z
      .array(VersionFileSchema)
      .exactOptional()
      .openapi({
        description: ' The list of paths to the hashes of the files in the specified version.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListVersionFilesResponse')

const ListVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored.',
      }),
    versions: z
      .array(VersionSchema)
      .exactOptional()
      .openapi({ description: 'The list of versions, if any exist.' }),
  })
  .openapi({ required: [] })
  .openapi('ListVersionsResponse')

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

const PopulateVersionFilesRequestSchema = z
  .object({
    files: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PopulateVersionFilesRequest')

const PopulateVersionFilesResponseSchema = z
  .object({
    uploadRequiredHashes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The content hashes of the specified files that need to be uploaded to the specified URL.',
      }),
    uploadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to which the files should be uploaded, in the format: "https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files" Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PopulateVersionFilesResponse')

const SiteConfigSchema = z
  .object({
    cloudLoggingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not web requests made by site visitors are logged via Cloud Logging.',
      }),
    maxVersions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default.',
      }),
  })
  .openapi({
    description:
      'A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior',
    required: [],
  })
  .openapi('SiteConfig')

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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
        'https://www.googleapis.com/auth/firebase.readonly':
          'View all your Firebase data and settings',
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
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
        'https://www.googleapis.com/auth/firebase.readonly':
          'View all your Firebase data and settings',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['sites'],
  description:
    'Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.',
  operationId: 'firebasehosting.sites.versions.get',
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
              'Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID',
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
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const putV1beta1NameRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{name}',
  tags: ['sites'],
  description:
    'Updates the specified domain mapping, creating the mapping as if it does not exist.',
  operationId: 'firebasehosting.sites.domains.update',
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
              "Required. The name of the domain association to update or create, if an association doesn't already exist.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['sites'],
  description: 'Deletes the specified version.',
  operationId: 'firebasehosting.sites.versions.delete',
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
              'Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['sites'],
  description:
    ' Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.',
  operationId: 'firebasehosting.sites.versions.patch',
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
              "A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.",
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
              'The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1beta1ParentChannelsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/channels',
  tags: ['sites'],
  description:
    'Lists the channels for the specified site. All sites have a default `live` channel.',
  operationId: 'firebasehosting.sites.channels.list',
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
            description:
              'The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.',
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
              'A token from a previous call to `ListChannels` that tells the server where to resume listing.',
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
              'Required. The site for which to list channels, in the format: sites/SITE_ID',
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
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1beta1ParentChannelsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/channels',
  tags: ['sites'],
  description: 'Creates a new channel in the specified site.',
  operationId: 'firebasehosting.sites.channels.create',
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
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Immutable. A unique ID within the site that identifies the channel.',
            in: 'query',
            name: 'channelId',
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
              'Required. The site in which to create this channel, in the format: sites/ SITE_ID',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1beta1ParentDomainsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/domains',
  tags: ['sites'],
  description: 'Lists the domains for the specified site.',
  operationId: 'firebasehosting.sites.domains.list',
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
            description: 'The page size to return. Defaults to 50.',
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
            description: 'The next_page_token from a previous request, if provided.',
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
              'Required. The parent for which to list domains, in the format: sites/ site-name',
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
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1beta1ParentDomainsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/domains',
  tags: ['sites'],
  description: 'Creates a domain mapping on the specified site.',
  operationId: 'firebasehosting.sites.domains.create',
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
              'Required. The parent to create the domain association for, in the format: sites/site-name',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1beta1ParentFilesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/files',
  tags: ['sites'],
  description: 'Lists the remaining files to be uploaded for the specified version.',
  operationId: 'firebasehosting.sites.versions.files.list',
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
            description:
              'The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.',
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
              'A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['STATUS_UNSPECIFIED', 'EXPECTED', 'ACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            description: ' The type of files that should be listed for the specified version.',
            in: 'query',
            name: 'status',
            schema: { enum: ['STATUS_UNSPECIFIED', 'EXPECTED', 'ACTIVE'], type: 'string' },
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
              'Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID',
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
      content: { 'application/json': { schema: ListVersionFilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const getV1beta1ParentReleasesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/releases',
  tags: ['sites'],
  description:
    'Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.',
  operationId: 'firebasehosting.sites.releases.list',
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
            description:
              'The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.',
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
              'A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.',
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
              'Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID ',
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
      content: { 'application/json': { schema: ListReleasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1beta1ParentReleasesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/releases',
  tags: ['sites'],
  description:
    'Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).',
  operationId: 'firebasehosting.sites.releases.create',
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
      versionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              ' The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.',
            in: 'query',
            name: 'versionName',
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
              'Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReleaseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReleaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1beta1ParentSitesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/sites',
  tags: ['projects'],
  description: 'Lists each Hosting Site associated with the specified parent Firebase project.',
  operationId: 'firebasehosting.projects.sites.list',
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
            description:
              'Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.',
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
              'Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.',
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
              'Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.',
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
      content: { 'application/json': { schema: ListSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1beta1ParentSitesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/sites',
  tags: ['projects'],
  description:
    'Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.',
  operationId: 'firebasehosting.projects.sites.create',
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
      siteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.',
            in: 'query',
            name: 'siteId',
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
              'Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SiteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1beta1ParentVersionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/versions',
  tags: ['sites'],
  description:
    'Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.',
  operationId: 'firebasehosting.sites.versions.list',
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
              "A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).",
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
              'The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.',
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
              'A token from a previous call to `ListVersions` that tells the server where to resume listing.',
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
              'Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID ',
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
      content: { 'application/json': { schema: ListVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1beta1ParentVersionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/versions',
  tags: ['sites'],
  description: 'Creates a new version for the specified site.',
  operationId: 'firebasehosting.sites.versions.create',
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
      sizeBytes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.',
            in: 'query',
            name: 'sizeBytes',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique id for the new version. This is was only specified for legacy version creations, and should be blank.',
            in: 'query',
            name: 'versionId',
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
              'Required. The site in which to create the version, in the format: sites/ SITE_ID',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1beta1ParentVersionsCloneRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/versions:clone',
  tags: ['sites'],
  description:
    'Creates a new version on the specified target site using the content of the specified version.',
  operationId: 'firebasehosting.sites.versions.clone',
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
              'Required. The target site for the cloned version, in the format: sites/ SITE_ID',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloneVersionRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1beta1ParentPopulateFilesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}:populateFiles',
  tags: ['sites'],
  description: ' Adds content files to the specified version. Each file must be under 2 GB.',
  operationId: 'firebasehosting.sites.versions.populateFiles',
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
              'Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PopulateVersionFilesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PopulateVersionFilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})
