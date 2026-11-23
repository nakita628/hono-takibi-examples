type InstallStatus = {
  status?: { finished?: boolean | undefined; itemCount?: number | undefined } | undefined
}
type TruststoreItems = {
  alias?: string | undefined
  entryType?: string | undefined
  issuer?: string | undefined
  notAfter?: string | undefined
  notBefore?: string | undefined
  serialNumber?: number | undefined
  subject?: string | undefined
}
type TruststoreInfo = { aliases?: TruststoreItems[] | undefined; exists?: boolean | undefined }
type BundleDataProp = { key?: string | undefined; value?: string | undefined }
type BundleData = {
  category?: string | undefined
  fragment?: boolean | undefined
  id?: number | undefined
  name?: string | undefined
  props?: BundleDataProp[] | undefined
  state?: string | undefined
  stateRaw?: number | undefined
  symbolicName?: string | undefined
  version?: string | undefined
}
type BundleInfo = {
  data?: BundleData[] | undefined
  s?: number[] | undefined
  status?: string | undefined
}
type SamlConfigurationPropertyItemsBoolean = {
  description?: string | undefined
  is_set?: boolean | undefined
  name?: string | undefined
  optional?: boolean | undefined
  type?: number | undefined
  value?: boolean | undefined
}
type SamlConfigurationPropertyItemsString = {
  description?: string | undefined
  is_set?: boolean | undefined
  name?: string | undefined
  optional?: boolean | undefined
  type?: number | undefined
  value?: string | undefined
}
type SamlConfigurationPropertyItemsLong = {
  description?: string | undefined
  is_set?: boolean | undefined
  name?: string | undefined
  optional?: boolean | undefined
  type?: number | undefined
  value?: number | undefined
}
type SamlConfigurationPropertyItemsArray = {
  description?: string | undefined
  is_set?: boolean | undefined
  name?: string | undefined
  optional?: boolean | undefined
  type?: number | undefined
  values?: string[] | undefined
}
type SamlConfigurationProperties = {
  addGroupMemberships?: SamlConfigurationPropertyItemsBoolean | undefined
  assertionConsumerServiceURL?: SamlConfigurationPropertyItemsString | undefined
  clockTolerance?: SamlConfigurationPropertyItemsLong | undefined
  createUser?: SamlConfigurationPropertyItemsBoolean | undefined
  defaultGroups?: SamlConfigurationPropertyItemsArray | undefined
  defaultRedirectUrl?: SamlConfigurationPropertyItemsString | undefined
  digestMethod?: SamlConfigurationPropertyItemsString | undefined
  groupMembershipAttribute?: SamlConfigurationPropertyItemsString | undefined
  handleLogout?: SamlConfigurationPropertyItemsBoolean | undefined
  idpCertAlias?: SamlConfigurationPropertyItemsString | undefined
  idpHttpRedirect?: SamlConfigurationPropertyItemsBoolean | undefined
  idpUrl?: SamlConfigurationPropertyItemsString | undefined
  keyStorePassword?: SamlConfigurationPropertyItemsString | undefined
  logoutUrl?: SamlConfigurationPropertyItemsString | undefined
  nameIdFormat?: SamlConfigurationPropertyItemsString | undefined
  path?: SamlConfigurationPropertyItemsArray | undefined
  'service.ranking'?: SamlConfigurationPropertyItemsLong | undefined
  serviceProviderEntityId?: SamlConfigurationPropertyItemsString | undefined
  signatureMethod?: SamlConfigurationPropertyItemsString | undefined
  spPrivateKeyAlias?: SamlConfigurationPropertyItemsString | undefined
  synchronizeAttributes?: SamlConfigurationPropertyItemsArray | undefined
  useEncryption?: SamlConfigurationPropertyItemsBoolean | undefined
  userIDAttribute?: SamlConfigurationPropertyItemsString | undefined
  userIntermediatePath?: SamlConfigurationPropertyItemsString | undefined
}
type SamlConfigurationInfo = {
  bundle_location?: string | undefined
  description?: string | undefined
  pid?: string | undefined
  properties?: SamlConfigurationProperties | undefined
  service_location?: string | undefined
  title?: string | undefined
}
type KeystoreChainItems = {
  issuer?: string | undefined
  notAfter?: string | undefined
  notBefore?: string | undefined
  serialNumber?: number | undefined
  subject?: string | undefined
}
type KeystoreItems = {
  algorithm?: string | undefined
  alias?: string | undefined
  chain?: KeystoreChainItems[] | undefined
  entryType?: string | undefined
  format?: string | undefined
}
type KeystoreInfo = { aliases?: KeystoreItems[] | undefined; exists?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/.cqactions.html': {
      $post: {
        input: { query: { authorizableId: string; changelog: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config': {
      $post: {
        input: {
          query: {
            keyStorePassword?: string | undefined
            'keyStorePassword@TypeHint'?: string | undefined
            'service.ranking'?: number | undefined
            'service.ranking@TypeHint'?: string | undefined
            idpHttpRedirect?: boolean | undefined
            'idpHttpRedirect@TypeHint'?: string | undefined
            createUser?: boolean | undefined
            'createUser@TypeHint'?: string | undefined
            defaultRedirectUrl?: string | undefined
            'defaultRedirectUrl@TypeHint'?: string | undefined
            userIDAttribute?: string | undefined
            'userIDAttribute@TypeHint'?: string | undefined
            defaultGroups?: string[] | undefined
            'defaultGroups@TypeHint'?: string | undefined
            idpCertAlias?: string | undefined
            'idpCertAlias@TypeHint'?: string | undefined
            addGroupMemberships?: boolean | undefined
            'addGroupMemberships@TypeHint'?: string | undefined
            path?: string[] | undefined
            'path@TypeHint'?: string | undefined
            synchronizeAttributes?: string[] | undefined
            'synchronizeAttributes@TypeHint'?: string | undefined
            clockTolerance?: number | undefined
            'clockTolerance@TypeHint'?: string | undefined
            groupMembershipAttribute?: string | undefined
            'groupMembershipAttribute@TypeHint'?: string | undefined
            idpUrl?: string | undefined
            'idpUrl@TypeHint'?: string | undefined
            logoutUrl?: string | undefined
            'logoutUrl@TypeHint'?: string | undefined
            serviceProviderEntityId?: string | undefined
            'serviceProviderEntityId@TypeHint'?: string | undefined
            assertionConsumerServiceURL?: string | undefined
            'assertionConsumerServiceURL@TypeHint'?: string | undefined
            handleLogout?: boolean | undefined
            'handleLogout@TypeHint'?: string | undefined
            spPrivateKeyAlias?: string | undefined
            'spPrivateKeyAlias@TypeHint'?: string | undefined
            useEncryption?: boolean | undefined
            'useEncryption@TypeHint'?: string | undefined
            nameIdFormat?: string | undefined
            'nameIdFormat@TypeHint'?: string | undefined
            digestMethod?: string | undefined
            'digestMethod@TypeHint'?: string | undefined
            signatureMethod?: string | undefined
            'signatureMethod@TypeHint'?: string | undefined
            userIntermediatePath?: string | undefined
            'userIntermediatePath@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/com.shinesolutions.aem.passwordreset.Activator': {
      $post: {
        input: {
          query: {
            'pwdreset.authorizables'?: string[] | undefined
            'pwdreset.authorizables@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck': {
      $post: {
        input: {
          query: {
            'bundles.ignored'?: string[] | undefined
            'bundles.ignored@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/org.apache.felix.http': {
      $post: {
        input: {
          query: {
            'org.apache.felix.https.nio'?: boolean | undefined
            'org.apache.felix.https.nio@TypeHint'?: string | undefined
            'org.apache.felix.https.keystore'?: string | undefined
            'org.apache.felix.https.keystore@TypeHint'?: string | undefined
            'org.apache.felix.https.keystore.password'?: string | undefined
            'org.apache.felix.https.keystore.password@TypeHint'?: string | undefined
            'org.apache.felix.https.keystore.key'?: string | undefined
            'org.apache.felix.https.keystore.key@TypeHint'?: string | undefined
            'org.apache.felix.https.keystore.key.password'?: string | undefined
            'org.apache.felix.https.keystore.key.password@TypeHint'?: string | undefined
            'org.apache.felix.https.truststore'?: string | undefined
            'org.apache.felix.https.truststore@TypeHint'?: string | undefined
            'org.apache.felix.https.truststore.password'?: string | undefined
            'org.apache.felix.https.truststore.password@TypeHint'?: string | undefined
            'org.apache.felix.https.clientcertificate'?: string | undefined
            'org.apache.felix.https.clientcertificate@TypeHint'?: string | undefined
            'org.apache.felix.https.enable'?: boolean | undefined
            'org.apache.felix.https.enable@TypeHint'?: string | undefined
            'org.osgi.service.http.port.secure'?: string | undefined
            'org.osgi.service.http.port.secure@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/org.apache.http.proxyconfigurator.config': {
      $post: {
        input: {
          query: {
            'proxy.host'?: string | undefined
            'proxy.host@TypeHint'?: string | undefined
            'proxy.port'?: number | undefined
            'proxy.port@TypeHint'?: string | undefined
            'proxy.exceptions'?: string[] | undefined
            'proxy.exceptions@TypeHint'?: string | undefined
            'proxy.enabled'?: boolean | undefined
            'proxy.enabled@TypeHint'?: string | undefined
            'proxy.user'?: string | undefined
            'proxy.user@TypeHint'?: string | undefined
            'proxy.password'?: string | undefined
            'proxy.password@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet': {
      $post: {
        input: {
          query: {
            alias?: string | undefined
            'alias@TypeHint'?: string | undefined
            'dav.create-absolute-uri'?: boolean | undefined
            'dav.create-absolute-uri@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/org.apache.sling.security.impl.ReferrerFilter': {
      $post: {
        input: {
          query: {
            'allow.empty'?: boolean | undefined
            'allow.empty@TypeHint'?: string | undefined
            'allow.hosts'?: string | undefined
            'allow.hosts@TypeHint'?: string | undefined
            'allow.hosts.regexp'?: string | undefined
            'allow.hosts.regexp@TypeHint'?: string | undefined
            'filter.methods'?: string | undefined
            'filter.methods@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet': {
      $post: {
        input: {
          query: {
            'json.maximumresults'?: string | undefined
            'json.maximumresults@TypeHint'?: string | undefined
            'enable.html'?: boolean | undefined
            'enable.html@TypeHint'?: string | undefined
            'enable.txt'?: boolean | undefined
            'enable.txt@TypeHint'?: string | undefined
            'enable.xml'?: boolean | undefined
            'enable.xml@TypeHint'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/apps/system/config/:configNodeName': {
      $post: {
        input: { param: { configNodeName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bin/querybuilder.json': {
      $get: {
        input: {
          query: {
            path: string
            'p.limit': number
            '1_property': string
            '1_property.value': string
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            path: string
            'p.limit': number
            '1_property': string
            '1_property.value': string
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/crx/explorer/ui/setpassword.jsp': {
      $post: {
        input: { query: { old: string; plain: string; verify: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crx/packmgr/installstatus.jsp': {
      $get:
        | { input: {}; output: InstallStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/crx/packmgr/service.jsp': {
      $post: {
        input: { query: { cmd: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crx/packmgr/service/.json/:path': {
      $post: {
        input: { param: { path: string } } & {
          query: {
            cmd: string
            groupName?: string | undefined
            packageName?: string | undefined
            packageVersion?: string | undefined
            _charset_?: string | undefined
            force?: boolean | undefined
            recursive?: boolean | undefined
          }
        } & { form: { package?: File | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/crx/packmgr/service/script.html': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 405 }
    }
  } & {
    '/crx/packmgr/update.jsp': {
      $post: {
        input: {
          query: {
            groupName: string
            packageName: string
            version: string
            path: string
            filter?: string | undefined
            _charset_?: string | undefined
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/crx/server/crx.default/jcr:root/.1.json': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/etc/packages/:group/:name-{version}.zip': {
      $get: {
        input: { param: { group: string; name: string; version: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/etc/packages/:group/:name-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json': {
      $get: {
        input: { param: { group: string; name: string; version: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/etc/replication/agents.{runmode}.-1.json': {
      $get: {
        input: { param: { runmode: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/etc/replication/agents.{runmode}/:name': {
      $delete: {
        input: { param: { runmode: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { runmode: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { runmode: string; name: string } } & {
          query: {
            'jcr:content/cq:distribute'?: boolean | undefined
            'jcr:content/cq:distribute@TypeHint'?: string | undefined
            'jcr:content/cq:name'?: string | undefined
            'jcr:content/cq:template'?: string | undefined
            'jcr:content/enabled'?: boolean | undefined
            'jcr:content/jcr:description'?: string | undefined
            'jcr:content/jcr:lastModified'?: string | undefined
            'jcr:content/jcr:lastModifiedBy'?: string | undefined
            'jcr:content/jcr:mixinTypes'?: string | undefined
            'jcr:content/jcr:title'?: string | undefined
            'jcr:content/logLevel'?: string | undefined
            'jcr:content/noStatusUpdate'?: boolean | undefined
            'jcr:content/noVersioning'?: boolean | undefined
            'jcr:content/protocolConnectTimeout'?: number | undefined
            'jcr:content/protocolHTTPConnectionClosed'?: boolean | undefined
            'jcr:content/protocolHTTPExpired'?: string | undefined
            'jcr:content/protocolHTTPHeaders'?: string[] | undefined
            'jcr:content/protocolHTTPHeaders@TypeHint'?: string | undefined
            'jcr:content/protocolHTTPMethod'?: string | undefined
            'jcr:content/protocolHTTPSRelaxed'?: boolean | undefined
            'jcr:content/protocolInterface'?: string | undefined
            'jcr:content/protocolSocketTimeout'?: number | undefined
            'jcr:content/protocolVersion'?: string | undefined
            'jcr:content/proxyNTLMDomain'?: string | undefined
            'jcr:content/proxyNTLMHost'?: string | undefined
            'jcr:content/proxyHost'?: string | undefined
            'jcr:content/proxyPassword'?: string | undefined
            'jcr:content/proxyPort'?: number | undefined
            'jcr:content/proxyUser'?: string | undefined
            'jcr:content/queueBatchMaxSize'?: number | undefined
            'jcr:content/queueBatchMode'?: string | undefined
            'jcr:content/queueBatchWaitTime'?: number | undefined
            'jcr:content/retryDelay'?: string | undefined
            'jcr:content/reverseReplication'?: boolean | undefined
            'jcr:content/serializationType'?: string | undefined
            'jcr:content/sling:resourceType'?: string | undefined
            'jcr:content/ssl'?: string | undefined
            'jcr:content/transportNTLMDomain'?: string | undefined
            'jcr:content/transportNTLMHost'?: string | undefined
            'jcr:content/transportPassword'?: string | undefined
            'jcr:content/transportUri'?: string | undefined
            'jcr:content/transportUser'?: string | undefined
            'jcr:content/triggerDistribute'?: boolean | undefined
            'jcr:content/triggerModified'?: boolean | undefined
            'jcr:content/triggerOnOffTime'?: boolean | undefined
            'jcr:content/triggerReceive'?: boolean | undefined
            'jcr:content/triggerSpecific'?: boolean | undefined
            'jcr:content/userId'?: string | undefined
            'jcr:primaryType'?: string | undefined
            ':operation'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/etc/truststore': {
      $post: {
        input: { form: { 'truststore.p12'?: File | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/etc/truststore/truststore.p12': {
      $get: { input: {}; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/libs/granite/core/content/login.html': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/libs/granite/security/post/authorizables': {
      $post: {
        input: {
          query: {
            authorizableId: string
            intermediatePath: string
            createUser?: string | undefined
            createGroup?: string | undefined
            'rep:password'?: string | undefined
            'profile/givenName'?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/libs/granite/security/post/sslSetup.html': {
      $post: {
        input: {
          query: {
            keystorePassword: string
            keystorePasswordConfirm: string
            truststorePassword: string
            truststorePasswordConfirm: string
            httpsHostname: string
            httpsPort: string
          }
        } & { form: { certificateFile?: File | undefined; privatekeyFile?: File | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/libs/granite/security/post/truststore': {
      $post: {
        input: {
          query: {
            ':operation'?: string | undefined
            newPassword?: string | undefined
            rePassword?: string | undefined
            keyStoreType?: string | undefined
            removeAlias?: string | undefined
          }
        } & { form: { certificate?: File | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/libs/granite/security/truststore.json': {
      $get:
        | { input: {}; output: TruststoreInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/libs/replication/treeactivation.html': {
      $post: {
        input: {
          query: { ignoredeactivated: boolean; onlymodified: boolean; path: string; cmd: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/system/console/bundles/:name': {
      $post: {
        input: { param: { name: string } } & { query: { action: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/system/console/bundles/:name.json': {
      $get:
        | {
            input: { param: { name: string } }
            output: BundleInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/console/configMgr': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler': {
      $post:
        | {
            input: {
              query: {
                post?: boolean | undefined
                apply?: boolean | undefined
                delete?: boolean | undefined
                action?: string | undefined
                $location?: string | undefined
                path?: string[] | undefined
                'service.ranking'?: number | undefined
                idpUrl?: string | undefined
                idpCertAlias?: string | undefined
                idpHttpRedirect?: boolean | undefined
                serviceProviderEntityId?: string | undefined
                assertionConsumerServiceURL?: string | undefined
                spPrivateKeyAlias?: string | undefined
                keyStorePassword?: string | undefined
                defaultRedirectUrl?: string | undefined
                userIDAttribute?: string | undefined
                useEncryption?: boolean | undefined
                createUser?: boolean | undefined
                addGroupMemberships?: boolean | undefined
                groupMembershipAttribute?: string | undefined
                defaultGroups?: string[] | undefined
                nameIdFormat?: string | undefined
                synchronizeAttributes?: string[] | undefined
                handleLogout?: boolean | undefined
                logoutUrl?: string | undefined
                clockTolerance?: number | undefined
                digestMethod?: string | undefined
                signatureMethod?: string | undefined
                userIntermediatePath?: string | undefined
                propertylist?: string[] | undefined
              }
            }
            output: SamlConfigurationInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                post?: boolean | undefined
                apply?: boolean | undefined
                delete?: boolean | undefined
                action?: string | undefined
                $location?: string | undefined
                path?: string[] | undefined
                'service.ranking'?: number | undefined
                idpUrl?: string | undefined
                idpCertAlias?: string | undefined
                idpHttpRedirect?: boolean | undefined
                serviceProviderEntityId?: string | undefined
                assertionConsumerServiceURL?: string | undefined
                spPrivateKeyAlias?: string | undefined
                keyStorePassword?: string | undefined
                defaultRedirectUrl?: string | undefined
                userIDAttribute?: string | undefined
                useEncryption?: boolean | undefined
                createUser?: boolean | undefined
                addGroupMemberships?: boolean | undefined
                groupMembershipAttribute?: string | undefined
                defaultGroups?: string[] | undefined
                nameIdFormat?: string | undefined
                synchronizeAttributes?: string[] | undefined
                handleLogout?: boolean | undefined
                logoutUrl?: string | undefined
                clockTolerance?: number | undefined
                digestMethod?: string | undefined
                signatureMethod?: string | undefined
                userIntermediatePath?: string | undefined
                propertylist?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 302
          }
        | {
            input: {
              query: {
                post?: boolean | undefined
                apply?: boolean | undefined
                delete?: boolean | undefined
                action?: string | undefined
                $location?: string | undefined
                path?: string[] | undefined
                'service.ranking'?: number | undefined
                idpUrl?: string | undefined
                idpCertAlias?: string | undefined
                idpHttpRedirect?: boolean | undefined
                serviceProviderEntityId?: string | undefined
                assertionConsumerServiceURL?: string | undefined
                spPrivateKeyAlias?: string | undefined
                keyStorePassword?: string | undefined
                defaultRedirectUrl?: string | undefined
                userIDAttribute?: string | undefined
                useEncryption?: boolean | undefined
                createUser?: boolean | undefined
                addGroupMemberships?: boolean | undefined
                groupMembershipAttribute?: string | undefined
                defaultGroups?: string[] | undefined
                nameIdFormat?: string | undefined
                synchronizeAttributes?: string[] | undefined
                handleLogout?: boolean | undefined
                logoutUrl?: string | undefined
                clockTolerance?: number | undefined
                digestMethod?: string | undefined
                signatureMethod?: string | undefined
                userIntermediatePath?: string | undefined
                propertylist?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/system/console/jmx/com.adobe.granite:type=Repository/op/:action': {
      $post: { input: { param: { action: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/system/console/status-productinfo.json': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/health': {
      $get: {
        input: { query: { tags?: string | undefined; combineTagsOr?: boolean | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:intermediatePath/:authorizableId.ks.html': {
      $post:
        | {
            input: { param: { intermediatePath: string; authorizableId: string } } & {
              query: {
                ':operation'?: string | undefined
                currentPassword?: string | undefined
                newPassword?: string | undefined
                rePassword?: string | undefined
                keyPassword?: string | undefined
                keyStorePass?: string | undefined
                alias?: string | undefined
                newAlias?: string | undefined
                removeAlias?: string | undefined
              }
            } & {
              form: {
                'cert-chain'?: File | undefined
                keyStore?: File | undefined
                pk?: File | undefined
              }
            }
            output: KeystoreInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { intermediatePath: string; authorizableId: string } } & {
              query: {
                ':operation'?: string | undefined
                currentPassword?: string | undefined
                newPassword?: string | undefined
                rePassword?: string | undefined
                keyPassword?: string | undefined
                keyStorePass?: string | undefined
                alias?: string | undefined
                newAlias?: string | undefined
                removeAlias?: string | undefined
              }
            } & {
              form: {
                'cert-chain'?: File | undefined
                keyStore?: File | undefined
                pk?: File | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:intermediatePath/:authorizableId.ks.json': {
      $get:
        | {
            input: { param: { intermediatePath: string; authorizableId: string } }
            output: KeystoreInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { intermediatePath: string; authorizableId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:intermediatePath/:authorizableId/keystore/store.p12': {
      $get: {
        input: { param: { intermediatePath: string; authorizableId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:path/': {
      $post: {
        input: { param: { path: string } } & {
          query: { 'jcr:primaryType': string; ':name': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:path/:name': {
      $delete: {
        input: { param: { path: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { path: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { path: string; name: string } } & {
          query: { ':operation'?: string | undefined; deleteAuthorizable?: string | undefined }
        } & { form: { file?: File | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:path/:name.rw.html': {
      $post: {
        input: { param: { path: string; name: string } } & {
          query: { addMembers?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
