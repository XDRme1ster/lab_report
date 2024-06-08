<script>
    // This component receives the fileContents as a prop
    /**
	 * @type {{ patient: { firstname: any; lastname: any; gender: any; birthdate: any; address: { street: any; street_number: any; zip: any; locality: any; country: any; }; }; }}
	 */
     export let ReportData;
</script>
  
  <div class="bg-indigo-100 p-4 rounded">
    <h2 class="text-indigo-500 font-bold text-2xl">Patient Information</h2>
    <p><strong>Name:</strong> {ReportData.patient.firstname} {ReportData.patient.lastname}</p>
    <p><strong>Gender:</strong> {ReportData.patient.gender}</p>
    <p><strong>Birthdate:</strong> {ReportData.patient.birthdate}</p>
    <p><strong>Address:</strong> {ReportData.patient.address.street} {ReportData.patient.address.street_number}, {ReportData.patient.address.zip} {ReportData.patient.address.locality}, {ReportData.patient.address.country}</p>
  </div>