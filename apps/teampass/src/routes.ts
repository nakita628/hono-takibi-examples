import { createRoute, z } from '@hono/zod-openapi'

type FolderNodeType = {
  id?: number
  title?: string
  isVisible?: boolean
  complexity?: 0 | 20 | 38 | 48 | 60
  childrens?: FolderNodeType[]
}

const ProblemSchema = z
  .object({
    type: z.string().default('about:blank').exactOptional(),
    title: z.string().exactOptional(),
    status: z.int().exactOptional(),
    detail: z.string().exactOptional(),
    error: z.string().exactOptional(),
  })
  .openapi({
    description:
      "RFC 9457 problem details; the legacy 'error' member duplicates 'detail' for backward compatibility.",
    required: [],
  })
  .openapi('Problem')

const CustomFieldSchema = z
  .object({
    id: z.int().exactOptional(),
    title: z.string().exactOptional(),
    type: z.string().exactOptional(),
    masked: z.int().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    description:
      "A custom field value attached to an item. Fields restricted via 'Restrict Visibility to' (categories.role_visibility) are omitted entirely for users holding none of the required roles; their value is never decrypted nor returned. No admin bypass.",
    required: [],
  })
  .openapi('CustomField')

const ItemSchema = z
  .object({
    id: z.int().exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Monotonic revision of the item, bumped on every content change. Compare it against a cached copy to detect staleness; the larger value is the newer one.',
      }),
    revision_changed_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unix UTC timestamp in seconds paired with revision. It changes on functional content revisions, never on reads or ciphertext-only rewrites; null means the date is unknown.',
      }),
    label: z.string().exactOptional(),
    description: z.string().exactOptional(),
    pwd: z.string().exactOptional().openapi({ description: 'Decrypted password' }),
    url: z.string().exactOptional(),
    login: z.string().exactOptional(),
    email: z.string().exactOptional(),
    viewed_no: z.int().exactOptional(),
    fa_icon: z.string().nullable().exactOptional(),
    inactif: z.int().exactOptional(),
    perso: z.int().exactOptional(),
    id_tree: z.int().exactOptional(),
    folder_label: z.string().nullable().exactOptional(),
    path: z.string().exactOptional(),
    totp: z.string().nullable().exactOptional(),
    totp_algorithm: z.enum(['sha1', 'sha256', 'sha512']).exactOptional(),
    totp_digits: z.union([z.literal(6), z.literal(8)]).exactOptional(),
    totp_period: z.int().min(1).max(86400).exactOptional(),
    favicon_url: z.string().nullable().exactOptional(),
    tags: z.string().nullable().exactOptional(),
    anyone_can_modify: z.union([z.int(), z.string()]).exactOptional(),
    fields: z.array(CustomFieldSchema).exactOptional(),
    renewal_period: z
      .int()
      .min(0)
      .max(36500)
      .exactOptional()
      .openapi({
        description:
          'Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Ordinary renewal is inactive for all LAPR-linked items while the LAPR module is enabled.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Item')

const ItemSummarySchema = z
  .object({
    id: z.int().exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Monotonic revision of the item, bumped on every content change. Compare it against a cached copy to detect staleness; the larger value is the newer one.',
      }),
    revision_changed_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unix UTC timestamp in seconds paired with revision; null when the date is unknown.',
      }),
    label: z.string().exactOptional(),
    login: z.string().exactOptional(),
    url: z.string().exactOptional(),
    folder_id: z.int().exactOptional(),
    has_otp: z.int().exactOptional(),
    favicon_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ItemSummary')

const ItemCreateBodySchema = z
  .object({
    label: z.string(),
    folder_id: z.int(),
    password: z.string(),
    description: z.string().exactOptional(),
    login: z.string(),
    email: z.string(),
    url: z.string(),
    tags: z.string(),
    anyone_can_modify: z.int(),
    icon: z.string().exactOptional(),
    totp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base32 secret or otpauth://totp provisioning URI' }),
    totp_algorithm: z.enum(['sha1', 'sha256', 'sha512']).default('sha1').exactOptional(),
    totp_digits: z
      .union([z.literal(6), z.literal(8)])
      .default(6)
      .exactOptional(),
    totp_period: z.int().min(1).max(86400).default(30).exactOptional(),
    fields: z
      .array(
        z
          .object({ id: z.int().exactOptional(), value: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    renewal_period: z
      .int()
      .min(0)
      .max(36500)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Ordinary renewal is inactive for all LAPR-linked items while the LAPR module is enabled.',
      }),
  })
  .openapi({
    required: [
      'label',
      'folder_id',
      'password',
      'login',
      'email',
      'url',
      'tags',
      'anyone_can_modify',
    ],
  })
  .openapi('ItemCreateBody')

const ItemUpdateBodySchema = z
  .object({
    id: z.int(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Optional precondition, not an updatable field: the revision the edit was based on. The update is refused with 409 when the server has moved on since. Omitting it keeps the previous last-writer-wins behaviour.',
      }),
    label: z.string().exactOptional(),
    password: z.string().exactOptional(),
    description: z.string().exactOptional(),
    login: z.string().exactOptional(),
    email: z.string().exactOptional(),
    url: z.string().exactOptional(),
    tags: z.string().exactOptional(),
    anyone_can_modify: z.int().exactOptional(),
    icon: z.string().exactOptional(),
    folder_id: z.int().exactOptional(),
    totp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base32 secret, otpauth://totp provisioning URI, or an empty string to remove TOTP',
      }),
    totp_algorithm: z.enum(['sha1', 'sha256', 'sha512']).exactOptional(),
    totp_digits: z.union([z.literal(6), z.literal(8)]).exactOptional(),
    totp_period: z.int().min(1).max(86400).exactOptional(),
    fields: z
      .array(
        z
          .object({ id: z.int().exactOptional(), value: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    renewal_period: z
      .int()
      .min(0)
      .max(36500)
      .exactOptional()
      .openapi({
        description:
          'Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Omission preserves the stored value. Changing the period does not reset password age. While LAPR is enabled, changing this value for a managed account or an endpoint connection credential returns HTTP 409; omitting it or resending the current value is allowed.',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ItemUpdateBody')

const FolderCreateBodySchema = z
  .unknown()
  .superRefine((val, ctx) => {
    {
      const ifOk = z
        .object({ private: z.literal(true) })
        .openapi({ required: ['private'] })
        .safeParse(val).success
      if (!ifOk) {
        const Schema = z
          .unknown()
          .superRefine((val, ctx) => {
            if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
              if (!Object.hasOwn(val, 'parent_id')) {
                ctx.addIssue({ code: 'custom' })
              }
              if (!Object.hasOwn(val, 'complexity')) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          })
          .openapi({ required: ['parent_id', 'complexity'] })
        if (!Schema.safeParse(val).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
  })
  .and(
    z
      .object({
        title: z.string(),
        parent_id: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "Parent folder id (0 = root, requires user_can_create_root_folder). Optional when 'private' is true — defaults to the caller's personal root.",
          }),
        complexity: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "Password complexity level. Required for a shared target; optional (default 0) when the resolved target is personal (e.g. 'private' is true).",
          }),
        private: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Optional. When true, creates a personal (private) folder under the caller's personal root without needing its id (requires personal folders to be enabled for the user). The personal_folder flag is never accepted directly from the client — it is derived server-side from the resolved parent.",
          }),
        duration: z.int().exactOptional(),
        create_auth_without: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "Allow item creation below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Does not relax the subfolder complexity floor.",
          }),
        edit_auth_without: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "Allow item editing below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Inheritance is a one-time copy, independent of role permission inheritance.",
          }),
        icon: z.string().exactOptional(),
        icon_selected: z.string().exactOptional(),
        access_rights: z
          .enum(['R', 'W', 'NE', 'ND', 'NDNE'])
          .default('W')
          .exactOptional()
          .openapi({
            description:
              "Access level granted to the caller's roles on the new folder. Defaults to W when omitted.",
          }),
      })
      .openapi({ required: ['title'] }),
  )
  .openapi({ required: ['title'] })
  .openapi('FolderCreateBody')

const FolderUpdateBodySchema = z
  .object({
    id: z.int().openapi({ description: 'Folder id to update (required).' }),
    title: z.string().exactOptional(),
    parent_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'New parent id (move). Cross-domain personal ↔ shared moves are rejected (422).',
      }),
    complexity: z
      .union([z.literal(0), z.literal(20), z.literal(38), z.literal(48), z.literal(60)])
      .exactOptional()
      .openapi({
        description:
          'Password complexity level. Must be one of the TeamPass levels; any other value is rejected with 422.',
      }),
    duration: z.int().exactOptional(),
    create_auth_without: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Allow item creation below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.",
      }),
    edit_auth_without: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Allow item editing below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.",
      }),
    deletion_protected: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'Administrative protection against accidental deletion (0/1). Only an administrator may change it. A protected folder also prevents deletion of an ancestor subtree containing it.',
      }),
    icon: z.string().exactOptional(),
    icon_selected: z.string().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('FolderUpdateBody')

const CreatedResultSchema = z
  .object({
    error: z.boolean().exactOptional(),
    message: z.string().exactOptional(),
    newId: z.int().exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({ description: 'Revision allocated to the new item' }),
    revision_changed_at: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unix UTC timestamp in seconds paired with the allocated revision; null when the date is unknown.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreatedResult')

const FolderUpdateResultSchema = z
  .object({
    error: z.boolean().exactOptional(),
    message: z.string().exactOptional(),
    id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FolderUpdateResult')

const FolderDeleteResultSchema = z
  .object({
    error: z.boolean().exactOptional(),
    message: z.string().exactOptional(),
    deleted_folders: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'Ids of the folder and every descendant that was soft-deleted.' }),
    deleted_items_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FolderDeleteResult')

const FolderNodeSchema: z.ZodType<FolderNodeType> = z
  .lazy(() =>
    z
      .object({
        id: z.int().exactOptional(),
        title: z.string().exactOptional(),
        isVisible: z.boolean().exactOptional(),
        complexity: z
          .union([z.literal(0), z.literal(20), z.literal(38), z.literal(48), z.literal(60)])
          .exactOptional()
          .openapi({
            description:
              'Minimum password strength required for items in this folder. 0 when no rule is set.',
          }),
        childrens: z.array(FolderNodeSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('FolderNode')

const WritableFolderSchema = z
  .object({
    id: z.int(),
    label: z.string(),
    level: z.int(),
    parent_id: z.int(),
    first_position: z.int(),
    position: z
      .int()
      .openapi({
        description:
          'MPTT left bound. The list is already sorted on it; use it to restore tree order after a client-side re-sort.',
      }),
    complexity: z
      .union([z.literal(0), z.literal(20), z.literal(38), z.literal(48), z.literal(60)])
      .openapi({
        description:
          'Minimum password strength required for items in this folder. 0 when no rule is set.',
      }),
    is_readonly: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          '1 when the resolved item access type is R. ND/NE/NDNE are NOT read-only — check can_edit and can_delete.',
      }),
    access_type: z
      .enum(['R', 'W', 'NE', 'ND', 'NDNE'])
      .openapi({
        description:
          "Effective access level for items contained in this folder, least-permissive-wins across all the user's roles (R > NDNE > NE = ND > W).",
      }),
    can_create: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Item right: 1 when the user may create an item in this folder (false only for R). This does not authorize creating a subfolder.',
      }),
    can_edit: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Item right: 1 when the user may edit existing items in this folder (false for NE, NDNE and R). This does not authorize renaming or moving the folder.',
      }),
    can_delete: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Item right: 1 when the user may delete items in this folder (false for ND, NDNE and R). This does not authorize deleting the folder.',
      }),
    is_personal: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          "1 when the folder is part of a personal folder tree; 0 for the shared domain. This endpoint only ever lists the caller's own personal folders, so in practice 1 means 'mine'.",
      }),
    is_personal_root: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          '1 for the protected root of the personal folder domain. A personal root cannot be renamed, moved or deleted.',
      }),
    deletion_protected: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description: '1 when this folder itself is protected against accidental deletion.',
      }),
    contains_deletion_protected: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          '1 when this folder or any descendant is protected, so deleting this subtree is blocked.',
      }),
    can_create_subfolder: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Folder-management hint: 1 when POST /folder/create may use this folder as its parent according to the current access, read-only state, API create permission and global folder-management rules. The create route performs the final validation.',
      }),
    can_rename_folder: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Folder-management hint: 1 when the source folder is eligible for rename according to the current access, read-only state, API update permission, global folder-management rules and personal-root protection. PUT /folder/update performs the final validation.',
      }),
    can_move_folder: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Folder-management hint for the source only: 1 when the source folder is eligible to move. PUT /folder/update separately validates the chosen destination, including access, read-only state, cycles, personal/shared domain boundaries and root permission.',
      }),
    can_delete_folder: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Folder-management hint: 1 when the source folder is eligible for deletion according to the current access, read-only state, API delete permission, global folder-management rules, personal-root protection and administrative deletion protection in its subtree. DELETE /folder/delete performs the final validation, including LAPR relationships at mutation time.',
      }),
  })
  .openapi({
    required: [
      'id',
      'label',
      'level',
      'parent_id',
      'first_position',
      'position',
      'complexity',
      'is_readonly',
      'access_type',
      'can_create',
      'can_edit',
      'can_delete',
      'is_personal',
      'is_personal_root',
      'can_create_subfolder',
      'can_rename_folder',
      'can_move_folder',
      'can_delete_folder',
      'deletion_protected',
      'contains_deletion_protected',
    ],
  })
  .openapi('WritableFolder')

const UserSchema = z
  .object({
    id: z.int().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().nullable().exactOptional(),
    lastname: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    admin: z.int().exactOptional(),
    gestionnaire: z.int().exactOptional(),
    disabled: z.int().exactOptional(),
    last_connection_time: z.union([z.int(), z.string()]).nullable().exactOptional(),
    is_ready_for_usage: z.int().exactOptional(),
    personal_folder: z.int().exactOptional(),
    auth_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const WebauthnCreateBodySchema = z
  .object({
    item_id: z
      .int()
      .min(1)
      .openapi({
        description:
          "Existing item the passkey is attached to. It inherits the item's folder rights, restriction and recycle bin.",
      }),
    rp_id: z
      .string()
      .openapi({
        description:
          'Relying party id requested by the site (a domain, e.g. github.com). Must be the host of the client data origin or one of its parent domains.',
      }),
    rp_name: z.string().max(255).exactOptional(),
    user_handle: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Relying party user id (1 to 64 bytes), base64url.' }),
    user_name: z.string().max(255).exactOptional(),
    user_display_name: z.string().max(255).exactOptional(),
    pub_key_cred_params: z
      .array(
        z.xor([
          z.int(),
          z
            .object({ type: z.string().exactOptional(), alg: z.int().exactOptional() })
            .openapi({ required: [] }),
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Algorithms accepted by the relying party, as COSE identifiers or PublicKeyCredentialParameters objects. ES256 (-7) must be among them; an empty list means the WebAuthn default.',
      }),
    client_data_json: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description:
          "Client data JSON built by the extension (type webauthn.create), base64url. Its origin must be the tab's real origin, taken from the browser, never from the page.",
      }),
    user_verified: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the extension verified the user (sets the UV flag).' }),
    excluded_credential_ids: z
      .array(
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .openapi({ description: 'Credential id, base64url.' }),
      )
      .max(100)
      .exactOptional()
      .openapi({ description: 'excludeCredentials of the relying party. A match answers 409.' }),
  })
  .openapi({ required: ['item_id', 'rp_id', 'user_handle', 'client_data_json'] })
  .openapi('WebauthnCreateBody')

const WebauthnCreatedCredentialSchema = z
  .object({
    id: z.int().openapi({ description: 'TeamPass identifier of the passkey' }),
    item_id: z.int(),
    rp_id: z.string(),
    credential_id: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description: 'Server-generated credential id, also the rawId of the PublicKeyCredential.',
      }),
    user_handle: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Relying party user id' }),
    attestation_object: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'CBOR attestation object, format none.' }),
    authenticator_data: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description:
          'Authenticator data, for AuthenticatorAttestationResponse.getAuthenticatorData().',
      }),
    public_key: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description:
          'DER SubjectPublicKeyInfo, for AuthenticatorAttestationResponse.getPublicKey().',
      }),
    public_key_algorithm: z.literal(-7),
    transports: z.array(z.string()),
  })
  .openapi({
    required: [
      'id',
      'item_id',
      'rp_id',
      'credential_id',
      'user_handle',
      'attestation_object',
      'authenticator_data',
      'public_key',
      'public_key_algorithm',
      'transports',
    ],
  })
  .openapi('WebauthnCreatedCredential')

const WebauthnCredentialSchema = z
  .object({
    id: z.int().exactOptional(),
    credential_id: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .exactOptional()
      .openapi({ description: 'Credential id' }),
    rp_id: z.string().exactOptional(),
    rp_name: z.string().nullable().exactOptional(),
    user_handle: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .exactOptional()
      .openapi({ description: 'Relying party user id' }),
    user_name: z.string().nullable().exactOptional(),
    user_display_name: z.string().nullable().exactOptional(),
    item_id: z.int().exactOptional(),
    item_label: z.string().exactOptional(),
    folder_id: z.int().exactOptional(),
    created_at: z.int().exactOptional().openapi({ description: 'Unix UTC timestamp' }),
    last_used_at: z.int().nullable().exactOptional().openapi({ description: 'Unix UTC timestamp' }),
  })
  .openapi({ description: 'Passkey metadata. Key material is never returned.', required: [] })
  .openapi('WebauthnCredential')

const WebauthnAssertBodySchema = z
  .object({
    credential_id: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Credential id' }),
    rp_id: z
      .string()
      .openapi({
        description: "Relying party id requested by the site. Must equal the passkey's.",
      }),
    client_data_json: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description:
          'Client data JSON built by the extension (type webauthn.get), base64url. Signed as is.',
      }),
    user_verified: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['credential_id', 'rp_id', 'client_data_json'] })
  .openapi('WebauthnAssertBody')

const WebauthnAssertionSchema = z
  .object({
    credential_id: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Credential id' }),
    authenticator_data: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Authenticator data' }),
    signature: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({
        description: 'DER ECDSA signature of authenticatorData ‖ SHA-256(clientDataJSON)',
      }),
    user_handle: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .openapi({ description: 'Relying party user id' }),
  })
  .openapi({ required: ['credential_id', 'authenticator_data', 'signature', 'user_handle'] })
  .openapi('WebauthnAssertion')

const DevicePairingClaimSchema = z
  .object({
    pairing_id: z.string().regex(/^[a-f0-9]{32}$/),
    pairing_secret: z.string().regex(/^[A-Za-z0-9_-]{43}$/),
    challenge: z.string().regex(/^[A-Za-z0-9_-]{43}$/),
    public_key: z
      .string()
      .max(2048)
      .openapi({
        description: 'Ephemeral RSA-3072 public PEM, exponent 65537; private keys are refused.',
      }),
    device_label: z.string().min(1).max(128),
  })
  .openapi({
    required: ['pairing_id', 'pairing_secret', 'challenge', 'public_key', 'device_label'],
  })
  .openapi('DevicePairingClaim')

const DevicePairingProofSchema = z
  .object({
    pairing_id: z.string().regex(/^[a-f0-9]{32}$/),
    claim_id: z.string().regex(/^[a-f0-9]{32}$/),
    verifier: z.string().regex(/^[A-Za-z0-9_-]{43}$/),
  })
  .openapi({ required: ['pairing_id', 'claim_id', 'verifier'] })
  .openapi('DevicePairingProof')

const DevicePairingStateSchema = z
  .object({
    pairing_id: z.string().regex(/^[a-f0-9]{32}$/),
    state: z.enum([
      'awaiting_scan',
      'awaiting_approval',
      'approved',
      'delivered',
      'completed',
      'rejected',
      'cancelled',
      'expired',
    ]),
    expires_at: z.int(),
    server_time: z.int(),
    poll_interval: z.literal(2),
    claim_id: z
      .string()
      .regex(/^[a-f0-9]{32}$/)
      .exactOptional(),
    comparison_code: z
      .string()
      .regex(/^[0-9]{6}$/)
      .exactOptional(),
    key_fingerprint: z
      .string()
      .regex(/^[a-f0-9]{64}$/)
      .exactOptional(),
    handoff: z
      .object({
        version: z.literal(1),
        algorithm: z.literal('RSA-OAEP-256'),
        key_fingerprint: z.string(),
        ciphertext: z
          .string()
          .openapi({
            description:
              'Base64url OAEP ciphertext of the 64 ASCII PAT characters. SHA-256, MGF1-SHA256, empty label.',
          }),
        server_url: z.url(),
        username: z.string(),
        delivery_until: z.int(),
        credential_id: z.int(),
        credential_expires_at: z.int(),
      })
      .exactOptional()
      .openapi({
        required: [
          'version',
          'algorithm',
          'key_fingerprint',
          'ciphertext',
          'server_url',
          'username',
          'delivery_until',
          'credential_id',
          'credential_expires_at',
        ],
      }),
  })
  .openapi({ required: ['pairing_id', 'state', 'expires_at', 'server_time', 'poll_interval'] })
  .openapi('DevicePairingState')

const DevicePairingCapabilitiesSchema = z
  .object({
    type: z.literal('teampass.device-pairing'),
    version: z.literal(1),
    experimental: z.literal(true),
    algorithm: z.literal('RSA-OAEP-256'),
    key_bits: z.literal(3072),
    credential_status: z.literal(true).exactOptional(),
    credential_lifetime_days: z.int().min(1).max(3650).exactOptional(),
    ttl: z.literal(180),
    poll_interval: z.literal(2),
  })
  .openapi({
    required: ['type', 'version', 'experimental', 'algorithm', 'key_bits', 'ttl', 'poll_interval'],
  })
  .openapi('DevicePairingCapabilities')

const JwtTokenResponse = {
  description: 'Authentication succeeded',
  content: {
    'application/json': {
      schema: z
        .object({
          token: z.string(),
          teampass_version: z
            .string()
            .regex(/^\d+\.\d+\.\d+\.\d+$/)
            .openapi({
              description:
                'Complete TeamPass server release version returned in the response body, outside the JWT.',
              example: '3.2.1.2',
            }),
          teampass_version_major: z
            .string()
            .regex(/^\d+\.\d+\.\d+$/)
            .openapi({
              description:
                'Base TeamPass server version (major.minor.patch) returned in the response body.',
              example: '3.2.1',
            }),
          teampass_version_minor: z
            .string()
            .regex(/^\d+$/)
            .openapi({
              description:
                'Final TeamPass release revision component returned in the response body.',
              example: '2',
            }),
        })
        .openapi({
          required: [
            'token',
            'teampass_version',
            'teampass_version_major',
            'teampass_version_minor',
          ],
        }),
    },
  },
}

const ExtensionSettingsResponse = {
  description: 'Browser extension connection settings',
  content: {
    'application/json': {
      schema: z
        .object({
          extension_fqdn: z.string(),
          extension_key: z.string(),
          extension_url: z.string(),
          teampass_version: z
            .string()
            .regex(/^\d+\.\d+\.\d+\.\d+$/)
            .openapi({
              description:
                'Complete TeamPass server release version, refreshed independently of authentication.',
              example: '3.2.1.2',
            }),
          teampass_version_major: z
            .string()
            .regex(/^\d+\.\d+\.\d+$/)
            .openapi({
              description: 'Base TeamPass server version (major.minor.patch).',
              example: '3.2.1',
            }),
          teampass_version_minor: z
            .string()
            .regex(/^\d+$/)
            .openapi({ description: 'Final TeamPass release revision component.', example: '2' }),
        })
        .openapi({
          required: [
            'extension_fqdn',
            'extension_key',
            'extension_url',
            'teampass_version',
            'teampass_version_major',
            'teampass_version_minor',
          ],
        }),
    },
  },
}

const BadRequestResponse = {
  description: 'Missing or invalid parameters',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const UnauthorizedResponse = {
  description: 'Missing, invalid or expired credentials/token',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const ForbiddenResponse = {
  description: 'Permission denied',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const NotFoundResponse = {
  description: 'Resource not found',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const MethodNotAllowedResponse = {
  description: 'HTTP method not supported for this endpoint (Allow header lists supported methods)',
  content: { 'application/problem+json': { schema: ProblemSchema } },
  headers: z.object({
    Allow: z
      .string()
      .exactOptional()
      .openapi({ param: { required: false } }),
  }),
}

const ConflictResponse = {
  description: 'The resource changed while the request was being processed',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const UnprocessableEntityResponse = {
  description: 'Validation failed',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const InternalErrorResponse = {
  description: 'Internal server error',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const ApiDisabledResponse = {
  description: 'API disabled in TeamPass settings',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const RateLimitedResponse = {
  description: 'Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)',
  content: { 'application/problem+json': { schema: ProblemSchema } },
  headers: z.object({
    'Retry-After': z
      .int()
      .exactOptional()
      .openapi({ description: 'Seconds to wait before retrying', param: { required: false } }),
  }),
}

const HttpsRequiredResponse = {
  description:
    'Request rejected because api_require_https is enabled and the request was sent over plain HTTP',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(500),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Maximum number of results (capped at 500)',
      schema: { type: 'integer', minimum: 0, maximum: 500 },
      required: false,
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      description: 'Number of results to skip (pagination)',
      schema: { type: 'integer', minimum: 0 },
      required: false,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .regex(/^[!-~]+$/)
  .min(1)
  .max(128)
  .exactOptional()
  .openapi({
    param: {
      name: 'Idempotency-Key',
      in: 'header',
      required: false,
      description:
        'Opaque 1-128 character visible-ASCII key, scoped to the authenticated user and API operation. Raw keys are never persisted.',
      schema: { type: 'string', minLength: 1, maxLength: 128, pattern: '^[!-~]+$' },
    },
  })

const XTotalCountHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'Total number of matching entries before pagination',
    param: { required: false },
  })

const IdempotencyReplayedHeaderSchema = z
  .literal('true')
  .exactOptional()
  .openapi({
    description:
      'Present with value true when the stored response was replayed without executing the mutation.',
    param: { required: false },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const postAuthorizeRoute = createRoute({
  method: 'post',
  path: '/authorize',
  summary: 'Get a JWT from login + password + API key',
  operationId: 'authorize',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ login: z.string(), password: z.string(), apikey: z.string() })
            .openapi({ required: ['login', 'password', 'apikey'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ login: z.string(), password: z.string(), apikey: z.string() })
            .openapi({ required: ['login', 'password', 'apikey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: JwtTokenResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: HttpsRequiredResponse,
    405: MethodNotAllowedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postAuthorizeTokenRoute = createRoute({
  method: 'post',
  path: '/authorizeToken',
  summary: 'Get a JWT from a Personal Access Token (OAuth2/SSO users)',
  operationId: 'authorizeToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ login: z.string(), token: z.string().regex(/^[a-f0-9]{64}$/) })
            .openapi({ required: ['login', 'token'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ login: z.string(), token: z.string().regex(/^[a-f0-9]{64}$/) })
            .openapi({ required: ['login', 'token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: JwtTokenResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: HttpsRequiredResponse,
    405: MethodNotAllowedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postAuthLogoutRoute = createRoute({
  method: 'post',
  path: '/auth/logout',
  summary: 'Revoke the current API session',
  description:
    "Flags the api_sessions row matching the token's jti as revoked — the JWT is then rejected on every endpoint until it expires. Legacy tokens without a session row invalidate the user's single legacy API session instead.",
  operationId: 'authLogout',
  responses: {
    200: {
      description: 'Session revoked',
      content: {
        'application/json': {
          schema: z
            .object({ error: z.boolean().exactOptional(), message: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemGetRoute = createRoute({
  method: 'get',
  path: '/item/get',
  summary: 'Get item(s) by id, label or description',
  description:
    "Exactly one of 'id', 'label' or 'description' is required. 'label' and 'description' lookups are searches: they accept 'like', 'limit' and 'offset' and return X-Total-Count. renewal_period contains the stored individual renewal setting, not the effective folder/item deadline.",
  operationId: 'itemGet',
  request: {
    query: z.object({
      id: z
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
          param: { name: 'id', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'label', in: 'query', schema: { type: 'string' }, required: false },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'description', in: 'query', schema: { type: 'string' }, required: false },
        }),
      like: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'like',
            in: 'query',
            description: "1 = LIKE %value% search ('%' and '_' are escaped)",
            schema: { type: 'integer', enum: [0, 1] },
            required: false,
          },
        }),
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Matching items (empty array when none)',
      content: { 'application/json': { schema: z.array(ItemSchema) } },
      headers: z.object({ 'X-Total-Count': XTotalCountHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemInFoldersRoute = createRoute({
  method: 'get',
  path: '/item/inFolders',
  summary: 'Get items contained in a list of folders',
  operationId: 'itemInFolders',
  request: {
    query: z.object({
      folders: z
        .string()
        .openapi({
          param: {
            name: 'folders',
            in: 'query',
            required: true,
            description: 'Comma-separated or JSON array of folder ids',
            schema: { type: 'string' },
            example: '1,2,3',
          },
        }),
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Items in the requested folders (empty array when none)',
      content: { 'application/json': { schema: z.array(ItemSchema) } },
      headers: z.object({ 'X-Total-Count': XTotalCountHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemFindByUrlRoute = createRoute({
  method: 'get',
  path: '/item/findByUrl',
  summary: 'Find items whose URL matches',
  operationId: 'itemFindByUrl',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: { name: 'url', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Matching items (empty array when none)',
      content: { 'application/json': { schema: z.array(ItemSummarySchema) } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemGetOtpRoute = createRoute({
  method: 'get',
  path: '/item/getOtp',
  summary: 'Get the current TOTP code of an item',
  operationId: 'itemGetOtp',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'query', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current TOTP code',
      content: {
        'application/json': {
          schema: z
            .object({
              otp_code: z.string().exactOptional(),
              expires_in: z.int().exactOptional(),
              item_id: z.int().exactOptional(),
              algorithm: z.enum(['sha1', 'sha256', 'sha512']).exactOptional(),
              digits: z.union([z.literal(6), z.literal(8)]).exactOptional(),
              period: z.int().min(1).max(86400).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemChangesRoute = createRoute({
  method: 'get',
  path: '/item/changes',
  summary: 'Changes to apply to a client cache since a revision',
  description:
    'Delta feed for offline clients. Returns the items that changed after the given revision, and the ones the client must drop. Cursor based: store the returned cursor and pass it as `since` on the next call, repeating while `has_more` is true. A `full_sync_required` of true means the cursor cannot be served — read the vault through item/inFolders and adopt the returned cursor. Start there on a first synchronization, with `since=0`.',
  operationId: 'itemChanges',
  request: {
    query: z.object({
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'since',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 0 },
            description:
              'Cursor returned by the previous call, exclusive. 0 on a first synchronization.',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, maximum: 1000, default: 200 },
            description: 'Maximum journal entries scanned in one call.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Changes since the given revision',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .int()
                .exactOptional()
                .openapi({ description: 'Cursor to store and send as `since` on the next call.' }),
              has_more: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'More changes are waiting: call again with the returned cursor.',
                }),
              full_sync_required: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The cursor cannot be served. Rebuild the cache and adopt the returned cursor.',
                }),
              changed: z.array(ItemSchema).exactOptional(),
              removed: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      revision: z.int().exactOptional(),
                      revision_changed_at: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unix UTC timestamp in seconds of the winning journal revision.',
                        }),
                      reason: z
                        .enum(['deleted', 'purged', 'out_of_scope'])
                        .exactOptional()
                        .openapi({
                          description:
                            'deleted: soft deleted. purged: permanently removed. out_of_scope: still exists but no longer readable by the caller.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getItemAllTagsRoute = createRoute({
  method: 'get',
  path: '/item/allTags',
  summary: 'Get the distinct item tags the caller can read',
  operationId: 'itemAllTags',
  responses: {
    200: {
      description: 'Tag list',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const postItemCreateRoute = createRoute({
  method: 'post',
  path: '/item/create',
  summary: 'Create a new item',
  description:
    'All required fields must be present, even if empty. renewal_period is optional and defaults to 0. Idempotency-Key is optional; within the configured offline synchronization window (90 days by default, 0 for no limit) the same user, key and canonical creation intent return the original 201 response without repeating side effects.',
  operationId: 'itemCreate',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    body: { content: { 'application/json': { schema: ItemCreateBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Item created',
      content: { 'application/json': { schema: CreatedResultSchema } },
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Path-absolute reference of the created resource (item/get?id=N)',
            param: { required: false },
          }),
        'Idempotency-Replayed': IdempotencyReplayedHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const putItemUpdateRoute = createRoute({
  method: 'put',
  path: '/item/update',
  summary: 'Update an existing item',
  description:
    "Requires 'id' plus at least one updatable field (label, password, description, login, email, url, tags, anyone_can_modify, icon, folder_id, totp, fields, renewal_period). Moving an item out of a personal folder into a shared one redistributes its encryption keys synchronously, so it must be requested on its own: combining it with any other updatable field returns 422. It returns 422 as well when a source encryption key cannot be recovered (the item stays personal), and 409 when the item was modified concurrently. Moving a shared item into the caller's personal folder deletes the other users' encryption keys in the same step; it returns 422 when the caller does not hold every key of the item yet. A move requires the delete right on the item's current folder and the edit right on the target folder, like the web interface: it returns 403 on a current folder granted as ND or NDNE, or a target folder granted as NE, NDNE or R. Omitting renewal_period preserves it; 0 disables the individual policy without resetting password age. A change to renewal_period returns 409 for an item linked to LAPR while the module is enabled (managed account or endpoint connection credential); an unchanged value is accepted.",
  operationId: 'itemUpdate',
  request: {
    body: { content: { 'application/json': { schema: ItemUpdateBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Item updated',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.boolean().exactOptional(),
              message: z.string().exactOptional(),
              item_id: z.int().exactOptional(),
              revision: z
                .int()
                .exactOptional()
                .openapi({ description: 'Revision of the item after the update' }),
              revision_changed_at: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Unix UTC timestamp in seconds paired with the returned revision; null when the date is unknown.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const deleteItemDeleteRoute = createRoute({
  method: 'delete',
  path: '/item/delete',
  summary: 'Soft-delete an item',
  description:
    'The optional revision is an optimistic-concurrency precondition. Idempotency-Key makes a successful deletion replayable for the configured offline synchronization window (90 days by default, 0 for no limit) without allocating another revision or repeating side effects.',
  operationId: 'itemDelete',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      revision: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0).max(4294967295),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'revision',
            in: 'query',
            required: false,
            allowEmptyValue: true,
            description:
              'Current item revision expected by the caller. A mismatch returns 409 before any mutation; an empty value is treated as omitted.',
            schema: { type: 'integer', minimum: 0, maximum: 4294967295 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.boolean().exactOptional(),
              message: z.string().exactOptional(),
              item_id: z.int().exactOptional(),
              revision: z
                .int()
                .exactOptional()
                .openapi({ description: 'Deletion revision exposed by item/changes' }),
              revision_changed_at: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Unix UTC timestamp paired with the deletion revision' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'Idempotency-Replayed': IdempotencyReplayedHeaderSchema }),
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getFolderListFoldersRoute = createRoute({
  method: 'get',
  path: '/folder/listFolders',
  summary: 'List the folder tree accessible to the user',
  description:
    "Returns a hierarchical tree. Pagination ('offset'/'limit') applies to the root-level entries; X-Total-Count is the total number of root entries.",
  operationId: 'folderListFolders',
  request: { query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }) },
  responses: {
    200: {
      description: 'Folder tree (empty array when the user has no accessible folder)',
      content: { 'application/json': { schema: z.array(FolderNodeSchema) } },
      headers: z.object({ 'X-Total-Count': XTotalCountHeaderSchema }),
    },
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getFolderWritableFoldersRoute = createRoute({
  method: 'get',
  path: '/folder/writableFolders',
  summary: 'List accessible folders with item and folder-management capabilities',
  description:
    "Historical name — returns ALL accessible folders. access_type, is_readonly, can_create, can_edit and can_delete describe operations on items contained in the folder. The can_*_folder fields describe folder-management UI capabilities and never replace the authoritative checks performed by POST /folder/create, PUT /folder/update and DELETE /folder/delete. Rows are ordered by 'position' (MPTT pre-order), so parent_id + level + position rebuild the exact folder hierarchy, sibling order included.",
  operationId: 'folderWritableFolders',
  responses: {
    200: {
      description: 'Flat folder list',
      content: { 'application/json': { schema: z.array(WritableFolderSchema) } },
    },
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const postFolderCreateRoute = createRoute({
  method: 'post',
  path: '/folder/create',
  summary: 'Create a new folder',
  operationId: 'folderCreate',
  request: {
    body: { content: { 'application/json': { schema: FolderCreateBodySchema } }, required: true },
  },
  responses: {
    201: {
      description:
        'Folder created (no Location header: the API has no folder get-by-id endpoint yet; the body carries newId)',
      content: { 'application/json': { schema: CreatedResultSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const putFolderUpdateRoute = createRoute({
  method: 'put',
  path: '/folder/update',
  summary: 'Update an existing folder (partial update)',
  description:
    "PUT only. Every field except 'id' is optional; unspecified fields keep their current value. 'access_rights' is not updatable here (roles-management concern). Only administrators may change deletion_protected. Personal root folders cannot be renamed or moved, and cross-domain (personal ↔ shared) moves are rejected.",
  operationId: 'folderUpdate',
  request: {
    body: { content: { 'application/json': { schema: FolderUpdateBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Folder updated',
      content: { 'application/json': { schema: FolderUpdateResultSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const deleteFolderDeleteRoute = createRoute({
  method: 'delete',
  path: '/folder/delete',
  summary: 'Soft-delete a folder and its descendants',
  description:
    'DELETE only. The folder and all its descendants go to the recycle bin (restorable from Utilities → Recycled bin); contained items are soft-deleted. Personal root folders and folder id 0 cannot be deleted. The operation returns 409 when the subtree contains a deletion-protected folder or, while LAPR is enabled, an active item linked to a managed account or endpoint credential.',
  operationId: 'folderDelete',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            description: 'Folder id to delete (may also be sent in the JSON body)',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Folder deleted',
      content: { 'application/json': { schema: FolderDeleteResultSchema } },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getUserListRoute = createRoute({
  method: 'get',
  path: '/user/list',
  summary: 'List users (admin only)',
  operationId: 'userList',
  request: { query: z.object({ limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'User list (sensitive columns are never returned)',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const getMiscRefreshExtensionSettingsRoute = createRoute({
  method: 'get',
  path: '/misc/refreshExtensionSettings',
  summary: 'Get browser extension connection settings',
  operationId: 'miscRefreshExtensionSettings',
  responses: {
    200: ExtensionSettingsResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const postMiscRefreshExtensionSettingsRoute = createRoute({
  method: 'post',
  path: '/misc/refreshExtensionSettings',
  summary: 'Get browser extension connection settings (POST variant)',
  operationId: 'miscRefreshExtensionSettingsPost',
  responses: {
    200: ExtensionSettingsResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
  },
})

export const postWebauthnCreateRoute = createRoute({
  method: 'post',
  path: '/webauthn/create',
  summary: 'Create a passkey on an item',
  description:
    "TeamPass acts as the authenticator: it generates an ES256 key pair, stores the private key encrypted like an item password and returns what the extension needs to build the PublicKeyCredential. Needs the update right and edit access to the item's folder. Returns 503 while passkey support is disabled.",
  operationId: 'webauthnCreate',
  request: {
    body: { content: { 'application/json': { schema: WebauthnCreateBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Passkey created',
      content: { 'application/json': { schema: WebauthnCreatedCredentialSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
})

export const getWebauthnListRoute = createRoute({
  method: 'get',
  path: '/webauthn/list',
  summary: 'List usable passkeys',
  description:
    'Passkeys on items the caller can read, whose keys have reached the caller. At least one filter is mandatory.',
  operationId: 'webauthnList',
  request: {
    query: z.object({
      rp_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'rp_id', in: 'query', required: false, schema: { type: 'string' } },
        }),
      item_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'item_id',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Passkeys, possibly empty',
      content: { 'application/json': { schema: z.array(WebauthnCredentialSchema) } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
})

export const postWebauthnAssertRoute = createRoute({
  method: 'post',
  path: '/webauthn/assert',
  summary: 'Sign an assertion with a passkey',
  description:
    "The private key is decrypted and used on the server only. Each call increments the signature counter and is written to the item history. 422 when the caller's keys cannot decrypt the passkey yet (retry once the background task has distributed them).",
  operationId: 'webauthnAssert',
  request: {
    body: { content: { 'application/json': { schema: WebauthnAssertBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Assertion',
      content: { 'application/json': { schema: WebauthnAssertionSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    422: UnprocessableEntityResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
})

export const deleteWebauthnDeleteRoute = createRoute({
  method: 'delete',
  path: '/webauthn/delete',
  summary: 'Delete a passkey',
  description:
    "Deletes the passkey and its encryption keys. Needs the update right and edit access to the item's folder. The account on the site keeps the public key: remove it there too.",
  operationId: 'webauthnDelete',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Passkey deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.boolean().exactOptional(),
              id: z.int().exactOptional(),
              item_id: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    405: MethodNotAllowedResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  summary: 'This OpenAPI 3.1 contract',
  operationId: 'getOpenApiSpec',
  responses: {
    200: {
      description: 'The OpenAPI document',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    503: ApiDisabledResponse,
  },
  security: [],
})

export const getDevicePairingCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/devicePairing/capabilities',
  tags: ['External devices'],
  summary: 'Detect experimental external device pairing',
  description:
    'Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.',
  operationId: 'devicePairingCapabilities',
  responses: {
    200: {
      description:
        'Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.',
      content: { 'application/json': { schema: DevicePairingCapabilitiesSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postDevicePairingCredentialStatusRoute = createRoute({
  method: 'post',
  path: '/devicePairing/credentialStatus',
  tags: ['Device pairing'],
  summary: 'Prove whether a device credential remains authorized',
  description:
    'Experimental. Requires the exact PAT in a JSON body, trusted HTTPS and network ACL compliance. Available even when API or pairing is disabled. Known revoked credentials retain a hash-only proof record; unknown proofs receive a uniform 401. A generic 401 is never a local-vault wipe instruction.',
  operationId: 'devicePairingCredentialStatus',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().regex(/^[a-f0-9]{64}$/) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Possession-proven credential state; no PAT or private key is returned.',
      content: {
        'application/json': {
          schema: z
            .object({
              credential_id: z.int(),
              state: z.enum(['active', 'pending', 'suspended', 'invalidated']),
              reason: z
                .union([
                  z.literal(null),
                  z.literal('revoked'),
                  z.literal('expired'),
                  z.literal('access_removed'),
                  z.literal('keys_changed'),
                  z.literal('not_confirmed'),
                ])
                .nullable(),
              expires_at: z.int().nullable(),
              server_time: z.int(),
              server_url: z.url(),
            })
            .openapi({
              required: [
                'credential_id',
                'state',
                'reason',
                'expires_at',
                'server_time',
                'server_url',
              ],
            }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postDevicePairingClaimRoute = createRoute({
  method: 'post',
  path: '/devicePairing/claim',
  tags: ['External devices'],
  summary: 'Reserve an immutable external device claim',
  description:
    'Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.',
  operationId: 'devicePairingClaim',
  request: {
    body: { content: { 'application/json': { schema: DevicePairingClaimSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.',
      content: { 'application/json': { schema: DevicePairingStateSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postDevicePairingStatusRoute = createRoute({
  method: 'post',
  path: '/devicePairing/status',
  tags: ['External devices'],
  summary: 'Poll a claim using its verifier',
  description:
    'Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.',
  operationId: 'devicePairingStatus',
  request: {
    body: { content: { 'application/json': { schema: DevicePairingProofSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.',
      content: { 'application/json': { schema: DevicePairingStateSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})

export const postDevicePairingConsumeRoute = createRoute({
  method: 'post',
  path: '/devicePairing/consume',
  tags: ['External devices'],
  summary: 'Receive the approved protected credential',
  description:
    'Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.',
  operationId: 'devicePairingConsume',
  request: {
    body: { content: { 'application/json': { schema: DevicePairingProofSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.',
      content: { 'application/json': { schema: DevicePairingStateSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    405: MethodNotAllowedResponse,
    409: ConflictResponse,
    429: RateLimitedResponse,
    500: InternalErrorResponse,
    503: ApiDisabledResponse,
  },
  security: [],
})
