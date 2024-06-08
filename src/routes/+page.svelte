<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDate } from '../lib/utils';
	import type { LxStandard } from "./lx_standard_types";

	let ReportData: LxStandard | null = null; // Initialize as null

	onMount(async () => {
		try {
			const response = await fetch('example_data/stdreport_example.json');
			ReportData = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
	
</script>

<h1 class="text-center">Laboratory Report</h1>
<div class="card px-4 mx-5 w-max">
	<p class="text-center text-primary-500 border-primary-500 border-2 rounded-md p-1 m-2 font-bold">Patient</p>
	<dl class="grid grid-cols-2 gap-4">
		<dt>First Name, Last Name</dt>
		<dd>{(ReportData?.patient?.firstname || 'N/A') + ', ' + (ReportData?.patient?.lastname || 'N/A')}</dd>
		<dt>Date of Birth</dt>
		<dd>{ReportData?.patient?.birthdate ? formatDate(ReportData.patient.birthdate) : 'N/A'}</dd>
		<dt>Gender</dt>
		<dd>{ReportData?.patient?.gender || 'N/A'}</dd>
		<dt>Address</dt>
		<dd>{ReportData?.patient?.address.street || 'N/A'} {ReportData?.patient?.address.street_number || 'N/A'}, {ReportData?.patient?.address.locality || 'N/A'}, {ReportData?.patient?.address.country || 'N/A'}-{ReportData?.patient?.address.zip || 'N/A'}</dd>
	</dl>
</div>
<style>
	dt {
		font-weight: bold;
	}
</style>

