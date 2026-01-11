<script>
  import { sessions, addSession, updateSession, deleteSession } from '$lib/stores/sessions';
  import Sets from './Sets.svelte';

  let newName = '';
  let newDate = '';
  let newNote = '';
</script>

<h2>Sessions</h2>

<input placeholder="Session Name" bind:value={newName}/>
<input type="date" bind:value={newDate}/>
<input placeholder="Note" bind:value={newNote}/>
<button on:click={() => { addSession(newName,newDate,newNote); newName=''; newDate=''; newNote=''; }}>Add Session</button>

<ul>
  {#each $sessions as session (session.id)}
    <li>
      <input bind:value={session.name} on:input={(e)=>updateSession(session.id,'name',e.target.value)}/>
      <input type="date" bind:value={session.date} on:input={(e)=>updateSession(session.id,'date',e.target.value)}/>
      <input bind:value={session.note} on:input={(e)=>updateSession(session.id,'note',e.target.value)}/>
      <button on:click={()=>deleteSession(session.id)}>Delete</button>

      <!-- Include Sets component -->
      <Sets {session}/>
    </li>
  {/each}
</ul>
