/**
 * Q2: DOM-Based To-Do List
 * Demonstrating:
 * 1. document.getElementById()
 * 2. document.createElement()
 * 3. appendChild()
 * 4. classList manipulation
 * 5. node.remove()
 * 6. Event Listeners
 */

// Cache DOM references
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const taskCounter = document.getElementById('task-counter');
const taskSummary = document.getElementById('task-summary');

/**
 * Creates and appends a new task item into the DOM tree
 * @param {string} text - Task description
 * @param {boolean} isCompleted - Initial completion state
 */
function createTaskElement(text, isCompleted = false) {
  // 1. document.createElement('li')
  const li = document.createElement('li');
  li.className = 'task-item';
  if (isCompleted) {
    li.classList.add('completed');
  }

  // Task Left Container (Checkbox + Text)
  const taskLeft = document.createElement('div');
  taskLeft.className = 'task-left';

  // Toggle Checkbox Button
  const checkBtn = document.createElement('button');
  checkBtn.type = 'button';
  checkBtn.className = 'task-checkbox-btn';
  checkBtn.setAttribute('aria-label', 'Toggle complete task');
  checkBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  // Task Text Span
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  // Append children to taskLeft
  taskLeft.appendChild(checkBtn);
  taskLeft.appendChild(span);

  // Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'btn btn-delete';
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  `;

  // Event Listener: Toggle completion using classList
  checkBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateCounters();
  });

  // Clicking the task text also toggles completion
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateCounters();
  });

  // Event Listener: Delete task with exit animation using remove()
  deleteBtn.addEventListener('click', () => {
    li.classList.add('deleting');
    // Wait for the CSS fade-slide animation before calling .remove()
    setTimeout(() => {
      li.remove();
      updateCounters();
    }, 220);
  });

  // Append components to the <li>
  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);

  // 3. appendChild to the parent <ul> container
  taskList.appendChild(li);

  // Recalculate stats and empty state
  updateCounters();
}

/**
 * Handles new task submission from input
 */
function handleAddTask(event) {
  if (event) event.preventDefault();

  const text = taskInput.value.trim();
  if (text === '') {
    taskInput.focus();
    return;
  }

  // Create new DOM task element
  createTaskElement(text, false);

  // Clear input and restore focus
  taskInput.value = '';
  taskInput.focus();
}

/**
 * Updates task counts and empty state visibility in the DOM
 */
function updateCounters() {
  const allTasks = taskList.querySelectorAll('.task-item:not(.deleting)');
  const completedTasks = taskList.querySelectorAll('.task-item.completed:not(.deleting)');

  const total = allTasks.length;
  const completed = completedTasks.length;
  const remaining = total - completed;

  // Update counters
  taskCounter.textContent = `${remaining} task${remaining === 1 ? '' : 's'} remaining`;
  taskSummary.textContent = `${completed} of ${total} completed`;

  // Toggle empty-state visibility
  if (total === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }
}

// Attach Event Listeners
todoForm.addEventListener('submit', handleAddTask);

// Initial sample tasks to demonstrate DOM functionality on load
window.addEventListener('DOMContentLoaded', () => {
  createTaskElement('Review HTML & CSS fundamental concepts', true);
  createTaskElement('Complete JavaScript Calculator (Q1)', true);
  createTaskElement('Implement DOM task manager dynamic removal (Q2)', false);
});
