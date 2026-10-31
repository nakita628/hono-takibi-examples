import { createRoute, z } from '@hono/zod-openapi'

const JwtSchema = z
  .object({
    compactJwt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1',
      }),
  })
  .openapi({ required: [] })
  .openapi('Jwt')

const SignatureSchema = z
  .object({
    publicKeyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.',
      }),
  })
  .openapi({
    description:
      'Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).',
    required: [],
  })
  .openapi('Signature')

const AttestationOccurrenceSchema = z
  .object({
    jwts: z
      .array(JwtSchema)
      .exactOptional()
      .openapi({
        description:
          'One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.',
      }),
    serializedPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The serialized payload that is verified by one or more `signatures`.',
      }),
    signatures: z
      .array(SignatureSchema)
      .exactOptional()
      .openapi({
        description:
          'One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.',
      }),
  })
  .openapi({
    description:
      'Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.',
    required: [],
  })
  .openapi('AttestationOccurrence')

const BuilderConfigSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BuilderConfig')

const CompletenessSchema = z
  .object({
    arguments: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.',
      }),
    environment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that recipe.environment is claimed to be complete.',
      }),
    materials: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".',
      }),
  })
  .openapi({
    description: 'Indicates that the builder claims certain fields in this message to be complete.',
    required: [],
  })
  .openapi('Completeness')

const MetadataSchema = z
  .object({
    buildFinishedOn: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of when the build completed.' }),
    buildInvocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.',
      }),
    buildStartedOn: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of when the build started.' }),
    completeness: CompletenessSchema.exactOptional().openapi({
      description:
        'Indicates that the builder claims certain fields in this message to be complete.',
    }),
    reproducible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.',
      }),
  })
  .openapi({ description: 'Other properties of the build.', required: [] })
  .openapi('Metadata')

const RecipeSchema = z
  .object({
    arguments: z
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
          'Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".',
      }),
    definedInMaterial: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn\'t come from a material, as zero is default unset value for int64.',
      }),
    entryPoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.',
      }),
    environment: z
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
          'Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.',
      }),
  })
  .openapi({
    description:
      'Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.',
    required: [],
  })
  .openapi('Recipe')

const InTotoProvenanceSchema = z
  .object({
    builderConfig: BuilderConfigSchema.exactOptional().openapi({ description: 'required' }),
    materials: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.',
      }),
    metadata: MetadataSchema.exactOptional(),
    recipe: RecipeSchema.exactOptional().openapi({
      description:
        'Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required',
    }),
  })
  .openapi({ required: [] })
  .openapi('InTotoProvenance')

const SlsaBuilderSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SlsaBuilder')

const MaterialSchema = z
  .object({
    digest: z.record(z.string(), z.string()).exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Material')

const SlsaCompletenessSchema = z
  .object({
    arguments: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.',
      }),
    environment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that recipe.environment is claimed to be complete.',
      }),
    materials: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".',
      }),
  })
  .openapi({
    description: 'Indicates that the builder claims certain fields in this message to be complete.',
    required: [],
  })
  .openapi('SlsaCompleteness')

const SlsaMetadataSchema = z
  .object({
    buildFinishedOn: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of when the build completed.' }),
    buildInvocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.',
      }),
    buildStartedOn: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of when the build started.' }),
    completeness: SlsaCompletenessSchema.exactOptional().openapi({
      description:
        'Indicates that the builder claims certain fields in this message to be complete.',
    }),
    reproducible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.',
      }),
  })
  .openapi({ description: 'Other properties of the build.', required: [] })
  .openapi('SlsaMetadata')

const SlsaRecipeSchema = z
  .object({
    arguments: z
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
          'Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different.',
      }),
    definedInMaterial: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn\'t come from a material, as zero is default unset value for int64.',
      }),
    entryPoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.',
      }),
    environment: z
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
          'Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.',
      }),
  })
  .openapi({
    description:
      'Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.',
    required: [],
  })
  .openapi('SlsaRecipe')

const SlsaProvenanceSchema = z
  .object({
    builder: SlsaBuilderSchema.exactOptional().openapi({ description: 'required' }),
    materials: z
      .array(MaterialSchema)
      .exactOptional()
      .openapi({
        description:
          'The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.',
      }),
    metadata: SlsaMetadataSchema.exactOptional(),
    recipe: SlsaRecipeSchema.exactOptional().openapi({
      description:
        'Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required',
    }),
  })
  .openapi({ required: [] })
  .openapi('SlsaProvenance')

const GrafeasV1SlsaProvenanceZeroTwoSlsaBuilderSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({
    description:
      'Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.',
    required: [],
  })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder')

const GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSourceSchema = z
  .object({
    digest: z.record(z.string(), z.string()).exactOptional(),
    entryPoint: z.string().exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.',
    required: [],
  })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource')

const GrafeasV1SlsaProvenanceZeroTwoSlsaInvocationSchema = z
  .object({
    configSource: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSourceSchema.exactOptional(),
    environment: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional(),
    parameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional(),
  })
  .openapi({ description: 'Identifies the event that kicked off the build.', required: [] })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation')

const GrafeasV1SlsaProvenanceZeroTwoSlsaMaterialSchema = z
  .object({
    digest: z.record(z.string(), z.string()).exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.',
    required: [],
  })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial')

const GrafeasV1SlsaProvenanceZeroTwoSlsaCompletenessSchema = z
  .object({
    environment: z.boolean().exactOptional(),
    materials: z.boolean().exactOptional(),
    parameters: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Indicates that the builder claims certain fields in this message to be complete.',
    required: [],
  })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness')

const GrafeasV1SlsaProvenanceZeroTwoSlsaMetadataSchema = z
  .object({
    buildFinishedOn: z.string().exactOptional(),
    buildInvocationId: z.string().exactOptional(),
    buildStartedOn: z.string().exactOptional(),
    completeness: GrafeasV1SlsaProvenanceZeroTwoSlsaCompletenessSchema.exactOptional(),
    reproducible: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Other properties of the build.', required: [] })
  .openapi('GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata')

const SlsaProvenanceZeroTwoSchema = z
  .object({
    buildConfig: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional(),
    buildType: z.string().exactOptional(),
    builder: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilderSchema.exactOptional(),
    invocation: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocationSchema.exactOptional(),
    materials: z.array(GrafeasV1SlsaProvenanceZeroTwoSlsaMaterialSchema).exactOptional(),
    metadata: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'See full explanation of fields at slsa.dev/provenance/v0.2.',
    required: [],
  })
  .openapi('SlsaProvenanceZeroTwo')

const SubjectSchema = z
  .object({
    digest: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          '`"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet',
      }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subject')

const InTotoStatementSchema = z
  .object({
    _type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Always `https://in-toto.io/Statement/v0.1`.' }),
    predicateType: z
      .string()
      .exactOptional()
      .openapi({ description: '`https://slsa.dev/provenance/v0.1` for SlsaProvenance.' }),
    provenance: InTotoProvenanceSchema.exactOptional(),
    slsaProvenance: SlsaProvenanceSchema.exactOptional(),
    slsaProvenanceZeroTwo: SlsaProvenanceZeroTwoSchema.exactOptional(),
    subject: z.array(SubjectSchema).exactOptional(),
  })
  .openapi({
    description:
      'Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".',
    required: [],
  })
  .openapi('InTotoStatement')

const ArtifactSchema = z
  .object({
    checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.',
      }),
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.',
      }),
  })
  .openapi({ description: 'Artifact describes a build product.', required: [] })
  .openapi('Artifact')

const CommandSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Command-line arguments used when executing this command.' }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Working directory (relative to project source root) used when running this command.',
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Environment variables set before running this command.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional unique identifier for this command, used in wait_for to reference this command as a dependency.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.',
      }),
    waitFor: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The ID(s) of the command(s) that this command depends on.' }),
  })
  .openapi({
    description: 'Command describes a step performed as part of the build pipeline.',
    required: [],
  })
  .openapi('Command')

const SourceContextSchema: z.ZodType<SourceContextType> = z
  .lazy(() =>
    z
      .object({
        cloudRepo: CloudRepoSourceContextSchema.exactOptional().openapi({
          description: 'A SourceContext referring to a revision in a Google Cloud Source Repo.',
        }),
        gerrit: GerritSourceContextSchema.exactOptional().openapi({
          description: 'A SourceContext referring to a Gerrit project.',
        }),
        git: GitSourceContextSchema.exactOptional().openapi({
          description: 'A SourceContext referring to any third party Git repo (e.g., GitHub).',
        }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Labels with user defined metadata.' }),
      })
      .openapi({
        description:
          'A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.',
        required: [],
      }),
  )
  .openapi('SourceContext')

const HashSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The type of hash that was performed, e.g. "SHA-256".' }),
    value: z.string().exactOptional().openapi({ description: 'Required. The hash value.' }),
  })
  .openapi({ description: 'Container message for hash values.', required: [] })
  .openapi('Hash')

const FileHashesSchema = z
  .object({
    fileHash: z
      .array(HashSchema)
      .exactOptional()
      .openapi({ description: 'Required. Collection of file hashes.' }),
  })
  .openapi({
    description:
      'Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.',
    required: [],
  })
  .openapi('FileHashes')

const SourceSchema = z
  .object({
    additionalContexts: z
      .array(SourceContextSchema)
      .exactOptional()
      .openapi({
        description:
          'If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.',
      }),
    artifactStorageSourceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, the input binary artifacts for the build came from this location.',
      }),
    context: SourceContextSchema.exactOptional().openapi({
      description: 'If provided, the source code used for the build came from this location.',
    }),
    fileHashes: z
      .record(z.string(), FileHashesSchema)
      .exactOptional()
      .openapi({
        description:
          'Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.',
      }),
  })
  .openapi({
    description: 'Source describes the location of the source used for the build.',
    required: [],
  })
  .openapi('Source')

const BuildProvenanceSchema = z
  .object({
    buildOptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.',
      }),
    builderVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Version string of the builder at the time this build was executed.',
      }),
    builtArtifacts: z
      .array(ArtifactSchema)
      .exactOptional()
      .openapi({ description: 'Output of the build.' }),
    commands: z
      .array(CommandSchema)
      .exactOptional()
      .openapi({ description: 'Commands requested by the build.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which the build was created.' }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.",
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which execution of the build was finished.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Unique identifier of the build.' }),
    logsUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI where any logs for this provenance were written.' }),
    projectId: z.string().exactOptional().openapi({ description: 'ID of the project.' }),
    sourceProvenance: SourceSchema.exactOptional().openapi({
      description: 'Details of the Source input to the build.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which execution of the build was started.' }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Trigger identifier if the build was triggered automatically; empty if not.',
      }),
  })
  .openapi({
    description:
      'Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.',
    required: [],
  })
  .openapi('BuildProvenance')

const BuildOccurrenceSchema = z
  .object({
    intotoProvenance: InTotoProvenanceSchema.exactOptional().openapi({
      description:
        'Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec.',
    }),
    intotoStatement: InTotoStatementSchema.exactOptional().openapi({
      description:
        "In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope.",
    }),
    provenance: BuildProvenanceSchema.exactOptional().openapi({
      description: 'The actual provenance for the build.',
    }),
    provenanceBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.',
      }),
  })
  .openapi({ description: 'Details of a build occurrence.', required: [] })
  .openapi('BuildOccurrence')

const NonCompliantFileSchema = z
  .object({
    displayCommand: z
      .string()
      .exactOptional()
      .openapi({ description: 'Command to display the non-compliant files.' }),
    path: z.string().exactOptional().openapi({ description: 'Empty if `display_command` is set.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explains why a file is non compliant for a CIS check.' }),
  })
  .openapi({
    description:
      "Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.",
    required: [],
  })
  .openapi('NonCompliantFile')

const ComplianceOccurrenceSchema = z
  .object({
    nonComplianceReason: z.string().exactOptional(),
    nonCompliantFiles: z.array(NonCompliantFileSchema).exactOptional(),
  })
  .openapi({
    description:
      'An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.',
    required: [],
  })
  .openapi('ComplianceOccurrence')

const DeploymentOccurrenceSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address of the runtime element hosting this deployment.' }),
    config: z
      .string()
      .exactOptional()
      .openapi({ description: 'Configuration used to create this deployment.' }),
    deployTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Beginning of the lifetime of this deployment.' }),
    platform: z
      .enum(['PLATFORM_UNSPECIFIED', 'GKE', 'FLEX', 'CUSTOM'])
      .exactOptional()
      .openapi({ description: 'Platform hosting this deployment.' }),
    resourceUri: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.',
      }),
    undeployTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'End of the lifetime of this deployment.' }),
    userEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identity of the user that triggered this deployment.' }),
  })
  .openapi({
    description: 'The period during which some deployable was active in a runtime.',
    required: [],
  })
  .openapi('DeploymentOccurrence')

const AnalysisCompletedSchema = z
  .object({ analysisType: z.array(z.string()).exactOptional() })
  .openapi({
    description:
      'Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.',
    required: [],
  })
  .openapi('AnalysisCompleted')

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

const DiscoveryOccurrenceSchema = z
  .object({
    analysisCompleted: AnalysisCompletedSchema.exactOptional(),
    analysisError: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.',
      }),
    analysisStatus: z
      .enum([
        'ANALYSIS_STATUS_UNSPECIFIED',
        'PENDING',
        'SCANNING',
        'FINISHED_SUCCESS',
        'COMPLETE',
        'FINISHED_FAILED',
        'FINISHED_UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({ description: 'The status of discovery for the resource.' }),
    analysisStatusError: StatusSchema.exactOptional().openapi({
      description:
        'When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.',
    }),
    archiveTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time occurrences related to this discovery occurrence were archived.',
        readOnly: true,
      }),
    continuousAnalysis: z
      .enum(['CONTINUOUS_ANALYSIS_UNSPECIFIED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'Whether the resource is continuously analyzed.' }),
    cpe: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CPE of the resource being scanned.' }),
    lastScanTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time this resource was scanned.' }),
  })
  .openapi({
    description: 'Provides information about the analysis status of a discovered resource.',
    required: [],
  })
  .openapi('DiscoveryOccurrence')

const EnvelopeSignatureSchema = z
  .object({ keyid: z.string().exactOptional(), sig: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnvelopeSignature')

const EnvelopeSchema = z
  .object({
    payload: z.string().exactOptional(),
    payloadType: z.string().exactOptional(),
    signatures: z.array(EnvelopeSignatureSchema).exactOptional(),
  })
  .openapi({
    description:
      'MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.',
    required: [],
  })
  .openapi('Envelope')

const DSSEAttestationOccurrenceSchema = z
  .object({
    envelope: EnvelopeSchema.exactOptional().openapi({
      description:
        'If doing something security critical, make sure to verify the signatures in this metadata.',
    }),
    statement: InTotoStatementSchema.exactOptional(),
  })
  .openapi({
    description:
      'Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.',
    required: [],
  })
  .openapi('DSSEAttestationOccurrence')

const FingerprintSchema = z
  .object({
    v1Name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The layer ID of the final layer in the Docker image's v1 representation.",
      }),
    v2Blob: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. The ordered list of v2 blobs that represent a given image.',
      }),
    v2Name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the image\'s v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.',
      }),
  })
  .openapi({
    description: 'A set of properties that uniquely identify a given Docker image.',
    required: [],
  })
  .openapi('Fingerprint')

const LayerSchema = z
  .object({
    arguments: z
      .string()
      .exactOptional()
      .openapi({ description: 'The recovered arguments to the Dockerfile directive.' }),
    directive: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.',
      }),
  })
  .openapi({
    description: 'Layer holds metadata specific to a layer of a Docker image.',
    required: [],
  })
  .openapi('Layer')

const ImageOccurrenceSchema = z
  .object({
    baseResourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This contains the base image URL for the derived image occurrence.',
      }),
    distance: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of layers by which this image differs from the associated image basis.',
      }),
    fingerprint: FingerprintSchema.exactOptional().openapi({
      description: 'Required. The fingerprint of the derived image.',
    }),
    layerInfo: z
      .array(LayerSchema)
      .exactOptional()
      .openapi({
        description:
          'This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.',
      }),
  })
  .openapi({
    description:
      'Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .',
    required: [],
  })
  .openapi('ImageOccurrence')

const LicenseSchema = z
  .object({
    comments: z.string().exactOptional().openapi({ description: 'Comments' }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2".',
      }),
  })
  .openapi({ description: 'License information.', required: [] })
  .openapi('License')

const VersionSchema = z
  .object({
    epoch: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Used to correct mistakes in the version numbering scheme.' }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human readable version string. This string is of the form :- and is only set when kind is NORMAL.',
      }),
    inclusive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.',
      }),
    kind: z
      .enum(['VERSION_KIND_UNSPECIFIED', 'NORMAL', 'MINIMUM', 'MAXIMUM'])
      .exactOptional()
      .openapi({
        description:
          'Required. Distinguishes between sentinel MIN/MAX versions and normal versions.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required only when version kind is NORMAL. The main part of the version name.',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The iteration of the package build from the above version.' }),
  })
  .openapi({
    description: 'Version contains structured information about the version of a package.',
    required: [],
  })
  .openapi('Version')

const LocationSchema = z
  .object({
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/)',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The path from which we gathered that this package/version is installed.',
      }),
    version: VersionSchema.exactOptional().openapi({
      description: 'Deprecated. The version installed at this location.',
    }),
  })
  .openapi({
    description:
      "An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.",
    required: [],
  })
  .openapi('Location')

const PackageOccurrenceSchema = z
  .object({
    architecture: z
      .enum(['ARCHITECTURE_UNSPECIFIED', 'X86', 'X64'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.',
        readOnly: true,
      }),
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.',
        readOnly: true,
      }),
    license: LicenseSchema.exactOptional().openapi({
      description: 'Licenses that have been declared by the authors of the package.',
    }),
    location: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description:
          'All of the places within the filesystem versions of this package have been found.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Output only. The name of the installed package.',
        readOnly: true,
      }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).',
        readOnly: true,
      }),
    version: VersionSchema.exactOptional().openapi({
      description: 'Output only. The version of the package.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'Details on how a particular software package was installed on a system.',
    required: [],
  })
  .openapi('PackageOccurrence')

const UpgradeDistributionSchema = z
  .object({
    classification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)',
      }),
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.',
      }),
    cve: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The cve tied to this Upgrade.' }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The severity as specified by the upstream operating system.' }),
  })
  .openapi({
    description:
      'The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.',
    required: [],
  })
  .openapi('UpgradeDistribution')

const CategorySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the category.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized name of the category.' }),
  })
  .openapi({ description: 'The category to which the update belongs.', required: [] })
  .openapi('Category')

const IdentitySchema = z
  .object({
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The revision number of the update.' }),
    updateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revision independent identifier of the update.' }),
  })
  .openapi({ description: 'The unique identifier of the update.', required: [] })
  .openapi('Identity')

const WindowsUpdateSchema = z
  .object({
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({ description: 'The list of categories to which the update belongs.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized description of the update.' }),
    identity: IdentitySchema.exactOptional().openapi({
      description: 'Required - The unique identifier for the update.',
    }),
    kbArticleIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Microsoft Knowledge Base article IDs that are associated with the update.',
      }),
    lastPublishedTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last published timestamp of the update.' }),
    supportUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hyperlink to the support information for the update.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized title of the update.' }),
  })
  .openapi({
    description:
      'Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.',
    required: [],
  })
  .openapi('WindowsUpdate')

const UpgradeOccurrenceSchema = z
  .object({
    distribution: UpgradeDistributionSchema.exactOptional().openapi({
      description:
        'Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence.',
    }),
    package: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for non-Windows OS. The package this Upgrade is for.' }),
    parsedVersion: VersionSchema.exactOptional().openapi({
      description:
        'Required for non-Windows OS. The version of the package in a machine + human readable form.',
    }),
    windowsUpdate: WindowsUpdateSchema.exactOptional().openapi({
      description: 'Required for Windows OS. Represents the metadata about the Windows update.',
    }),
  })
  .openapi({
    description:
      'An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.',
    required: [],
  })
  .openapi('UpgradeOccurrence')

const CVSSSchema = z
  .object({
    attackComplexity: z
      .enum([
        'ATTACK_COMPLEXITY_UNSPECIFIED',
        'ATTACK_COMPLEXITY_LOW',
        'ATTACK_COMPLEXITY_HIGH',
        'ATTACK_COMPLEXITY_MEDIUM',
      ])
      .exactOptional(),
    attackVector: z
      .enum([
        'ATTACK_VECTOR_UNSPECIFIED',
        'ATTACK_VECTOR_NETWORK',
        'ATTACK_VECTOR_ADJACENT',
        'ATTACK_VECTOR_LOCAL',
        'ATTACK_VECTOR_PHYSICAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.',
      }),
    authentication: z
      .enum([
        'AUTHENTICATION_UNSPECIFIED',
        'AUTHENTICATION_MULTIPLE',
        'AUTHENTICATION_SINGLE',
        'AUTHENTICATION_NONE',
      ])
      .exactOptional(),
    availabilityImpact: z
      .enum([
        'IMPACT_UNSPECIFIED',
        'IMPACT_HIGH',
        'IMPACT_LOW',
        'IMPACT_NONE',
        'IMPACT_PARTIAL',
        'IMPACT_COMPLETE',
      ])
      .exactOptional(),
    baseScore: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The base score is a function of the base metric scores.' }),
    confidentialityImpact: z
      .enum([
        'IMPACT_UNSPECIFIED',
        'IMPACT_HIGH',
        'IMPACT_LOW',
        'IMPACT_NONE',
        'IMPACT_PARTIAL',
        'IMPACT_COMPLETE',
      ])
      .exactOptional(),
    exploitabilityScore: z.float32().exactOptional(),
    impactScore: z.float32().exactOptional(),
    integrityImpact: z
      .enum([
        'IMPACT_UNSPECIFIED',
        'IMPACT_HIGH',
        'IMPACT_LOW',
        'IMPACT_NONE',
        'IMPACT_PARTIAL',
        'IMPACT_COMPLETE',
      ])
      .exactOptional(),
    privilegesRequired: z
      .enum([
        'PRIVILEGES_REQUIRED_UNSPECIFIED',
        'PRIVILEGES_REQUIRED_NONE',
        'PRIVILEGES_REQUIRED_LOW',
        'PRIVILEGES_REQUIRED_HIGH',
      ])
      .exactOptional(),
    scope: z.enum(['SCOPE_UNSPECIFIED', 'SCOPE_UNCHANGED', 'SCOPE_CHANGED']).exactOptional(),
    userInteraction: z
      .enum(['USER_INTERACTION_UNSPECIFIED', 'USER_INTERACTION_NONE', 'USER_INTERACTION_REQUIRED'])
      .exactOptional(),
  })
  .openapi({
    description:
      'Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.',
    required: [],
  })
  .openapi('CVSS')

const GrafeasV1FileLocationSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.',
      }),
  })
  .openapi({ description: 'Indicates the location at which a package was found.', required: [] })
  .openapi('GrafeasV1FileLocation')

const PackageIssueSchema = z
  .object({
    affectedCpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.',
      }),
    affectedPackage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The package this vulnerability was found in.' }),
    affectedVersion: VersionSchema.exactOptional().openapi({
      description:
        'Required. The version of the package that is installed on the resource affected by this vulnerability.',
    }),
    effectiveSeverity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.',
        readOnly: true,
      }),
    fileLocation: z
      .array(GrafeasV1FileLocationSchema)
      .exactOptional()
      .openapi({ description: 'The location at which this package was found.' }),
    fixAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether a fix is available for this package.' }),
    fixedCpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.',
      }),
    fixedPackage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.',
      }),
    fixedVersion: VersionSchema.exactOptional().openapi({
      description:
        'Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.',
    }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of package (e.g. OS, MAVEN, GO).' }),
  })
  .openapi({
    description:
      'A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).',
    required: [],
  })
  .openapi('PackageIssue')

const RelatedUrlSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label to describe usage of the URL.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specific URL associated with the resource.' }),
  })
  .openapi({ description: 'Metadata for any related URL information.', required: [] })
  .openapi('RelatedUrl')

const JustificationSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional details on why this justification was chosen.' }),
    justificationType: z
      .enum([
        'JUSTIFICATION_TYPE_UNSPECIFIED',
        'COMPONENT_NOT_PRESENT',
        'VULNERABLE_CODE_NOT_PRESENT',
        'VULNERABLE_CODE_NOT_IN_EXECUTE_PATH',
        'VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY',
        'INLINE_MITIGATIONS_ALREADY_EXIST',
      ])
      .exactOptional()
      .openapi({ description: 'The justification type for this vulnerability.' }),
  })
  .openapi({
    description:
      'Justification provides the justification when the state of the assessment if NOT_AFFECTED.',
    required: [],
  })
  .openapi('Justification')

const RemediationSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Contains a comprehensive human-readable discussion of the remediation.',
      }),
    remediationType: z
      .enum([
        'REMEDIATION_TYPE_UNSPECIFIED',
        'MITIGATION',
        'NO_FIX_PLANNED',
        'NONE_AVAILABLE',
        'VENDOR_FIX',
        'WORKAROUND',
      ])
      .exactOptional()
      .openapi({ description: 'The type of remediation that can be applied.' }),
    remediationUri: RelatedUrlSchema.exactOptional().openapi({
      description: 'Contains the URL where to obtain the remediation.',
    }),
  })
  .openapi({
    description: 'Specifies details on how to handle (and presumably, fix) a vulnerability.',
    required: [],
  })
  .openapi('Remediation')

const VexAssessmentSchema = z
  .object({
    cve: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability.',
      }),
    impacts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains information about the impact of this vulnerability, this will change with time.',
      }),
    justification: JustificationSchema.exactOptional().openapi({
      description:
        'Justification provides the justification when the state of the assessment if NOT_AFFECTED.',
    }),
    noteName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`.',
      }),
    relatedUris: z
      .array(RelatedUrlSchema)
      .exactOptional()
      .openapi({
        description:
          'Holds a list of references associated with this vulnerability item and assessment.',
      }),
    remediations: z
      .array(RemediationSchema)
      .exactOptional()
      .openapi({
        description: 'Specifies details on how to handle (and presumably, fix) a vulnerability.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'AFFECTED', 'NOT_AFFECTED', 'FIXED', 'UNDER_INVESTIGATION'])
      .exactOptional()
      .openapi({ description: 'Provides the state of this Vulnerability assessment.' }),
  })
  .openapi({
    description:
      'VexAssessment provides all publisher provided Vex information that is related to this vulnerability.',
    required: [],
  })
  .openapi('VexAssessment')

const VulnerabilityOccurrenceSchema = z
  .object({
    cvssScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.',
      }),
    cvssV2: CVSSSchema.exactOptional().openapi({
      description: 'The cvss v2 score for the vulnerability.',
    }),
    cvssVersion: z
      .enum(['CVSS_VERSION_UNSPECIFIED', 'CVSS_VERSION_2', 'CVSS_VERSION_3'])
      .exactOptional()
      .openapi({
        description: 'Output only. CVSS version used to populate cvss_score and severity.',
      }),
    cvssv3: CVSSSchema.exactOptional().openapi({
      description: 'The cvss v3 score for the vulnerability.',
    }),
    effectiveSeverity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description:
          'The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues.',
      }),
    fixAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether at least one of the affected packages has a fix available.',
      }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A detailed description of this vulnerability.' }),
    packageIssue: z
      .array(PackageIssueSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The set of affected locations and their fixes (if available) within the associated resource.',
      }),
    relatedUrls: z
      .array(RelatedUrlSchema)
      .exactOptional()
      .openapi({ description: 'Output only. URLs related to this vulnerability.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description: 'Output only. The note provider assigned severity of this vulnerability.',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A one sentence description of this vulnerability.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).',
      }),
    vexAssessment: VexAssessmentSchema.exactOptional(),
  })
  .openapi({
    description: 'An occurrence of a severity vulnerability on a resource.',
    required: [],
  })
  .openapi('VulnerabilityOccurrence')

type OccurrenceType = {
  attestation?: z.infer<typeof AttestationOccurrenceSchema>
  build?: z.infer<typeof BuildOccurrenceSchema>
  compliance?: z.infer<typeof ComplianceOccurrenceSchema>
  createTime?: string
  deployment?: z.infer<typeof DeploymentOccurrenceSchema>
  discovery?: z.infer<typeof DiscoveryOccurrenceSchema>
  dsseAttestation?: z.infer<typeof DSSEAttestationOccurrenceSchema>
  envelope?: z.infer<typeof EnvelopeSchema>
  image?: z.infer<typeof ImageOccurrenceSchema>
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'UPGRADE'
    | 'COMPLIANCE'
    | 'DSSE_ATTESTATION'
    | 'VULNERABILITY_ASSESSMENT'
  name?: string
  noteName?: string
  package?: z.infer<typeof PackageOccurrenceSchema>
  remediation?: string
  resourceUri?: string
  updateTime?: string
  upgrade?: z.infer<typeof UpgradeOccurrenceSchema>
  vulnerability?: z.infer<typeof VulnerabilityOccurrenceSchema>
}

const ProjectRepoIdSchema = z
  .object({
    projectId: z.string().exactOptional().openapi({ description: 'The ID of the project.' }),
    repoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the repo. Leave empty for the default repo.' }),
  })
  .openapi({
    description:
      'Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.',
    required: [],
  })
  .openapi('ProjectRepoId')

type RepoIdType = { projectRepoId?: z.infer<typeof ProjectRepoIdSchema>; uid?: string }

const AliasContextSchema = z
  .object({
    kind: z
      .enum(['KIND_UNSPECIFIED', 'FIXED', 'MOVABLE', 'OTHER'])
      .exactOptional()
      .openapi({ description: 'The alias kind.' }),
    name: z.string().exactOptional().openapi({ description: 'The alias name.' }),
  })
  .openapi({ description: 'An alias to a repo revision.', required: [] })
  .openapi('AliasContext')

const RepoIdSchema: z.ZodType<RepoIdType> = z
  .lazy(() =>
    z
      .object({
        projectRepoId: ProjectRepoIdSchema.exactOptional().openapi({
          description: 'A combination of a project ID and a repo name.',
        }),
        uid: z
          .string()
          .exactOptional()
          .openapi({ description: 'A server-assigned, globally unique identifier.' }),
      })
      .openapi({ description: 'A unique identifier for a Cloud Repo.', required: [] }),
  )
  .openapi('RepoId')

const CloudRepoSourceContextSchema = z
  .object({
    aliasContext: AliasContextSchema.exactOptional().openapi({
      description: 'An alias, which may be a branch or tag.',
    }),
    repoId: RepoIdSchema.exactOptional().openapi({ description: 'The ID of the repo.' }),
    revisionId: z.string().exactOptional().openapi({ description: 'A revision ID.' }),
  })
  .openapi({
    description:
      'A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.',
    required: [],
  })
  .openapi('CloudRepoSourceContext')

const GerritSourceContextSchema = z
  .object({
    aliasContext: AliasContextSchema.exactOptional().openapi({
      description: 'An alias, which may be a branch or tag.',
    }),
    gerritProject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.',
      }),
    hostUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of a running Gerrit instance.' }),
    revisionId: z.string().exactOptional().openapi({ description: 'A revision (commit) ID.' }),
  })
  .openapi({ description: 'A SourceContext referring to a Gerrit project.', required: [] })
  .openapi('GerritSourceContext')

const GitSourceContextSchema = z
  .object({
    revisionId: z.string().exactOptional().openapi({ description: 'Git commit hash.' }),
    url: z.string().exactOptional().openapi({ description: 'Git repository URL.' }),
  })
  .openapi({
    description:
      'A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).',
    required: [],
  })
  .openapi('GitSourceContext')

type SourceContextType = {
  cloudRepo?: z.infer<typeof CloudRepoSourceContextSchema>
  gerrit?: z.infer<typeof GerritSourceContextSchema>
  git?: z.infer<typeof GitSourceContextSchema>
  labels?: { [key: string]: string }
}

const AnalyzePackagesMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'When the scan was created.' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource URI of the container image being scanned.' }),
  })
  .openapi({
    description:
      'AnalyzePackagesMetadata contains metadata for an active scan of a container image.',
    required: [],
  })
  .openapi('AnalyzePackagesMetadata')

const AnalyzePackagesMetadataV1Schema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'When the scan was created.' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource URI of the container image being scanned.' }),
  })
  .openapi({
    description:
      'AnalyzePackagesMetadata contains metadata for an active scan of a container image.',
    required: [],
  })
  .openapi('AnalyzePackagesMetadataV1')

const BinarySchema = z
  .object({ name: z.string().exactOptional(), version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Binary')

const LanguagePackageDependencySchema = z
  .object({ package: z.string().exactOptional(), version: z.string().exactOptional() })
  .openapi({
    description:
      "Indicates a language package available between this package and the customer's resource artifact.",
    required: [],
  })
  .openapi('LanguagePackageDependency')

const FileLocationSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.',
      }),
  })
  .openapi({ description: 'Indicates the location at which a package was found.', required: [] })
  .openapi('FileLocation')

const MaintainerSchema = z
  .object({ kind: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Maintainer')

const PackageDataSchema = z
  .object({
    architecture: z
      .string()
      .exactOptional()
      .openapi({ description: 'The architecture of the package.' }),
    binary: BinarySchema.exactOptional().openapi({
      description:
        "The binary package. This is significant when the source is different than the binary itself. Historically if they've differed, we've stored the name of the source and its version in the package/version fields, but we should also store the binary package info, as that's what's actually installed. See b/175908657#comment15.",
    }),
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar.',
      }),
    dependencyChain: z
      .array(LanguagePackageDependencySchema)
      .exactOptional()
      .openapi({
        description:
          "The dependency chain between this package and the user's artifact. List in order from the customer's package under review first, to the current package last. Inclusive of the original package and the current package.",
      }),
    fileLocation: z
      .array(FileLocationSchema)
      .exactOptional()
      .openapi({ description: 'The path to the jar file / go binary file.' }),
    hashDigest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages.',
      }),
    maintainer: MaintainerSchema.exactOptional().openapi({
      description: 'The maintainer of the package.',
    }),
    os: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The OS affected by a vulnerability Used to generate the cpe_uri for OS packages',
      }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the OS Used to generate the cpe_uri for OS packages',
      }),
    package: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package being analysed for vulnerabilities' }),
    packageType: z
      .enum(['PACKAGE_TYPE_UNSPECIFIED', 'OS', 'MAVEN', 'GO', 'GO_STDLIB', 'PYPI', 'NPM'])
      .exactOptional()
      .openapi({ description: 'The type of package: os, maven, go, etc.' }),
    patchedCve: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'CVEs that this package is no longer vulnerable to go/drydock-dd-custom-binary-scanning',
      }),
    unused: z.string().exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the package being analysed' }),
  })
  .openapi({ required: [] })
  .openapi('PackageData')

const AnalyzePackagesRequestSchema = z
  .object({
    packages: z
      .array(PackageDataSchema)
      .exactOptional()
      .openapi({ description: 'The packages to analyze.' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The resource URI of the container image being scanned.' }),
  })
  .openapi({
    description:
      'AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.',
    required: [],
  })
  .openapi('AnalyzePackagesRequest')

const AnalyzePackagesResponseSchema = z
  .object({
    scan: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the scan resource created by this successful scan.' }),
  })
  .openapi({
    description:
      'AnalyzePackagesResponse contains the information necessary to find results for the given scan.',
    required: [],
  })
  .openapi('AnalyzePackagesResponse')

const AnalyzePackagesResponseV1Schema = z
  .object({
    scan: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the scan resource created by this successful scan.' }),
  })
  .openapi({
    description:
      'AnalyzePackagesResponse contains the information necessary to find results for the given scan.',
    required: [],
  })
  .openapi('AnalyzePackagesResponseV1')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

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

const OccurrenceSchema: z.ZodType<OccurrenceType> = z
  .lazy(() =>
    z
      .object({
        attestation: AttestationOccurrenceSchema.exactOptional().openapi({
          description: 'Describes an attestation of an artifact.',
        }),
        build: BuildOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a verifiable build.',
        }),
        compliance: ComplianceOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a compliance violation on a linked resource.',
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The time this occurrence was created.' }),
        deployment: DeploymentOccurrenceSchema.exactOptional().openapi({
          description: 'Describes the deployment of an artifact on a runtime.',
        }),
        discovery: DiscoveryOccurrenceSchema.exactOptional().openapi({
          description: 'Describes when a resource was discovered.',
        }),
        dsseAttestation: DSSEAttestationOccurrenceSchema.exactOptional().openapi({
          description: 'Describes an attestation of an artifact using dsse.',
        }),
        envelope: EnvelopeSchema.exactOptional().openapi({
          description: 'https://github.com/secure-systems-lab/dsse',
        }),
        image: ImageOccurrenceSchema.exactOptional().openapi({
          description: 'Describes how this resource derives from the basis in the associated note.',
        }),
        kind: z
          .enum([
            'NOTE_KIND_UNSPECIFIED',
            'VULNERABILITY',
            'BUILD',
            'IMAGE',
            'PACKAGE',
            'DEPLOYMENT',
            'DISCOVERY',
            'ATTESTATION',
            'UPGRADE',
            'COMPLIANCE',
            'DSSE_ATTESTATION',
            'VULNERABILITY_ASSESSMENT',
          ])
          .exactOptional()
          .openapi({
            description:
              'Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.',
          }),
        noteName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.',
          }),
        package: PackageOccurrenceSchema.exactOptional().openapi({
          description: 'Describes the installation of a package on the linked resource.',
        }),
        remediation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'A description of actions that can be taken to remedy the note.',
          }),
        resourceUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.',
          }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The time this occurrence was last updated.' }),
        upgrade: UpgradeOccurrenceSchema.exactOptional().openapi({
          description: 'Describes an available package upgrade on the linked resource.',
        }),
        vulnerability: VulnerabilityOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a security vulnerability.',
        }),
      })
      .openapi({
        description: 'An instance of an analysis type that has been found on a resource.',
        required: [],
      }),
  )
  .openapi('Occurrence')

const ListVulnerabilitiesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results.',
      }),
    occurrences: z
      .array(OccurrenceSchema)
      .exactOptional()
      .openapi({ description: 'The list of Vulnerability Occurrences resulting from a scan.' }),
  })
  .openapi({
    description:
      'ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.',
    required: [],
  })
  .openapi('ListVulnerabilitiesResponse')

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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'ondemandscanning.projects.locations.operations.get',
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
            description: 'The name of the operation resource.',
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'ondemandscanning.projects.locations.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'ondemandscanning.projects.locations.operations.list',
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

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'ondemandscanning.projects.locations.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
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
  ],
})

export const postV1beta1NameWaitRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:wait',
  tags: ['projects'],
  description:
    'Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.',
  operationId: 'ondemandscanning.projects.locations.operations.wait',
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
      timeout: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.',
            in: 'query',
            name: 'timeout',
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
            description: 'The name of the operation resource to wait on.',
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

export const postV1beta1ParentScansAnalyzePackagesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/scans:analyzePackages',
  tags: ['projects'],
  description: 'Initiates an analysis of the provided packages.',
  operationId: 'ondemandscanning.projects.locations.scans.analyzePackages',
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
              'Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location]',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnalyzePackagesRequestSchema } } },
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

export const getV1beta1ParentVulnerabilitiesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/vulnerabilities',
  tags: ['projects'],
  description: 'Lists vulnerabilities resulting from a successfully completed scan.',
  operationId: 'ondemandscanning.projects.locations.scans.vulnerabilities.list',
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
            description: 'The number of vulnerabilities to retrieve.',
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
            description: 'The page token, resulting from a previous call to ListVulnerabilities.',
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
              'Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id]',
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
      content: { 'application/json': { schema: ListVulnerabilitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
