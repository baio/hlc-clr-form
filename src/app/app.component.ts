import { Component } from '@angular/core';
import { ClrFormLayouts } from '@ng-holistic/clr-forms';
import { TextMask } from '@ng-holistic/clr-controls';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';


const typeaheadSearch = text$ =>
  text$.pipe(
    map((args: any) =>
      [
        { key: 'one', label: 'one' },
        { key: 'two', label: 'two' },
        { key: 'three', label: 'three' }
      ].filter(f =>
        args.kind === 'SearchArgTyping' ? !args.term || f.label.startsWith(args.term) : true
      )
    )
  )

const definition = (form: FormGroup): ClrFormLayouts.ClrFormLayout => ({
  kind: 'fields',
  fields: [
    {
      id: 'text',
      kind: 'TextField',
      props: {
        label: 'Text',
        placeholder: 'Type something'
      }
    },
    {
      id: 'num',
      kind: 'MaskField',
      props: {
        label: 'Number',
        placeholder: '0000000',
        mask: TextMask.int(7),
        unmask: TextMask.unmaskNumber
      }
    },
    {
      id: 'decNum',
      kind: 'MaskField',
      props: {
        label: 'Decimal number',
        placeholder: '0000000.00',
        mask: TextMask.float(7, 2),
        unmask: TextMask.unmaskNumber
      }
    },
    {
      id: 'phone',
      kind: 'PhoneField',
      label: 'Phone'
    },
    {
      id: 'password',
      kind: 'PasswordField',
      label: 'Password'
    },
    {
      id: 'textarea',
      kind: 'TextAreaField',
      props: {
        label: 'Text Area',
        placeholder: 'Type something'
      }
    },
    {
      id: 'date',
      kind: 'DateField',
      label: 'Date'
    },
    {
      id: 'date-time',
      kind: 'DateTimeField',
      label: 'Date Time'
    },
    {
      id: 'date-range',
      kind: 'DateRangeField',
      label: 'Date Range'
    },
    {
      id: 'moth-year',
      kind: 'MonthYearSelectField',
      label: 'Moth Year'
    },
    {
      id: 'select',
      kind: 'SelectField',
      props: {
        label: 'Select',
        items: [{ key: 'one', label: 'one' }, { key: 'two', label: 'two' }, { key: 'three', label: 'three' }]
      }
    },
    {
      id: 'multiSelect',
      kind: 'MultiSelectField',
      props: {
        label: 'Multi select',
        items: [{ key: 'one', label: 'one' }, { key: 'two', label: 'two' }, { key: 'three', label: 'three' }]
      }
    },
    {
      id: 'toggle',
      kind: 'ToggleField',
      props: {
        label: 'Toggle',
        text: 'Use feature'
      }
    },
    {
      id: 'options',
      kind: 'OptionsField',
      hidden: form.valueChanges.pipe(map(val => val.toggle === true)),
      props: {
        label: 'Options',
        items: [{ key: 'opt1', label: 'opt1' }, { key: 'opt2', label: 'opt2' }]
      }
    },
    {
      id: 'checkboxes',
      kind: 'CheckboxesField',
      props: {
        label: 'Checkboxes',
        items: [{ key: 'chk1', label: 'chk1' }, { key: 'chk2', label: 'chk2' }]
      }
    }
  ]
});



@Component({
  selector: 'my-app',
  template: `<hlc-clr-form [group]="definition"></hlc-clr-form>`
})
export class AppComponent {
  readonly definition = definition;
}
