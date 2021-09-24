// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, osPolicyAssignment, osPolicyAssignmentId) {
  // [START osconfig_v1alpha_generated_OsConfigZonalService_CreateOSPolicyAssignment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name in the form:
   *  projects/{project}/locations/{location}
   */
  // const parent = 'abc123'
  /**
   *  Required. The OS policy assignment to be created.
   */
  // const osPolicyAssignment = ''
  /**
   *  Required. The logical name of the OS policy assignment in the project
   *  with the following restrictions:
   *  * Must contain only lowercase letters, numbers, and hyphens.
   *  * Must start with a letter.
   *  * Must be between 1-63 characters.
   *  * Must end with a number or a letter.
   *  * Must be unique within the project.
   */
  // const osPolicyAssignmentId = 'abc123'

  // Imports the Osconfig library
  const {OsConfigZonalServiceClient} = require('@google-cloud/osconfig').v1alpha;

  // Instantiates a client
  const osconfigClient = new OsConfigZonalServiceClient();

  async function createOSPolicyAssignment() {
    // Construct request
    const request = {
      parent,
      osPolicyAssignment,
      osPolicyAssignmentId,
    };

    // Run request
    const [operation] = await osconfigClient.createOSPolicyAssignment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createOSPolicyAssignment();
  // [END osconfig_v1alpha_generated_OsConfigZonalService_CreateOSPolicyAssignment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
