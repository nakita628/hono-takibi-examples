import { createRoute, z } from '@hono/zod-openapi'

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

const GenericSignedAttestationSchema = z
  .object({
    contentType: z
      .enum(['CONTENT_TYPE_UNSPECIFIED', 'SIMPLE_SIGNING_JSON'])
      .exactOptional()
      .openapi({
        description:
          'Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).',
      }),
    serializedPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`.',
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
      'An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.',
    required: [],
  })
  .openapi('GenericSignedAttestation')

const PgpSignedAttestationSchema = z
  .object({
    contentType: z
      .enum(['CONTENT_TYPE_UNSPECIFIED', 'SIMPLE_SIGNING_JSON'])
      .exactOptional()
      .openapi({
        description:
          'Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).',
      }),
    pgpKeyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \\ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload.',
      }),
  })
  .openapi({
    description:
      'An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.',
    required: [],
  })
  .openapi('PgpSignedAttestation')

type AttestationType = {
  genericSignedAttestation?: z.infer<typeof GenericSignedAttestationSchema>
  pgpSignedAttestation?: z.infer<typeof PgpSignedAttestationSchema>
}

const HintSchema = z
  .object({
    humanReadableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The human readable name of this attestation authority, for example "qa".',
      }),
  })
  .openapi({
    description:
      'This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.',
    required: [],
  })
  .openapi('Hint')

const AuthoritySchema = z
  .object({
    hint: HintSchema.exactOptional().openapi({
      description: 'Hint hints at the purpose of the attestation authority.',
    }),
  })
  .openapi({
    description:
      'Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don\'t all live in the same project.',
    required: [],
  })
  .openapi('Authority')

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

const BasisSchema = z
  .object({
    fingerprint: FingerprintSchema.exactOptional().openapi({
      description: 'Required. Immutable. The fingerprint of the base image.',
    }),
    resourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.',
      }),
  })
  .openapi({
    description:
      'Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.',
    required: [],
  })
  .openapi('Basis')

const BuildSignatureSchema = z
  .object({
    keyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service).',
      }),
    keyType: z
      .enum(['KEY_TYPE_UNSPECIFIED', 'PGP_ASCII_ARMORED', 'PKIX_PEM'])
      .exactOptional()
      .openapi({
        description:
          'The type of the key, either stored in `public_key` or referenced in `key_id`.',
      }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin`',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded.',
      }),
  })
  .openapi({
    description: 'Message encapsulating the signature of the verified build.',
    required: [],
  })
  .openapi('BuildSignature')

const BuildSchema = z
  .object({
    builderVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. Version of the builder which produced this build.',
      }),
    signature: BuildSignatureSchema.exactOptional().openapi({
      description:
        'Signature of the build in occurrences pointing to this build note containing build details.',
    }),
  })
  .openapi({
    description:
      "Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.",
    required: [],
  })
  .openapi('Build')

const DeployableSchema = z
  .object({
    resourceUri: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. Resource URI for the artifact being deployed.' }),
  })
  .openapi({ description: 'An artifact that can be deployed in some runtime.', required: [] })
  .openapi('Deployable')

const DiscoverySchema = z
  .object({
    analysisKind: z
      .enum([
        'NOTE_KIND_UNSPECIFIED',
        'VULNERABILITY',
        'BUILD',
        'IMAGE',
        'PACKAGE',
        'DEPLOYMENT',
        'DISCOVERY',
        'ATTESTATION',
        'INTOTO',
        'SBOM',
        'SPDX_PACKAGE',
        'SPDX_FILE',
        'SPDX_RELATIONSHIP',
        'VULNERABILITY_ASSESSMENT',
        'SBOM_REFERENCE',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. The kind of analysis that is handled by this discovery.',
      }),
  })
  .openapi({
    description:
      "A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.",
    required: [],
  })
  .openapi('Discovery')

const ArtifactRuleSchema = z
  .object({ artifactRule: z.array(z.string()).exactOptional() })
  .openapi({ description: 'Defines an object to declare an in-toto artifact rule', required: [] })
  .openapi('ArtifactRule')

const SigningKeySchema = z
  .object({
    keyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'key_id is an identifier for the signing key.' }),
    keyScheme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256".',
      }),
    keyType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa".',
      }),
    publicKeyValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field contains the actual public key.' }),
  })
  .openapi({
    description:
      'This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto\'s key definition can be found in section 4.2 of the in-toto specification.',
    required: [],
  })
  .openapi('SigningKey')

const InTotoSchema = z
  .object({
    expectedCommand: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'This field contains the expected command used to perform the step.',
      }),
    expectedMaterials: z
      .array(ArtifactRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step.',
      }),
    expectedProducts: z.array(ArtifactRuleSchema).exactOptional(),
    signingKeys: z
      .array(SigningKeySchema)
      .exactOptional()
      .openapi({
        description:
          'This field contains the public keys that can be used to verify the signatures on the step metadata.',
      }),
    stepName: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field identifies the name of the step in the supply chain.' }),
    threshold: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link.",
      }),
  })
  .openapi({
    description:
      'This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.',
    required: [],
  })
  .openapi('InToto')

const DigestSchema = z
  .object({
    algo: z.string().exactOptional().openapi({ description: '`SHA1`, `SHA512` etc.' }),
    digestBytes: z.string().exactOptional().openapi({ description: 'Value of the digest.' }),
  })
  .openapi({ description: 'Digest information.', required: [] })
  .openapi('Digest')

const VersionSchema = z
  .object({
    epoch: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Used to correct mistakes in the version numbering scheme.' }),
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

const DistributionSchema = z
  .object({
    architecture: z
      .enum(['ARCHITECTURE_UNSPECIFIED', 'X86', 'X64'])
      .exactOptional()
      .openapi({
        description:
          'The CPU architecture for which packages in this distribution channel were built.',
      }),
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The distribution channel-specific description of this package.' }),
    latestVersion: VersionSchema.exactOptional().openapi({
      description: 'The latest available version of this package in this distribution channel.',
    }),
    maintainer: z
      .string()
      .exactOptional()
      .openapi({ description: 'A freeform string denoting the maintainer of this package.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The distribution channel-specific homepage for this package.' }),
  })
  .openapi({
    description:
      "This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.",
    required: [],
  })
  .openapi('Distribution')

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

const PackageSchema = z
  .object({
    architecture: z
      .enum(['ARCHITECTURE_UNSPECIFIED', 'X86', 'X64'])
      .exactOptional()
      .openapi({
        description:
          'The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.',
      }),
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this package.' }),
    digest: z
      .array(DigestSchema)
      .exactOptional()
      .openapi({
        description:
          'Hash value, typically a file digest, that allows unique identification a specific package.',
      }),
    distribution: z
      .array(DistributionSchema)
      .exactOptional()
      .openapi({ description: 'The various channels by which a package is distributed.' }),
    license: LicenseSchema.exactOptional().openapi({
      description: 'Licenses that have been declared by the authors of the package.',
    }),
    maintainer: z
      .string()
      .exactOptional()
      .openapi({ description: 'A freeform text denoting the maintainer of this package.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The name of the package.' }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).',
      }),
    url: z.string().exactOptional().openapi({ description: 'The homepage for this package.' }),
    version: VersionSchema.exactOptional().openapi({ description: 'The version of the package.' }),
  })
  .openapi({ description: 'Package represents a particular package version.', required: [] })
  .openapi('Package')

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

const DocumentNoteSchema = z
  .object({
    dataLicence: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata")',
      }),
    spdxVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a reference number that can be used to understand how to parse and interpret the rest of the file',
      }),
  })
  .openapi({
    description:
      'DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/v2.3/document-creation-information/',
    required: [],
  })
  .openapi('DocumentNote')

const SBOMReferenceNoteSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({ description: 'The format that SBOM takes. E.g. may be spdx, cyclonedx, etc...' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3.',
      }),
  })
  .openapi({ description: 'The note representing an SBOM reference.', required: [] })
  .openapi('SBOMReferenceNote')

const FileNoteSchema = z
  .object({
    checksum: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Provide a unique identifier to match analysis information on each specific file in a package',
      }),
    fileType: z
      .enum([
        'FILE_TYPE_UNSPECIFIED',
        'SOURCE',
        'BINARY',
        'ARCHIVE',
        'APPLICATION',
        'AUDIO',
        'IMAGE',
        'TEXT',
        'VIDEO',
        'DOCUMENTATION',
        'SPDX',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description: 'This field provides information about the type of file identified',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identify the full path and filename that corresponds to the file information in this section',
      }),
  })
  .openapi({
    description:
      'FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/',
    required: [],
  })
  .openapi('FileNote')

const ExternalRefSchema = z
  .object({
    category: z
      .enum(['CATEGORY_UNSPECIFIED', 'SECURITY', 'PACKAGE_MANAGER', 'PERSISTENT_ID', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable information about the purpose and target of the reference',
      }),
    locator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: "Type of category (e.g. 'npm' for the PACKAGE_MANAGER category)" }),
  })
  .openapi({
    description:
      'An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package',
    required: [],
  })
  .openapi('ExternalRef')

const PackageInfoNoteSchema = z
  .object({
    analyzed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document',
      }),
    attribution: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts',
      }),
    checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file',
      }),
    copyright: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identify the copyright holders of the package, as well as any dates present',
      }),
    detailedDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed description of the package' }),
    downloadLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created',
      }),
    externalRefs: z
      .array(ExternalRefSchema)
      .exactOptional()
      .openapi({ description: 'ExternalRef' }),
    filesLicenseInfo: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found',
      }),
    homePage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Provide a place for the SPDX file creator to record a web site that serves as the package's home page",
      }),
    licenseDeclared: LicenseSchema.exactOptional().openapi({
      description: 'List the licenses that have been declared by the authors of the package',
    }),
    originator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came',
      }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of package: OS, MAVEN, GO, GO_STDLIB, etc.' }),
    summaryDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the package' }),
    supplier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identify the actual distribution source for the package/directory identified in the SPDX file',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identify the full name of the package as given by the Package Originator',
      }),
    verificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identify the version of the package' }),
  })
  .openapi({
    description:
      'PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/',
    required: [],
  })
  .openapi('PackageInfoNote')

const RelationshipNoteSchema = z
  .object({
    type: z
      .enum([
        'RELATIONSHIP_TYPE_UNSPECIFIED',
        'DESCRIBES',
        'DESCRIBED_BY',
        'CONTAINS',
        'CONTAINED_BY',
        'DEPENDS_ON',
        'DEPENDENCY_OF',
        'DEPENDENCY_MANIFEST_OF',
        'BUILD_DEPENDENCY_OF',
        'DEV_DEPENDENCY_OF',
        'OPTIONAL_DEPENDENCY_OF',
        'PROVIDED_DEPENDENCY_OF',
        'TEST_DEPENDENCY_OF',
        'RUNTIME_DEPENDENCY_OF',
        'EXAMPLE_OF',
        'GENERATES',
        'GENERATED_FROM',
        'ANCESTOR_OF',
        'DESCENDANT_OF',
        'VARIANT_OF',
        'DISTRIBUTION_ARTIFACT',
        'PATCH_FOR',
        'PATCH_APPLIED',
        'COPY_OF',
        'FILE_ADDED',
        'FILE_DELETED',
        'FILE_MODIFIED',
        'EXPANDED_FROM_ARCHIVE',
        'DYNAMIC_LINK',
        'STATIC_LINK',
        'DATA_FILE_OF',
        'TEST_CASE_OF',
        'BUILD_TOOL_OF',
        'DEV_TOOL_OF',
        'TEST_OF',
        'TEST_TOOL_OF',
        'DOCUMENTATION_OF',
        'OPTIONAL_COMPONENT_OF',
        'METAFILE_OF',
        'PACKAGE_OF',
        'AMENDS',
        'PREREQUISITE_FOR',
        'HAS_PREREQUISITE',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of relationship between the source and target SPDX elements',
      }),
  })
  .openapi({
    description:
      'RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/',
    required: [],
  })
  .openapi('RelationshipNote')

const CVSSSchema = z
  .object({
    attackComplexity: z
      .enum([
        'ATTACK_COMPLEXITY_UNSPECIFIED',
        'ATTACK_COMPLEXITY_LOW',
        'ATTACK_COMPLEXITY_HIGH',
        'ATTACK_COMPLEXITY_MEDIUM',
      ])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3, CVSS v2' }),
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
          'Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2',
      }),
    authentication: z
      .enum([
        'AUTHENTICATION_UNSPECIFIED',
        'AUTHENTICATION_MULTIPLE',
        'AUTHENTICATION_SINGLE',
        'AUTHENTICATION_NONE',
      ])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v2' }),
    availabilityImpact: z
      .enum([
        'IMPACT_UNSPECIFIED',
        'IMPACT_HIGH',
        'IMPACT_LOW',
        'IMPACT_NONE',
        'IMPACT_PARTIAL',
        'IMPACT_COMPLETE',
      ])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3, CVSS v2' }),
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
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3, CVSS v2' }),
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
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3, CVSS v2' }),
    privilegesRequired: z
      .enum([
        'PRIVILEGES_REQUIRED_UNSPECIFIED',
        'PRIVILEGES_REQUIRED_NONE',
        'PRIVILEGES_REQUIRED_LOW',
        'PRIVILEGES_REQUIRED_HIGH',
      ])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3' }),
    scope: z
      .enum(['SCOPE_UNSPECIFIED', 'SCOPE_UNCHANGED', 'SCOPE_CHANGED'])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3' }),
    userInteraction: z
      .enum(['USER_INTERACTION_UNSPECIFIED', 'USER_INTERACTION_NONE', 'USER_INTERACTION_REQUIRED'])
      .exactOptional()
      .openapi({ description: 'Defined in CVSS v3' }),
  })
  .openapi({
    description:
      'Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator',
    required: [],
  })
  .openapi('CVSS')

const CVSSv3Schema = z
  .object({
    attackComplexity: z
      .enum(['ATTACK_COMPLEXITY_UNSPECIFIED', 'ATTACK_COMPLEXITY_LOW', 'ATTACK_COMPLEXITY_HIGH'])
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
    availabilityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
      .exactOptional(),
    baseScore: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The base score is a function of the base metric scores.' }),
    confidentialityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
      .exactOptional(),
    exploitabilityScore: z.float32().exactOptional(),
    impactScore: z.float32().exactOptional(),
    integrityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
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
      'Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document',
    required: [],
  })
  .openapi('CVSSv3')

const VulnerabilityLocationSchema = z
  .object({
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar.',
      }),
    package: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The package being described.' }),
    version: VersionSchema.exactOptional().openapi({
      description: 'Required. The version of the package being described.',
    }),
  })
  .openapi({ description: 'The location of the vulnerability.', required: [] })
  .openapi('VulnerabilityLocation')

const DetailSchema = z
  .object({
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A vendor-specific description of this note.' }),
    fixedLocation: VulnerabilityLocationSchema.exactOptional().openapi({
      description: 'The fix for this specific package version.',
    }),
    isObsolete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.',
      }),
    maxAffectedVersion: VersionSchema.exactOptional().openapi({
      description: 'The max version of the package in which the vulnerability exists.',
    }),
    minAffectedVersion: VersionSchema.exactOptional().openapi({
      description: 'The min version of the package in which the vulnerability exists.',
    }),
    package: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the package where the vulnerability was found.',
      }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of package; whether native or non native(ruby gems, node.js packages etc).',
      }),
    severityName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The severity (eg: distro assigned severity) for this vulnerability.',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source from which the information in this Detail was obtained.',
      }),
    sourceUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.',
      }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the vendor of the product.' }),
  })
  .openapi({
    description:
      'Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2',
    required: [],
  })
  .openapi('Detail')

const KnowledgeBaseSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The KB name (generally of the form KB[0-9]+ i.e. KB123456).' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/',
      }),
  })
  .openapi({ required: [] })
  .openapi('KnowledgeBase')

const WindowsDetailSchema = z
  .object({
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the vulnerability.' }),
    fixingKbs: z
      .array(KnowledgeBaseSchema)
      .exactOptional()
      .openapi({
        description:
          "Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the vulnerability.' }),
  })
  .openapi({ required: [] })
  .openapi('WindowsDetail')

const VulnerabilitySchema = z
  .object({
    cvssScore: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The CVSS score for this vulnerability.' }),
    cvssV2: CVSSSchema.exactOptional().openapi({
      description: 'The full description of the CVSS for version 2.',
    }),
    cvssV3: CVSSv3Schema.exactOptional().openapi({
      description: 'The full description of the CVSS for version 3.',
    }),
    cvssVersion: z
      .enum(['CVSS_VERSION_UNSPECIFIED', 'CVSS_VERSION_2', 'CVSS_VERSION_3'])
      .exactOptional()
      .openapi({ description: 'CVSS version used to populate cvss_score and severity.' }),
    cwe: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of CWE for this vulnerability. For details, see: https://cwe.mitre.org/index.html',
      }),
    details: z
      .array(DetailSchema)
      .exactOptional()
      .openapi({
        description:
          'All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in.',
      }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({ description: 'Note provider assigned impact of the vulnerability.' }),
    sourceUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.',
      }),
    windowsDetails: z
      .array(WindowsDetailSchema)
      .exactOptional()
      .openapi({
        description:
          "Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.",
      }),
  })
  .openapi({
    description: 'Vulnerability provides metadata about a security vulnerability in a Note.',
    required: [],
  })
  .openapi('Vulnerability')

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

const AssessmentSchema = z
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
    longDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed description of this Vex.' }),
    relatedUris: z
      .array(RelatedUrlSchema)
      .exactOptional()
      .openapi({
        description:
          'Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability.',
      }),
    remediations: z
      .array(RemediationSchema)
      .exactOptional()
      .openapi({
        description: 'Specifies details on how to handle (and presumably, fix) a vulnerability.',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A one sentence description of this Vex.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'AFFECTED', 'NOT_AFFECTED', 'FIXED', 'UNDER_INVESTIGATION'])
      .exactOptional()
      .openapi({ description: 'Provides the state of this Vulnerability assessment.' }),
  })
  .openapi({
    description:
      'Assessment provides all information that is related to a single vulnerability for this product.',
    required: [],
  })
  .openapi('Assessment')

const ProductSchema = z
  .object({
    genericUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains a URI which is vendor-specific. Example: The artifact repository URL of an image.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the product.' }),
  })
  .openapi({
    description: 'Product contains information about a product and how to uniquely identify it.',
    required: [],
  })
  .openapi('Product')

const PublisherSchema = z
  .object({
    issuingAuthority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Name of the publisher. Examples: 'Google', 'Google Cloud Platform'.",
      }),
    publisherNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io',
      }),
  })
  .openapi({
    description: 'Publisher contains information about the publisher of this Note.',
    required: [],
  })
  .openapi('Publisher')

const VulnerabilityAssessmentNoteSchema = z
  .object({
    assessment: AssessmentSchema.exactOptional().openapi({
      description: 'Represents a vulnerability assessment for the product.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646.',
      }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed description of this Vex.' }),
    product: ProductSchema.exactOptional().openapi({
      description: 'The product affected by this vex.',
    }),
    publisher: PublisherSchema.exactOptional().openapi({
      description: 'Publisher details of this Note.',
    }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A one sentence description of this Vex.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the note. E.g. `Vex-Debian-11.4`' }),
  })
  .openapi({
    description:
      "A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE.",
    required: [],
  })
  .openapi('VulnerabilityAssessmentNote')

type NoteType = {
  attestationAuthority?: z.infer<typeof AuthoritySchema>
  baseImage?: z.infer<typeof BasisSchema>
  build?: z.infer<typeof BuildSchema>
  createTime?: string
  deployable?: z.infer<typeof DeployableSchema>
  discovery?: z.infer<typeof DiscoverySchema>
  expirationTime?: string
  intoto?: z.infer<typeof InTotoSchema>
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'INTOTO'
    | 'SBOM'
    | 'SPDX_PACKAGE'
    | 'SPDX_FILE'
    | 'SPDX_RELATIONSHIP'
    | 'VULNERABILITY_ASSESSMENT'
    | 'SBOM_REFERENCE'
  longDescription?: string
  name?: string
  package?: z.infer<typeof PackageSchema>
  relatedNoteNames?: string[]
  relatedUrl?: z.infer<typeof RelatedUrlSchema>[]
  sbom?: z.infer<typeof DocumentNoteSchema>
  sbomReference?: z.infer<typeof SBOMReferenceNoteSchema>
  shortDescription?: string
  spdxFile?: z.infer<typeof FileNoteSchema>
  spdxPackage?: z.infer<typeof PackageInfoNoteSchema>
  spdxRelationship?: z.infer<typeof RelationshipNoteSchema>
  updateTime?: string
  vulnerability?: z.infer<typeof VulnerabilitySchema>
  vulnerabilityAssessment?: z.infer<typeof VulnerabilityAssessmentNoteSchema>
}

const AttestationSchema: z.ZodType<AttestationType> = z
  .lazy(() =>
    z
      .object({
        genericSignedAttestation: GenericSignedAttestationSchema.exactOptional(),
        pgpSignedAttestation: PgpSignedAttestationSchema.exactOptional().openapi({
          description: 'A PGP signed attestation.',
        }),
      })
      .openapi({
        description:
          'Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).',
        required: [],
      }),
  )
  .openapi('Attestation')

const DetailsSchema = z
  .object({
    attestation: AttestationSchema.exactOptional().openapi({
      description: 'Required. Attestation for the resource.',
    }),
  })
  .openapi({ description: 'Details of an attestation occurrence.', required: [] })
  .openapi('Details')

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
      .enum(['HASH_TYPE_UNSPECIFIED', 'SHA256', 'GO_MODULE_H1', 'SHA512'])
      .exactOptional()
      .openapi({ description: 'Required. The type of hash that was performed.' }),
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

const GrafeasV1beta1BuildDetailsSchema = z
  .object({
    provenance: BuildProvenanceSchema.exactOptional().openapi({
      description: 'Required. The actual provenance for the build.',
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
  .openapi('GrafeasV1beta1BuildDetails')

const DeploymentSchema = z
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
  .openapi('Deployment')

const GrafeasV1beta1DeploymentDetailsSchema = z
  .object({
    deployment: DeploymentSchema.exactOptional().openapi({
      description: 'Required. Deployment history for the resource.',
    }),
  })
  .openapi({ description: 'Details of a deployment occurrence.', required: [] })
  .openapi('GrafeasV1beta1DeploymentDetails')

const LayerSchema = z
  .object({
    arguments: z
      .string()
      .exactOptional()
      .openapi({ description: 'The recovered arguments to the Dockerfile directive.' }),
    directive: z
      .enum([
        'DIRECTIVE_UNSPECIFIED',
        'MAINTAINER',
        'RUN',
        'CMD',
        'LABEL',
        'EXPOSE',
        'ENV',
        'ADD',
        'COPY',
        'ENTRYPOINT',
        'VOLUME',
        'USER',
        'WORKDIR',
        'ARG',
        'ONBUILD',
        'STOPSIGNAL',
        'HEALTHCHECK',
        'SHELL',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. The recovered Dockerfile directive used to construct this layer.',
      }),
  })
  .openapi({
    description: 'Layer holds metadata specific to a layer of a Docker image.',
    required: [],
  })
  .openapi('Layer')

const DerivedSchema = z
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
      'Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .',
    required: [],
  })
  .openapi('Derived')

const GrafeasV1beta1ImageDetailsSchema = z
  .object({
    derivedImage: DerivedSchema.exactOptional().openapi({
      description: 'Required. Immutable. The child image derived from the base image.',
    }),
  })
  .openapi({ description: 'Details of an image occurrence.', required: [] })
  .openapi('GrafeasV1beta1ImageDetails')

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

const DiscoveredSchema = z
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
    continuousAnalysis: z
      .enum(['CONTINUOUS_ANALYSIS_UNSPECIFIED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'Whether the resource is continuously analyzed.' }),
    lastAnalysisTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last time continuous analysis was done for this resource. Deprecated, do not use.',
      }),
  })
  .openapi({
    description: 'Provides information about the analysis status of a discovered resource.',
    required: [],
  })
  .openapi('Discovered')

const GrafeasV1beta1DiscoveryDetailsSchema = z
  .object({
    discovered: DiscoveredSchema.exactOptional().openapi({
      description: 'Required. Analysis status for the discovered resource.',
    }),
  })
  .openapi({ description: 'Details of a discovery occurrence.', required: [] })
  .openapi('GrafeasV1beta1DiscoveryDetails')

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

const LocationSchema = z
  .object({
    cpeUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.',
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

const InstallationSchema = z
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
    description: 'This represents how a particular software package may be installed on a system.',
    required: [],
  })
  .openapi('Installation')

const GrafeasV1beta1PackageDetailsSchema = z
  .object({
    installation: InstallationSchema.exactOptional().openapi({
      description: 'Required. Where the package was installed.',
    }),
  })
  .openapi({ description: 'Details of a package occurrence.', required: [] })
  .openapi('GrafeasV1beta1PackageDetails')

const GrafeasV1beta1IntotoSignatureSchema = z
  .object({ keyid: z.string().exactOptional(), sig: z.string().exactOptional() })
  .openapi({
    description: 'A signature object consists of the KeyID used and the signature itself.',
    required: [],
  })
  .openapi('GrafeasV1beta1IntotoSignature')

const ByProductsSchema = z
  .object({ customValues: z.record(z.string(), z.string()).exactOptional() })
  .openapi({
    description:
      'Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".',
    required: [],
  })
  .openapi('ByProducts')

const EnvironmentSchema = z
  .object({ customValues: z.record(z.string(), z.string()).exactOptional() })
  .openapi({
    description:
      'Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".',
    required: [],
  })
  .openapi('Environment')

const ArtifactHashesSchema = z
  .object({ sha256: z.string().exactOptional() })
  .openapi({
    description: 'Defines a hash object for use in Materials and Products.',
    required: [],
  })
  .openapi('ArtifactHashes')

const GrafeasV1beta1IntotoArtifactSchema = z
  .object({ hashes: ArtifactHashesSchema.exactOptional(), resourceUri: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GrafeasV1beta1IntotoArtifact')

const LinkSchema = z
  .object({
    byproducts: ByProductsSchema.exactOptional().openapi({
      description:
        'ByProducts are data generated as part of a software supply chain step, but are not the actual result of the step.',
    }),
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren\'t directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"]',
      }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'This is a field that can be used to capture information about the environment. It is suggested for this field to contain information that details environment variables, filesystem information, and the present working directory. The recommended structure of this field is: "environment": { "custom_values": { "variables": "", "filesystem": "", "workdir": "", "": "..." } }',
    }),
    materials: z
      .array(GrafeasV1beta1IntotoArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          'Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : } } ]',
      }),
    products: z
      .array(GrafeasV1beta1IntotoArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          'Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials.',
      }),
  })
  .openapi({ description: 'This corresponds to an in-toto link.', required: [] })
  .openapi('Link')

const GrafeasV1beta1IntotoDetailsSchema = z
  .object({
    signatures: z.array(GrafeasV1beta1IntotoSignatureSchema).exactOptional(),
    signed: LinkSchema.exactOptional(),
  })
  .openapi({
    description:
      'This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.',
    required: [],
  })
  .openapi('GrafeasV1beta1IntotoDetails')

const ResourceSchema = z
  .object({
    contentHash: HashSchema.exactOptional().openapi({
      description:
        'Deprecated, do not use. Use uri instead. The hash of the resource content. For example, the Docker digest.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian".',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image.',
      }),
  })
  .openapi({
    description: 'An entity that can have metadata. For example, a Docker image.',
    required: [],
  })
  .openapi('Resource')

const DocumentOccurrenceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard',
      }),
    creatorComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields',
      }),
    creators: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person's name",
      }),
    documentComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document',
      }),
    externalDocumentRefs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Identify any external SPDX documents referenced within this SPDX document',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally',
      }),
    licenseListVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identify name of this document as designated by creator' }),
  })
  .openapi({
    description:
      'DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/v2.3/document-creation-information/',
    required: [],
  })
  .openapi('DocumentOccurrence')

const SbomReferenceIntotoPredicateSchema = z
  .object({
    digest: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of algorithm to digest of the contents of the SBOM.' }),
    location: z.string().exactOptional().openapi({ description: 'The location of the SBOM.' }),
    mimeType: z.string().exactOptional().openapi({ description: 'The mime type of the SBOM.' }),
    referrerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The person or system referring this predicate to the consumer.' }),
  })
  .openapi({ description: 'A predicate which describes the SBOM being referenced.', required: [] })
  .openapi('SbomReferenceIntotoPredicate')

const SubjectSchema = z
  .object({
    digest: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          '`"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier to distinguish this artifact from others within the subject.',
      }),
  })
  .openapi({
    description:
      'Set of software artifacts that the attestation applies to. Each element represents a single software artifact.',
    required: [],
  })
  .openapi('Subject')

const SbomReferenceIntotoPayloadSchema = z
  .object({
    _type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for the schema of the Statement.' }),
    predicate: SbomReferenceIntotoPredicateSchema.exactOptional().openapi({
      description:
        'Additional parameters of the Predicate. Includes the actual data about the SBOM.',
    }),
    predicateType: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI identifying the type of the Predicate.' }),
    subject: z
      .array(SubjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of software artifacts that the attestation applies to. Each element represents a single software artifact.',
      }),
  })
  .openapi({
    description:
      'The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details.',
    required: [],
  })
  .openapi('SbomReferenceIntotoPayload')

const SBOMReferenceOccurrenceSchema = z
  .object({
    payload: SbomReferenceIntotoPayloadSchema.exactOptional().openapi({
      description: 'The actual payload that contains the SBOM reference data.',
    }),
    payloadType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'.",
      }),
    signatures: z
      .array(EnvelopeSignatureSchema)
      .exactOptional()
      .openapi({ description: 'The signatures over the payload.' }),
  })
  .openapi({
    description:
      'The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details.',
    required: [],
  })
  .openapi('SBOMReferenceOccurrence')

const FileOccurrenceSchema = z
  .object({
    attributions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field provides a place for the SPDX file creator to record any general comments about the file',
      }),
    contributors: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This field provides a place for the SPDX file creator to record file contributors',
      }),
    copyright: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identify the copyright holder of the file, as well as any dates present',
      }),
    filesLicenseInfo: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains the license information actually found in the file, if any',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identify any element in an SPDX document which may be referenced by other elements',
      }),
    licenseConcluded: LicenseSchema.exactOptional().openapi({
      description:
        'This field contains the license the SPDX file creator has concluded as governing the file or alternative values if the governing license cannot be determined',
    }),
    notice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file',
      }),
  })
  .openapi({
    description:
      'FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/',
    required: [],
  })
  .openapi('FileOccurrence')

const PackageInfoOccurrenceSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A place for the SPDX file creator to record any general comments about the package being described',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide the actual file name of the package, or path of the directory being treated as a package',
      }),
    homePage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page",
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identify any element in an SPDX document which may be referenced by other elements',
      }),
    licenseConcluded: LicenseSchema.exactOptional().openapi({
      description: 'package or alternative values, if the governing license cannot be determined',
    }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc.',
        readOnly: true,
      }),
    sourceInfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package',
      }),
    summaryDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A short description of the package', readOnly: true }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identify the full name of the package as given by the Package Originator',
        readOnly: true,
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Identify the version of the package', readOnly: true }),
  })
  .openapi({
    description:
      'PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/',
    required: [],
  })
  .openapi('PackageInfoOccurrence')

const RelationshipOccurrenceSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A place for the SPDX file creator to record any general comments about the relationship',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Also referred to as SPDXRef-A The source SPDX element (file, package, etc)',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are "known unknowns", the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it',
      }),
    type: z
      .enum([
        'RELATIONSHIP_TYPE_UNSPECIFIED',
        'DESCRIBES',
        'DESCRIBED_BY',
        'CONTAINS',
        'CONTAINED_BY',
        'DEPENDS_ON',
        'DEPENDENCY_OF',
        'DEPENDENCY_MANIFEST_OF',
        'BUILD_DEPENDENCY_OF',
        'DEV_DEPENDENCY_OF',
        'OPTIONAL_DEPENDENCY_OF',
        'PROVIDED_DEPENDENCY_OF',
        'TEST_DEPENDENCY_OF',
        'RUNTIME_DEPENDENCY_OF',
        'EXAMPLE_OF',
        'GENERATES',
        'GENERATED_FROM',
        'ANCESTOR_OF',
        'DESCENDANT_OF',
        'VARIANT_OF',
        'DISTRIBUTION_ARTIFACT',
        'PATCH_FOR',
        'PATCH_APPLIED',
        'COPY_OF',
        'FILE_ADDED',
        'FILE_DELETED',
        'FILE_MODIFIED',
        'EXPANDED_FROM_ARCHIVE',
        'DYNAMIC_LINK',
        'STATIC_LINK',
        'DATA_FILE_OF',
        'TEST_CASE_OF',
        'BUILD_TOOL_OF',
        'DEV_TOOL_OF',
        'TEST_OF',
        'TEST_TOOL_OF',
        'DOCUMENTATION_OF',
        'OPTIONAL_COMPONENT_OF',
        'METAFILE_OF',
        'PACKAGE_OF',
        'AMENDS',
        'PREREQUISITE_FOR',
        'HAS_PREREQUISITE',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of relationship between the source and target SPDX elements',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/',
    required: [],
  })
  .openapi('RelationshipOccurrence')

const PackageIssueSchema = z
  .object({
    affectedLocation: VulnerabilityLocationSchema.exactOptional().openapi({
      description: 'Required. The location of the vulnerability.',
    }),
    effectiveSeverity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.',
        readOnly: true,
      }),
    fixedLocation: VulnerabilityLocationSchema.exactOptional().openapi({
      description: 'The location of the available fix for vulnerability.',
    }),
    packageType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of package (e.g. OS, MAVEN, GO).' }),
    severityName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability.',
      }),
  })
  .openapi({
    description:
      'This message wraps a location affected by a vulnerability and its associated fix (if one is available).',
    required: [],
  })
  .openapi('PackageIssue')

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

const GrafeasV1beta1VulnerabilityDetailsSchema = z
  .object({
    cvssScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity.',
      }),
    cvssV2: CVSSSchema.exactOptional().openapi({
      description: 'The cvss v2 score for the vulnerability.',
    }),
    cvssV3: CVSSSchema.exactOptional().openapi({
      description: 'The cvss v3 score for the vulnerability.',
    }),
    cvssVersion: z
      .enum(['CVSS_VERSION_UNSPECIFIED', 'CVSS_VERSION_2', 'CVSS_VERSION_3'])
      .exactOptional()
      .openapi({
        description: 'Output only. CVSS version used to populate cvss_score and severity.',
      }),
    effectiveSeverity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description:
          'The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues.',
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
        description: 'Output only. The note provider assigned Severity of the vulnerability.',
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
          'The type of package; whether native or non native(ruby gems, node.js packages etc)',
      }),
    vexAssessment: VexAssessmentSchema.exactOptional(),
  })
  .openapi({ description: 'Details of a vulnerability Occurrence.', required: [] })
  .openapi('GrafeasV1beta1VulnerabilityDetails')

type OccurrenceType = {
  attestation?: z.infer<typeof DetailsSchema>
  build?: z.infer<typeof GrafeasV1beta1BuildDetailsSchema>
  createTime?: string
  deployment?: z.infer<typeof GrafeasV1beta1DeploymentDetailsSchema>
  derivedImage?: z.infer<typeof GrafeasV1beta1ImageDetailsSchema>
  discovered?: z.infer<typeof GrafeasV1beta1DiscoveryDetailsSchema>
  envelope?: z.infer<typeof EnvelopeSchema>
  installation?: z.infer<typeof GrafeasV1beta1PackageDetailsSchema>
  intoto?: z.infer<typeof GrafeasV1beta1IntotoDetailsSchema>
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'INTOTO'
    | 'SBOM'
    | 'SPDX_PACKAGE'
    | 'SPDX_FILE'
    | 'SPDX_RELATIONSHIP'
    | 'VULNERABILITY_ASSESSMENT'
    | 'SBOM_REFERENCE'
  name?: string
  noteName?: string
  remediation?: string
  resource?: z.infer<typeof ResourceSchema>
  sbom?: z.infer<typeof DocumentOccurrenceSchema>
  sbomReference?: z.infer<typeof SBOMReferenceOccurrenceSchema>
  spdxFile?: z.infer<typeof FileOccurrenceSchema>
  spdxPackage?: z.infer<typeof PackageInfoOccurrenceSchema>
  spdxRelationship?: z.infer<typeof RelationshipOccurrenceSchema>
  updateTime?: string
  vulnerability?: z.infer<typeof GrafeasV1beta1VulnerabilityDetailsSchema>
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

const NoteSchema: z.ZodType<NoteType> = z
  .lazy(() =>
    z
      .object({
        attestationAuthority: AuthoritySchema.exactOptional().openapi({
          description: 'A note describing an attestation role.',
        }),
        baseImage: BasisSchema.exactOptional().openapi({
          description: 'A note describing a base image.',
        }),
        build: BuildSchema.exactOptional().openapi({
          description: 'A note describing build provenance for a verifiable build.',
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time this note was created. This field can be used as a filter in list requests.',
          }),
        deployable: DeployableSchema.exactOptional().openapi({
          description: 'A note describing something that can be deployed.',
        }),
        discovery: DiscoverySchema.exactOptional().openapi({
          description: 'A note describing the initial analysis of a resource.',
        }),
        expirationTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Time of expiration for this note. Empty if note does not expire.',
          }),
        intoto: InTotoSchema.exactOptional().openapi({
          description: 'A note describing an in-toto link.',
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
            'INTOTO',
            'SBOM',
            'SPDX_PACKAGE',
            'SPDX_FILE',
            'SPDX_RELATIONSHIP',
            'VULNERABILITY_ASSESSMENT',
            'SBOM_REFERENCE',
          ])
          .exactOptional()
          .openapi({
            description:
              'Output only. The type of analysis. This field can be used as a filter in list requests.',
          }),
        longDescription: z
          .string()
          .exactOptional()
          .openapi({ description: 'A detailed description of this note.' }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.',
          }),
        package: PackageSchema.exactOptional().openapi({
          description: 'A note describing a package hosted by various package managers.',
        }),
        relatedNoteNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Other notes related to this note.' }),
        relatedUrl: z
          .array(RelatedUrlSchema)
          .exactOptional()
          .openapi({ description: 'URLs associated with this note.' }),
        sbom: DocumentNoteSchema.exactOptional().openapi({
          description: 'A note describing a software bill of materials.',
        }),
        sbomReference: SBOMReferenceNoteSchema.exactOptional().openapi({
          description: 'A note describing an SBOM reference.',
        }),
        shortDescription: z
          .string()
          .exactOptional()
          .openapi({ description: 'A one sentence description of this note.' }),
        spdxFile: FileNoteSchema.exactOptional().openapi({
          description: 'A note describing an SPDX File.',
        }),
        spdxPackage: PackageInfoNoteSchema.exactOptional().openapi({
          description: 'A note describing an SPDX Package.',
        }),
        spdxRelationship: RelationshipNoteSchema.exactOptional().openapi({
          description: 'A note describing an SPDX File.',
        }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time this note was last updated. This field can be used as a filter in list requests.',
          }),
        vulnerability: VulnerabilitySchema.exactOptional().openapi({
          description: 'A note describing a package vulnerability.',
        }),
        vulnerabilityAssessment: VulnerabilityAssessmentNoteSchema.exactOptional().openapi({
          description: 'A note describing a vulnerability assessment.',
        }),
      })
      .openapi({
        description: 'A type of analysis that can be done for a resource.',
        required: [],
      }),
  )
  .openapi('Note')

const BatchCreateNotesRequestSchema = z
  .object({
    notes: z
      .record(z.string(), NoteSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000.',
      }),
  })
  .openapi({ description: 'Request to create notes in batch.', required: [] })
  .openapi('BatchCreateNotesRequest')

const BatchCreateNotesResponseSchema = z
  .object({
    notes: z
      .array(NoteSchema)
      .exactOptional()
      .openapi({ description: 'The notes that were created.' }),
  })
  .openapi({ description: 'Response for creating notes in batch.', required: [] })
  .openapi('BatchCreateNotesResponse')

const OccurrenceSchema: z.ZodType<OccurrenceType> = z
  .lazy(() =>
    z
      .object({
        attestation: DetailsSchema.exactOptional().openapi({
          description: 'Describes an attestation of an artifact.',
        }),
        build: GrafeasV1beta1BuildDetailsSchema.exactOptional().openapi({
          description: 'Describes a verifiable build.',
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The time this occurrence was created.' }),
        deployment: GrafeasV1beta1DeploymentDetailsSchema.exactOptional().openapi({
          description: 'Describes the deployment of an artifact on a runtime.',
        }),
        derivedImage: GrafeasV1beta1ImageDetailsSchema.exactOptional().openapi({
          description: 'Describes how this resource derives from the basis in the associated note.',
        }),
        discovered: GrafeasV1beta1DiscoveryDetailsSchema.exactOptional().openapi({
          description: 'Describes when a resource was discovered.',
        }),
        envelope: EnvelopeSchema.exactOptional().openapi({
          description: 'https://github.com/secure-systems-lab/dsse',
        }),
        installation: GrafeasV1beta1PackageDetailsSchema.exactOptional().openapi({
          description: 'Describes the installation of a package on the linked resource.',
        }),
        intoto: GrafeasV1beta1IntotoDetailsSchema.exactOptional().openapi({
          description: 'Describes a specific in-toto link.',
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
            'INTOTO',
            'SBOM',
            'SPDX_PACKAGE',
            'SPDX_FILE',
            'SPDX_RELATIONSHIP',
            'VULNERABILITY_ASSESSMENT',
            'SBOM_REFERENCE',
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
        remediation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'A description of actions that can be taken to remedy the note.',
          }),
        resource: ResourceSchema.exactOptional().openapi({
          description: 'Required. Immutable. The resource for which the occurrence applies.',
        }),
        sbom: DocumentOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a specific software bill of materials document.',
        }),
        sbomReference: SBOMReferenceOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a specific SBOM reference occurrences.',
        }),
        spdxFile: FileOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a specific SPDX File.',
        }),
        spdxPackage: PackageInfoOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a specific SPDX Package.',
        }),
        spdxRelationship: RelationshipOccurrenceSchema.exactOptional().openapi({
          description: 'Describes a specific SPDX Relationship.',
        }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The time this occurrence was last updated.' }),
        vulnerability: GrafeasV1beta1VulnerabilityDetailsSchema.exactOptional().openapi({
          description: 'Describes a security vulnerability.',
        }),
      })
      .openapi({
        description: 'An instance of an analysis type that has been found on a resource.',
        required: [],
      }),
  )
  .openapi('Occurrence')

const BatchCreateOccurrencesRequestSchema = z
  .object({
    occurrences: z
      .array(OccurrenceSchema)
      .exactOptional()
      .openapi({ description: 'Required. The occurrences to create. Max allowed length is 1000.' }),
  })
  .openapi({ description: 'Request to create occurrences in batch.', required: [] })
  .openapi('BatchCreateOccurrencesRequest')

const BatchCreateOccurrencesResponseSchema = z
  .object({
    occurrences: z
      .array(OccurrenceSchema)
      .exactOptional()
      .openapi({ description: 'The occurrences that were created.' }),
  })
  .openapi({ description: 'Response for creating occurrences in batch.', required: [] })
  .openapi('BatchCreateOccurrencesResponse')

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

const TimeSpanSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'End of time span.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Start of time span.' }),
  })
  .openapi({
    description: 'Start and end times for a build execution phase. Next ID: 3',
    required: [],
  })
  .openapi('TimeSpan')

const VolumeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.',
      }),
  })
  .openapi({
    description:
      'Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. Next ID: 3',
    required: [],
  })
  .openapi('Volume')

const BuildStepSchema = z
  .object({
    allowExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.',
      }),
    allowFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.",
      }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.",
      }),
    entrypoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.",
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      }),
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Return code from running the step.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like \"ubuntu\", \"debian\", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.",
      }),
    pullTiming: TimeSpanSchema.exactOptional().openapi({
      description:
        "Output only. Stores timing information for pulling this build step's builder image only.",
    }),
    script: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.',
      }),
    secretEnv: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.",
      }),
    status: z
      .enum([
        'STATUS_UNKNOWN',
        'PENDING',
        'QUEUING',
        'QUEUED',
        'WORKING',
        'SUCCESS',
        'FAILURE',
        'INTERNAL_ERROR',
        'TIMEOUT',
        'CANCELLED',
        'EXPIRED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.',
      }),
    timing: TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for executing this build step.',
    }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.',
      }),
    waitFor: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.',
      }),
  })
  .openapi({ description: 'A step in the build pipeline. Next ID: 20', required: [] })
  .openapi('BuildStep')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfigSchema = z
  .object({
    approvalRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.',
      }),
  })
  .openapi({
    description: 'ApprovalConfig describes configuration for manual approval of a build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultSchema = z
  .object({
    approvalTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the approval decision was made.',
        readOnly: true,
      }),
    approverAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.',
        readOnly: true,
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. An optional comment for this manual approval result.' }),
    decision: z
      .enum(['DECISION_UNSPECIFIED', 'APPROVED', 'REJECTED'])
      .exactOptional()
      .openapi({ description: 'Required. The decision of this manual approval.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.',
      }),
  })
  .openapi({
    description:
      'ApprovalResult describes the decision and associated metadata of a manual approval of a build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifactSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maven `artifactId` value used when uploading the artifact to Artifact Registry.',
      }),
    groupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maven `groupId` value used when uploading the artifact to Artifact Registry.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.",
      }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maven `version` value used when uploading the artifact to Artifact Registry.',
      }),
  })
  .openapi({
    description:
      'A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackageSchema = z
  .object({
    packagePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the package.json. e.g. workspace/path/to/package' }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.',
      }),
  })
  .openapi({
    description:
      'Npm package to upload to Artifact Registry upon successful completion of all build steps.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage')

const ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'End of time span.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Start of time span.' }),
  })
  .openapi({ description: 'Start and end times for a build execution phase.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjectsSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.',
      }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Path globs used to match files in the build's workspace." }),
    timing: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing all artifact objects.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackageSchema = z
  .object({
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file.",
      }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.',
      }),
  })
  .openapi({
    description:
      'Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsSchema = z
  .object({
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.",
      }),
    mavenArtifacts: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.",
      }),
    npmPackages: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackageSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE.",
      }),
    objects:
      ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjectsSchema.exactOptional().openapi(
        {
          description:
            "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.",
        },
      ),
    pythonPackages: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackageSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.',
      }),
  })
  .openapi({
    description:
      'Artifacts produced by a build that should be uploaded upon successful completion of all build steps.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalSchema = z
  .object({
    config: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfigSchema.exactOptional().openapi(
      {
        description: 'Output only. Configuration for manual approval of this build.',
        readOnly: true,
      },
    ),
    result: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultSchema.exactOptional().openapi(
      { description: 'Output only. Result of manual approval for this Build.', readOnly: true },
    ),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'APPROVED', 'REJECTED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: "Output only. The state of this build's approval.", readOnly: true }),
  })
  .openapi({
    description: "BuildApproval describes a build's approval configuration, state, and result.",
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval')

const ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecretSchema = z
  .object({
    envMap: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.",
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/*/locations/*/keyRings/*/cryptoKeys/*',
      }),
  })
  .openapi({
    description:
      'Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret')

const ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecretSchema = z
  .object({
    env: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.",
      }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*',
      }),
  })
  .openapi({
    description: 'Pairs a secret environment variable with a SecretVersion in Secret Manager.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret')

const ContaineranalysisGoogleDevtoolsCloudbuildV1SecretsSchema = z
  .object({
    inline: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecretSchema)
      .exactOptional()
      .openapi({
        description:
          'Secrets encrypted with KMS key and the associated secret environment variable.',
      }),
    secretManager: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecretSchema)
      .exactOptional()
      .openapi({
        description: 'Secrets in Secret Manager and associated secret environment variable.',
      }),
  })
  .openapi({ description: 'Secrets and secret environment variables.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explains the failure issue in more detail using hard-coded text.' }),
    type: z
      .enum([
        'FAILURE_TYPE_UNSPECIFIED',
        'PUSH_FAILED',
        'PUSH_IMAGE_NOT_FOUND',
        'PUSH_NOT_AUTHORIZED',
        'LOGGING_FAILURE',
        'USER_BUILD_STEP',
        'FETCH_SOURCE_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The name of the failure.' }),
  })
  .openapi({
    description: 'A fatal problem encountered during the execution of the build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOptionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId}',
      }),
  })
  .openapi({
    description:
      'Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption')

const ContaineranalysisGoogleDevtoolsCloudbuildV1VolumeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.',
      }),
  })
  .openapi({
    description:
      'Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Volume')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSchema = z
  .object({
    defaultLogsBucketBehavior: z
      .enum(['DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED', 'REGIONAL_USER_OWNED_BUCKET'])
      .exactOptional()
      .openapi({ description: 'Optional. Option to specify how default logs buckets are setup.' }),
    diskSizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.',
      }),
    dynamicSubstitutions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.',
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      }),
    logStreamingOption: z
      .enum(['STREAM_DEFAULT', 'STREAM_ON', 'STREAM_OFF'])
      .exactOptional()
      .openapi({
        description: 'Option to define build log streaming behavior to Google Cloud Storage.',
      }),
    logging: z
      .enum([
        'LOGGING_UNSPECIFIED',
        'LEGACY',
        'GCS_ONLY',
        'STACKDRIVER_ONLY',
        'CLOUD_LOGGING_ONLY',
        'NONE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify the logging mode, which determines if and where build logs are stored.',
      }),
    machineType: z
      .enum(['UNSPECIFIED', 'N1_HIGHCPU_8', 'N1_HIGHCPU_32', 'E2_HIGHCPU_8', 'E2_HIGHCPU_32'])
      .exactOptional()
      .openapi({ description: 'Compute Engine machine type on which to run the build.' }),
    pool: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOptionSchema.exactOptional().openapi(
      {
        description:
          'Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.',
      },
    ),
    requestedVerifyOption: z
      .enum(['NOT_VERIFIED', 'VERIFIED'])
      .exactOptional()
      .openapi({ description: 'Requested verifiability options.' }),
    secretEnv: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.",
      }),
    sourceProvenanceHash: z
      .array(z.enum(['NONE', 'SHA256', 'MD5', 'SHA512']))
      .exactOptional()
      .openapi({ description: 'Requested hash for SourceProvenance.' }),
    substitutionOption: z
      .enum(['MUST_MATCH', 'ALLOW_LOOSE'])
      .exactOptional()
      .openapi({
        description:
          'Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.',
      }),
    volumes: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.',
      }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field deprecated; please use `pool.name` instead.' }),
  })
  .openapi({
    description: 'Optional arguments to enable specific features of builds.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImageSchema = z
  .object({
    digest: z.string().exactOptional().openapi({ description: 'Docker Registry 2.0 digest.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name used to push the container image to Google Container Registry, as presented to `docker push`.',
      }),
    pushTiming: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified image.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'An image built by the pipeline.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage')

const ContaineranalysisGoogleDevtoolsCloudbuildV1HashSchema = z
  .object({
    type: z
      .enum(['NONE', 'SHA256', 'MD5', 'SHA512'])
      .exactOptional()
      .openapi({ description: 'The type of hash that was performed.' }),
    value: z.string().exactOptional().openapi({ description: 'The hash value.' }),
  })
  .openapi({ description: 'Container message for hash values.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Hash')

const ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesSchema = z
  .object({
    fileHash: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1HashSchema)
      .exactOptional()
      .openapi({ description: 'Collection of file hashes.' }),
  })
  .openapi({
    description:
      'Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes')

const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifactSchema = z
  .object({
    fileHashes: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesSchema.exactOptional().openapi(
      { description: 'Hash types and values of the Maven Artifact.' },
    ),
    pushTiming: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified artifact.',
      readOnly: true,
    }),
    uri: z.string().exactOptional().openapi({ description: 'URI of the uploaded artifact.' }),
  })
  .openapi({
    description: 'A Maven artifact uploaded using the MavenArtifact directive.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact')

const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackageSchema = z
  .object({
    fileHashes: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesSchema.exactOptional().openapi(
      { description: 'Hash types and values of the npm package.' },
    ),
    pushTiming: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified artifact.',
      readOnly: true,
    }),
    uri: z.string().exactOptional().openapi({ description: 'URI of the uploaded npm package.' }),
  })
  .openapi({
    description: 'An npm package uploaded to Artifact Registry using the NpmPackage directive.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage')

const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackageSchema = z
  .object({
    fileHashes: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesSchema.exactOptional().openapi(
      { description: 'Hash types and values of the Python Artifact.' },
    ),
    pushTiming: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for pushing the specified artifact.',
      readOnly: true,
    }),
    uri: z.string().exactOptional().openapi({ description: 'URI of the uploaded artifact.' }),
  })
  .openapi({ description: 'Artifact uploaded using the PythonPackage directive.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage')

const ContaineranalysisGoogleDevtoolsCloudbuildV1ResultsSchema = z
  .object({
    artifactManifest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.',
      }),
    artifactTiming:
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
        description: 'Time to push all non-container artifacts to Cloud Storage.',
      }),
    buildStepImages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of build step digests, in the order corresponding to build step indices.',
      }),
    buildStepOutputs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.',
      }),
    images: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImageSchema)
      .exactOptional()
      .openapi({ description: 'Container images that were built as a part of the build.' }),
    mavenArtifacts: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifactSchema)
      .exactOptional()
      .openapi({
        description: 'Maven artifacts uploaded to Artifact Registry at the end of the build.',
      }),
    npmPackages: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackageSchema)
      .exactOptional()
      .openapi({
        description: 'Npm packages uploaded to Artifact Registry at the end of the build.',
      }),
    numArtifacts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.',
      }),
    pythonPackages: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackageSchema)
      .exactOptional()
      .openapi({
        description: 'Python artifacts uploaded to Artifact Registry at the end of the build.',
      }),
  })
  .openapi({ description: 'Artifacts created by the build pipeline.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Results')

const ContaineranalysisGoogleDevtoolsCloudbuildV1SecretSchema = z
  .object({
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud KMS key name to use to decrypt these envs.' }),
    secretEnv: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.",
      }),
  })
  .openapi({
    description:
      'Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Secret')

const ContaineranalysisGoogleDevtoolsCloudbuildV1GitSourceSchema = z
  .object({
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.",
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote.',
      }),
  })
  .openapi({
    description: 'Location of the source in any accessible Git repository.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource')

const ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceSchema = z
  .object({
    branchName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
    commitSha: z.string().exactOptional().openapi({ description: 'Explicit commit SHA to build.' }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.",
      }),
    invertRegex: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only trigger a build if the revision regex does NOT match the revision regex.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.',
      }),
    repoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Cloud Source Repository.' }),
    substitutions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Substitutions to use in a triggered build. Should only be used with RunBuildTrigger',
      }),
    tagName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
  })
  .openapi({
    description: 'Location of the source in a Google Cloud Source Repository.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource')

const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.',
      }),
  })
  .openapi({
    description: 'Location of the source in an archive file in Google Cloud Storage.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource')

const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage object containing the source manifest. This object must be a JSON file.',
      }),
  })
  .openapi({
    description:
      'Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest')

const ContaineranalysisGoogleDevtoolsCloudbuildV1SourceSchema = z
  .object({
    gitSource: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSourceSchema.exactOptional().openapi({
      description: 'If provided, get the source from this Git repository.',
    }),
    repoSource: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceSchema.exactOptional().openapi(
      {
        description: 'If provided, get the source from this location in a Cloud Source Repository.',
      },
    ),
    storageSource:
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSchema.exactOptional().openapi({
        description: 'If provided, get the source from this location in Google Cloud Storage.',
      }),
    storageSourceManifest:
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestSchema.exactOptional().openapi(
        {
          description:
            'If provided, get the source from this manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).',
        },
      ),
  })
  .openapi({ description: 'Location of the source in a supported storage service.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Source')

const ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenanceSchema = z
  .object({
    fileHashes: z
      .record(z.string(), ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.',
        readOnly: true,
      }),
    resolvedRepoSource:
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceSchema.exactOptional().openapi({
        description:
          "A copy of the build's `source.repo_source`, if exists, with any revisions resolved.",
      }),
    resolvedStorageSource:
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSchema.exactOptional().openapi({
        description:
          "A copy of the build's `source.storage_source`, if exists, with any generations resolved.",
      }),
    resolvedStorageSourceManifest:
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestSchema.exactOptional().openapi(
        {
          description:
            "A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.",
        },
      ),
  })
  .openapi({
    description:
      'Provenance of the source. Ways to find the original source, or verify that some source was used for this build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepSchema = z
  .object({
    allowExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.',
      }),
    allowFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.",
      }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.",
      }),
    entrypoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.",
      }),
    env: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".',
      }),
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Return code from running the step.', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like \"ubuntu\", \"debian\", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.",
      }),
    pullTiming: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description:
        "Output only. Stores timing information for pulling this build step's builder image only.",
      readOnly: true,
    }),
    script: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.',
      }),
    secretEnv: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.",
      }),
    status: z
      .enum([
        'STATUS_UNKNOWN',
        'PENDING',
        'QUEUED',
        'WORKING',
        'SUCCESS',
        'FAILURE',
        'INTERNAL_ERROR',
        'TIMEOUT',
        'CANCELLED',
        'EXPIRED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.',
        readOnly: true,
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.',
      }),
    timing: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema.exactOptional().openapi({
      description: 'Output only. Stores timing information for executing this build step.',
      readOnly: true,
    }),
    volumes: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.',
      }),
    waitFor: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.',
      }),
  })
  .openapi({ description: 'A step in the build pipeline.', required: [] })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningSchema = z
  .object({
    priority: z
      .enum(['PRIORITY_UNSPECIFIED', 'INFO', 'WARNING', 'ALERT'])
      .exactOptional()
      .openapi({ description: 'The priority for this warning.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explanation of the warning generated.' }),
  })
  .openapi({
    description: 'A non-fatal problem encountered during the execution of the build.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning')

const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildSchema = z
  .object({
    approval:
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalSchema.exactOptional().openapi({
        description:
          "Output only. Describes this build's approval configuration, status, and result.",
        readOnly: true,
      }),
    artifacts: ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsSchema.exactOptional().openapi({
      description:
        'Artifacts produced by the build that should be uploaded upon successful completion of all build steps.',
    }),
    availableSecrets:
      ContaineranalysisGoogleDevtoolsCloudbuildV1SecretsSchema.exactOptional().openapi({
        description: 'Secrets and secret environment variables.',
      }),
    buildTriggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the request to create the build was received.',
        readOnly: true,
      }),
    failureInfo:
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoSchema.exactOptional().openapi({
        description: 'Output only. Contains information about the build when status=FAILURE.',
        readOnly: true,
      }),
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.",
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique identifier of the build.', readOnly: true }),
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.",
      }),
    logUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. URL to logs for this build in Google Cloud Console.',
        readOnly: true,
      }),
    logsBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service.",
        readOnly: true,
      }),
    options: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSchema.exactOptional().openapi({
      description: 'Special options for this build.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ID of the project.', readOnly: true }),
    queueTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.',
      }),
    results: ContaineranalysisGoogleDevtoolsCloudbuildV1ResultsSchema.exactOptional().openapi({
      description: 'Output only. Results of the build.',
      readOnly: true,
    }),
    secrets: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1SecretSchema)
      .exactOptional()
      .openapi({
        description:
          'Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. ',
      }),
    source: ContaineranalysisGoogleDevtoolsCloudbuildV1SourceSchema.exactOptional().openapi({
      description: 'The location of the source files to build.',
    }),
    sourceProvenance:
      ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenanceSchema.exactOptional().openapi({
        description: 'Output only. A permanent fixed identifier for source.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which execution of the build was started.',
        readOnly: true,
      }),
    status: z
      .enum([
        'STATUS_UNKNOWN',
        'PENDING',
        'QUEUED',
        'WORKING',
        'SUCCESS',
        'FAILURE',
        'INTERNAL_ERROR',
        'TIMEOUT',
        'CANCELLED',
        'EXPIRED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Status of the build.', readOnly: true }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Customer-readable message about the current status.',
        readOnly: true,
      }),
    steps: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepSchema)
      .exactOptional()
      .openapi({ description: 'Required. The operations to be performed on the workspace.' }),
    substitutions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Substitutions data for `Build` resource.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags for annotation of a `Build`. These are not docker tags.' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes.',
      }),
    timing: z
      .record(z.string(), ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.',
        readOnly: true,
      }),
    warnings: z
      .array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Non-fatal problems encountered during the execution of the build.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.',
    required: [],
  })
  .openapi('ContaineranalysisGoogleDevtoolsCloudbuildV1Build')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FixableTotalByDigestSchema = z
  .object({
    fixableCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of fixable vulnerabilities associated with this resource.',
      }),
    resource: ResourceSchema.exactOptional().openapi({ description: 'The affected resource.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'MINIMAL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
      .exactOptional()
      .openapi({
        description:
          'The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities.',
      }),
    totalCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total number of vulnerabilities associated with this resource.',
      }),
  })
  .openapi({
    description: 'Per resource and severity counts of fixable and total vulnerabilities.',
    required: [],
  })
  .openapi('FixableTotalByDigest')

const GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GetPolicyOptions')

const GetIamPolicyRequestSchema = z
  .object({
    options: GetPolicyOptionsSchema.exactOptional().openapi({
      description:
        'OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.',
    }),
  })
  .openapi({ description: 'Request message for `GetIamPolicy` method.', required: [] })
  .openapi('GetIamPolicyRequest')

const GoogleDevtoolsContaineranalysisV1alpha1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time that this operation was marked completed or failed.',
      }),
  })
  .openapi({
    description:
      'Metadata for all operations used and required for all operations that created by Container Analysis Providers',
    required: [],
  })
  .openapi('GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata')

const ListNoteOccurrencesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to provide to skip to a particular spot in the list.' }),
    occurrences: z
      .array(OccurrenceSchema)
      .exactOptional()
      .openapi({ description: 'The occurrences attached to the specified note.' }),
  })
  .openapi({ description: 'Response for listing occurrences for a note.', required: [] })
  .openapi('ListNoteOccurrencesResponse')

const ListNotesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.',
      }),
    notes: z.array(NoteSchema).exactOptional().openapi({ description: 'The notes requested.' }),
  })
  .openapi({ description: 'Response for listing notes.', required: [] })
  .openapi('ListNotesResponse')

const ListOccurrencesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.',
      }),
    occurrences: z
      .array(OccurrenceSchema)
      .exactOptional()
      .openapi({ description: 'The occurrences requested.' }),
  })
  .openapi({ description: 'Response for listing occurrences.', required: [] })
  .openapi('ListOccurrencesResponse')

const PolicySchema = z
  .object({
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

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
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

const VulnerabilityOccurrencesSummarySchema = z
  .object({
    counts: z
      .array(FixableTotalByDigestSchema)
      .exactOptional()
      .openapi({
        description: 'A listing by resource of the number of fixable and total vulnerabilities.',
      }),
  })
  .openapi({
    description:
      'A summary of how many vulnerability occurrences there are per resource and severity type.',
    required: [],
  })
  .openapi('VulnerabilityOccurrencesSummary')

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
  description: 'Gets the specified occurrence.',
  operationId: 'containeranalysis.projects.occurrences.get',
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
              'Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.',
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
      content: { 'application/json': { schema: OccurrenceSchema } },
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
    'Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.',
  operationId: 'containeranalysis.projects.occurrences.delete',
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
              'Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.',
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

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates the specified occurrence.',
  operationId: 'containeranalysis.projects.occurrences.patch',
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
            description: 'The fields to update.',
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
              'Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OccurrenceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OccurrenceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameNotesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/notes',
  tags: ['projects'],
  description:
    'Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.',
  operationId: 'containeranalysis.projects.occurrences.getNotes',
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
              'Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.',
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
      content: { 'application/json': { schema: NoteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOccurrencesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/occurrences',
  tags: ['projects'],
  description:
    'Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.',
  operationId: 'containeranalysis.projects.notes.occurrences.list',
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
            description: 'The filter expression.',
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
            description: 'Number of occurrences to return in the list.',
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
            description: 'Token to provide to skip to a particular spot in the list.',
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
            description:
              'Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.',
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
      content: { 'application/json': { schema: ListNoteOccurrencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentNotesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/notes',
  tags: ['projects'],
  description: 'Lists notes for the specified project.',
  operationId: 'containeranalysis.projects.notes.list',
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
            description: 'The filter expression.',
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
              'Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.',
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
            description: 'Token to provide to skip to a particular spot in the list.',
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
              'Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.',
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
      content: { 'application/json': { schema: ListNotesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentNotesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/notes',
  tags: ['projects'],
  description: 'Creates a new note.',
  operationId: 'containeranalysis.projects.notes.create',
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
      noteId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The ID to use for this note.',
            in: 'query',
            name: 'noteId',
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
              'Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NoteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NoteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentNotesBatchCreateRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/notes:batchCreate',
  tags: ['projects'],
  description: 'Creates new notes in batch.',
  operationId: 'containeranalysis.projects.notes.batchCreate',
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
              'Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCreateNotesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchCreateNotesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentOccurrencesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/occurrences',
  tags: ['projects'],
  description: 'Lists occurrences for the specified project.',
  operationId: 'containeranalysis.projects.occurrences.list',
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
            description: 'The filter expression.',
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
              'Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.',
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
            description: 'Token to provide to skip to a particular spot in the list.',
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
              'Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.',
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
      content: { 'application/json': { schema: ListOccurrencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentOccurrencesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/occurrences',
  tags: ['projects'],
  description: 'Creates a new occurrence.',
  operationId: 'containeranalysis.projects.occurrences.create',
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
              'Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OccurrenceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OccurrenceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentOccurrencesBatchCreateRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/occurrences:batchCreate',
  tags: ['projects'],
  description: 'Creates new occurrences in batch.',
  operationId: 'containeranalysis.projects.occurrences.batchCreate',
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
              'Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCreateOccurrencesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchCreateOccurrencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentOccurrencesVulnerabilitySummaryRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/occurrences:vulnerabilitySummary',
  tags: ['projects'],
  description: 'Gets a summary of the number and severity of occurrences.',
  operationId: 'containeranalysis.projects.occurrences.getVulnerabilitySummary',
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
            description: 'The filter expression.',
            in: 'query',
            name: 'filter',
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
              'Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.',
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
      content: { 'application/json': { schema: VulnerabilityOccurrencesSummarySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.',
  operationId: 'containeranalysis.projects.occurrences.getIamPolicy',
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
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIamPolicyRequestSchema } } },
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
    'Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.',
  operationId: 'containeranalysis.projects.occurrences.setIamPolicy',
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
    'Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.',
  operationId: 'containeranalysis.projects.occurrences.testIamPermissions',
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
