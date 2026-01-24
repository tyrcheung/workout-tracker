<script>
  import { sessions, addSession, updateSession, deleteSession } from '$lib/stores/sessions';
  import Sets from './Sets.svelte';

  let newName = '';
  let newDate = '';
  let newNote = '';
</script>

<h2>Sessions</h2>

<label>Session Name: <input placeholder="Session Name" bind:value={newName}/></label>
<label>Date: <input type="date" bind:value={newDate}/></label>
<label>Note: <input placeholder="Note" bind:value={newNote}/></label>
<button on:click={() => { addSession(newName,newDate,newNote); newName=''; newDate=''; newNote=''; }}>Add Session</button>

<ul>
  {#each $sessions as session (session.id)}
    <li>
      <label>Name: <input bind:value={session.name} on:input={(e)=>updateSession(session.id,'name',e.target.value)}/></label>
      <label>Date: <input type="date" bind:value={session.date} on:input={(e)=>updateSession(session.id,'date',e.target.value)}/></label>
      <label>Note: <input bind:value={session.note} on:input={(e)=>updateSession(session.id,'note',e.target.value)}/></label>
      <button on:click={()=>deleteSession(session.id)}>Delete</button>

      <!-- Include Sets component -->
      <Sets {session}/>
    </li>
  {/each}
</ul>
