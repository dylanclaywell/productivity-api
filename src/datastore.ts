import { Datastore } from '@google-cloud/datastore'

const datastore = new Datastore({
  projectId: 'getproductiveapi',
})

export default datastore
