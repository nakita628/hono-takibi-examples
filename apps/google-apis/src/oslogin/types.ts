type Empty = { [x: string]: unknown }
type SshPublicKey = {
  expirationTimeUsec?: string | undefined
  fingerprint?: string | undefined
  key?: string | undefined
  name?: string | undefined
}
type PosixAccount = {
  accountId?: string | undefined
  gecos?: string | undefined
  gid?: string | undefined
  homeDirectory?: string | undefined
  name?: string | undefined
  operatingSystemType?: 'OPERATING_SYSTEM_TYPE_UNSPECIFIED' | 'LINUX' | 'WINDOWS' | undefined
  primary?: boolean | undefined
  shell?: string | undefined
  systemId?: string | undefined
  uid?: string | undefined
  username?: string | undefined
}
type UniversalTwoFactor = { appId?: string | undefined }
type WebAuthn = { rpId?: string | undefined }
type SecurityKey = {
  privateKey?: string | undefined
  publicKey?: string | undefined
  universalTwoFactor?: UniversalTwoFactor | undefined
  webAuthn?: WebAuthn | undefined
}
type LoginProfile = {
  name?: string | undefined
  posixAccounts?: PosixAccount[] | undefined
  securityKeys?: SecurityKey[] | undefined
  sshPublicKeys?: { [x: string]: SshPublicKey } | undefined
}
type ImportSshPublicKeyResponse = {
  details?: string | undefined
  loginProfile?: LoginProfile | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SshPublicKey
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SshPublicKey }
        output: SshPublicKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name/loginProfile': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            projectId?: string | undefined
            systemId?: string | undefined
            view?: 'LOGIN_PROFILE_VIEW_UNSPECIFIED' | 'BASIC' | 'SECURITY_KEY' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LoginProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/sshPublicKeys': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SshPublicKey }
        output: SshPublicKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent:importSshPublicKey': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            projectId?: string | undefined
            view?: 'LOGIN_PROFILE_VIEW_UNSPECIFIED' | 'BASIC' | 'SECURITY_KEY' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SshPublicKey }
        output: ImportSshPublicKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
